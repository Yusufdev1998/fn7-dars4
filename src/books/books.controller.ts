import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Books } from 'generated/prisma';

@Controller('/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get()
  getBooks() {
    return this.booksService.getAllBooks();
  }
  @Get('/count')
  getBooksCount() {
    return this.booksService.getBooksCount();
  }
  @Get('/:id')
  getBookById(@Param() params: { id: string }) {
    const { id } = params;
    return this.booksService.getBookById(+id);
  }

  @Post()
  createBook(@Body() body: Books) {
    return this.booksService.createBook(body);
  }

  @Patch('/:id')
  updateBook(@Body() body: Partial<Books>, @Param() params: { id: string }) {
    return this.booksService.updateBook(body, +params.id);
  }

  @Delete('/:id')
  deleteBook(@Param() params: { id: string }) {
    const { id } = params;
    return this.booksService.deleteBook(+id);
  }
}
