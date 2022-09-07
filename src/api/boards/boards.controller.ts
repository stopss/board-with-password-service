import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
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
  getAll(@Query() { page }): Promise<any> {
    return this.boardService.getBoards(parseInt(page));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() boardInputDto: BoardInputDto,
  ): Promise<any> {
    return this.boardService.updateBoard(id, boardInputDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Body() body): Promise<any> {
    return this.boardService.deleteBoard(id, body.password);
  }
}
