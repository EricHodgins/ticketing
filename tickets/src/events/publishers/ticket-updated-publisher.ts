import { Publisher, Subjects, TicketUpdatedEVent } from '@ehtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEVent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
