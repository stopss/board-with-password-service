import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class BoardInputDto {
  @ApiProperty({ example: '제목📌', required: true })
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  // 제목 최대 20자
  title: string;

  @ApiProperty({ example: '내용🍀', required: true })
  @IsNotEmpty()
  @IsString()
  @MaxLength(200)
  // 본문 최대 200자
  content: string;

  @ApiProperty({ example: 'abc123', required: true })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @Matches(/(?=.*\d).{6,}/)
  // 비밀번호 6자리 이상, 숫자 1개 이상 반드시 포함
  password: string;
}
