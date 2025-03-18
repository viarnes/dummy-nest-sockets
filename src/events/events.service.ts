import { Injectable } from '@nestjs/common';
import { EventsGateway } from './events.gateway';

@Injectable()
export class EventsService {
  private counter = 0;

  constructor(private readonly eventsGateway: EventsGateway) {}

  incrementCounter(): number {
    this.counter++;
    this.eventsGateway.server.emit('counter', this.counter);
    return this.counter;
  }
}
