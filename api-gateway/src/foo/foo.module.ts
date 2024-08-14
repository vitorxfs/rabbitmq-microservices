import { Module } from '@nestjs/common';
import { FooService } from './foo.service';
import { FooController } from './foo.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'service-a',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://rabbitmq:5672/'],
          queue: 'microservices',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [FooController],
  providers: [FooService],
})
export class FooModule {}
