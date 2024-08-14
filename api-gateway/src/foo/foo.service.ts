import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class FooService {
  constructor(@Inject('service-a') private client: ClientProxy) {}

  foo() {
    return this.client.emit('foo', 'foo');
  }
}
