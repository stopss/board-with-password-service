import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { BoardsEntity } from './entities/boards.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BoardsEntity]), HttpModule],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
