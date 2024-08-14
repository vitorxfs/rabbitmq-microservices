import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { FooService } from './foo.service';

@Controller('foo')
export class FooController {
  constructor(private readonly fooService: FooService) {}

  @Get()
  foo(@Res() res: Response) {
    this.fooService.foo();
    res.send('foo sent');
  }
}
