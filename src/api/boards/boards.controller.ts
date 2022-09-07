import { Body, Controller, Post, Get, Put, Param } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardInputDto } from './dto/boards.input.dto';

@Controller('api/boards')
export class BoardsController {
  constructor(private readonly boardService: BoardsService) {}

  @Post()
  create(@Body() boardInputDto: BoardInputDto): Promise<any> {
    return this.boardService.createBoard(boardInputDto);
  }

  @Get()
  getAll() {
    return this.boardService.getBoards();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() boardInputDto: BoardInputDto,
  ): Promise<any> {
    return this.boardService.updateBoard(id, boardInputDto);
  }
}
