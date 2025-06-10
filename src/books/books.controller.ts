import { Controller, Get, Param } from '@nestjs/common';

@Controller('/books')
export class BooksController {
  @Get()
  getBooks() {
    return [];
  }

  @Get('/:number')
  getBook(@Param() params: { number: string }) {
    return params.number;
  }
}
