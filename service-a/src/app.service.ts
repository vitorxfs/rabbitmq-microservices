import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getFoo(foo: string) {
    if (foo === 'foo') {
      console.log('bar');
    } else {
      console.log('baz');
    }
  }
}
