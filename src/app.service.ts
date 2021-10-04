import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class AppService {
  @OnEvent('app.started')
  handleStartEvent(payload: any) {
    console.log('Emitted: ', payload.payload);
  }

  @OnEvent('app.started')
  getHello(): string {
    return 'Hello World!';
  }
}
