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
import { ApiBody, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { BoardsService } from './boards.service';
import { BoardInputDto } from './dto/boards.input.dto';

@Controller('api/boards')
@ApiTags('Board')
export class BoardsController {
  constructor(private readonly boardService: BoardsService) {}

  @Post()
  @ApiOperation({
    summary: '게시글 Create API',
    description: '게시글을 작성합니다.',
  })
  create(@Body() boardInputDto: BoardInputDto): Promise<any> {
    return this.boardService.createBoard(boardInputDto);
  }

  @Get()
  @ApiOperation({
    summary: '게시글 Read API',
    description: '최신 글 순서로 게시글 전체 목록을 가져옵니다.',
  })
  @ApiQuery({
    name: 'page',
    type: 'string',
  })
  getAll(@Query() { page }): Promise<any> {
    return this.boardService.getBoards(parseInt(page));
  }

  @Put(':id')
  @ApiOperation({
    summary: '게시글 Update API',
    description: '비밀번호가 일치하는 경우 게시글을 수정합니다.',
  })
  update(
    @Param('id') id: string,
    @Body() boardInputDto: BoardInputDto,
  ): Promise<any> {
    return this.boardService.updateBoard(id, boardInputDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '게시글 Delete API',
    description: '비밀번호가 일치하는 경우 게시글을 삭제합니다.',
  })
  @ApiBody({
    schema: {
      properties: {
        password: { type: 'string', description: '비밀번호' },
      },
    },
  })
  delete(@Param('id') id: string, @Body() body): Promise<any> {
    return this.boardService.deleteBoard(id, body.password);
  }
}
