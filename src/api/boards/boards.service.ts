import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardInputDto } from './dto/boards.input.dto';
import { BoardsEntity } from './entities/boards.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardsEntity)
    private readonly boardsRepository: Repository<BoardsEntity>,
  ) {}

  async createBoard(boardInputDto: BoardInputDto): Promise<any> {
    try {
      const { title, content, password } = boardInputDto;

      const board = this.boardsRepository.create({ title, content, password });

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
}
