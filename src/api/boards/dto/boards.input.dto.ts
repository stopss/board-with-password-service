import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class BoardInputDto {
  @ApiProperty({ example: 'μ λͺ©π', required: true })
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  // μ λͺ© μ΅λ 20μ
  title: string;

  @ApiProperty({ example: 'λ΄μ©π', required: true })
  @IsNotEmpty()
  @IsString()
  @MaxLength(200)
  // λ³Έλ¬Έ μ΅λ 200μ
  content: string;

  @ApiProperty({ example: 'abc123', required: true })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @Matches(/(?=.*\d).{6,}/)
  // λΉλ°λ²νΈ 6μλ¦¬ μ΄μ, μ«μ 1κ° μ΄μ λ°λμ ν¬ν¨
  password: string;
}
