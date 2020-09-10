import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ehtickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
