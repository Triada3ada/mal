import {IsNotEmpty, IsString} from 'class-validator'

export class CreateSongDto {
  
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  readonly artists: string[];

  readonly releaseDate: Date;

  readonly duration: Date;
}
