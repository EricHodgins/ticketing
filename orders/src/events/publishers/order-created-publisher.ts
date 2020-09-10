import { Publisher, OrderCreatedEvent, Subjects } from '@ehtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
