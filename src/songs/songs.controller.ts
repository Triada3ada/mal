import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create() {
    return this.songsService.create('Animals by Martin Garrix');
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findById() {
    return 'find by id song';
  }

  @Put(':id')
  update() {
    return 'update the song by id';
  }

  @Delete(':id')
  delete() {
    return 'delete the song by id';
  }
}
