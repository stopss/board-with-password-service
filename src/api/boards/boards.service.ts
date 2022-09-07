import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardInputDto } from './dto/boards.input.dto';
import { BoardsEntity } from './entities/boards.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardsEntity)
    private readonly boardsRepository: Repository<BoardsEntity>,
  ) {}

  async findBoardById(id: string) {
    try {
      const existBoard = await this.boardsRepository.findOne({ where: { id } });

      if (!existBoard) {
        throw new NotFoundException(
          Object.assign({
            success: false,
            statusCode: 404,
            message: 'Not Found Board ID',
            timestamp: new Date().toISOString(),
          }),
        );
      }

      return existBoard;
    } catch (NotFoundException) {
      throw NotFoundException;
    }
  }

  async createBoard(boardInputDto: BoardInputDto): Promise<any> {
    try {
      const { title, content, password } = boardInputDto;

      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      const board = this.boardsRepository.create({
        title,
        content,
        password: hashedPassword,
      });

      await this.boardsRepository.save(board);

      return Object.assign({
        success: true,
        statusCode: 201,
        data: board,
        message: '게시글이 등록되었습니다.',
        timestamp: new Date().toISOString(),
      });
    } catch (HttpException) {
      throw new HttpException();
    }
  }

  async getBoards() {
    const list = await this.boardsRepository.find();
    return list;
  }

  async updateBoard(id: string, boardInputDto: BoardInputDto): Promise<any> {
    try {
      const board = await this.findBoardById(id);

      const { password } = boardInputDto;

      const validatePw = await bcrypt.compare(password, board.password);

      if (!validatePw) {
        return Object.assign({
          success: false,
          statusCode: 400,
          message: '비밀번호가 맞지 않습니다.',
          timestamp: new Date().toISOString(),
        });
      }

      await this.boardsRepository.update(id, boardInputDto);

      const result = await this.findBoardById(id);

      return Object.assign({
        success: true,
        statusCode: 200,
        data: result,
        message: '게시글이 수정되었습니다.',
        timestamp: new Date().toISOString(),
      });
    } catch (NotFoundException) {
      throw NotFoundException;
    }
  }
}
