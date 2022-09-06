import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class BoardInputDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  title: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(200)
  content: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
