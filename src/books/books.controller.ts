import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get()
  getBooks() {
    return [];
  }

  @Get('/count')
  getBooksCount() {
    return this.booksService.getBooksCount();
  }

  @Get('/:number')
  getBook(@Param() params: { number: string }) {
    return params.number;
  }
}
