import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardInputDto } from './dto/boards.input.dto';
import { BoardsEntity } from './entities/boards.entity';
import * as bcrypt from 'bcrypt';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardsEntity)
    private readonly boardsRepository: Repository<BoardsEntity>,
    private httpService: HttpService,
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
      const api_key = process.env.API_KEY;
      const weatherInfo = await this.httpService
        .get(
          `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=Seoul&aqi=no&lang=ko`,
        )
        .toPromise();
      const { title, content, password } = boardInputDto;

      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      const board = this.boardsRepository.create({
        title,
        content,
        password: hashedPassword,
        weather: weatherInfo.data.current.condition.text,
      });

      await this.boardsRepository.save(board);

      return Object.assign({
        success: true,
        statusCode: 201,
        data: board,
        message: '게시글이 등록되었습니다.',
        timestamp: new Date().toISOString(),
      });
    } catch (NotFoundException) {
      throw NotFoundException;
    }
  }

  async getBoards(page: number) {
    try {
      const take = 20;
      const skip = (page - 1) * take;

      const boardList = await this.boardsRepository.find({
        order: { updateAt: 'DESC' },
        take,
        skip,
      });

      if (boardList.length === 0) {
        throw new NotFoundException(
          Object.assign({
            success: false,
            statusCode: 404,
            message: '작성된 게시글이 없습니다.',
            timestamp: new Date().toISOString(),
          }),
        );
      }

      return Object.assign({
        success: true,
        statusCode: 200,
        data: boardList,
        message: '게시판 전체 목록 조회가 완료되었습니다.',
        timestamp: new Date().toISOString(),
      });
    } catch (NotFoundException) {
      throw NotFoundException;
    }
  }

  async updateBoard(id: string, boardInputDto: BoardInputDto): Promise<any> {
    try {
      const board = await this.findBoardById(id);

      const { title, content, password } = boardInputDto;

      const validatePw = await bcrypt.compare(password, board.password);

      if (!validatePw) {
        return Object.assign({
          success: false,
          statusCode: 400,
          message: '비밀번호가 맞지 않습니다.',
          timestamp: new Date().toISOString(),
        });
      }

      const updateData = { title, content };

      await this.boardsRepository.update(id, updateData);

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

  async deleteBoard(id: string, password: string): Promise<any> {
    try {
      const board = await this.findBoardById(id);

      const validatePw = await bcrypt.compare(password, board.password);

      if (!validatePw) {
        return Object.assign({
          success: false,
          statusCode: 400,
          message: '비밀번호가 맞지 않습니다.',
          timestamp: new Date().toISOString(),
        });
      }

      await this.boardsRepository.softDelete(id);

      return Object.assign({
        success: true,
        statusCode: 200,
        message: '게시글이 삭제되었습니다.',
        timestamp: new Date().toISOString(),
      });
    } catch (NotFoundException) {
      throw NotFoundException;
    }
  }
}
