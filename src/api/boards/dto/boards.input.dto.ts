import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class BoardInputDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  // 제목 최대 20자
  title: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(200)
  // 본문 최대 200자
  content: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @Matches(/(?=.*\d).{6,}/)
  // 비밀번호 6자리 이상, 숫자 1개 이상 반드시 포함
  password: string;
}
