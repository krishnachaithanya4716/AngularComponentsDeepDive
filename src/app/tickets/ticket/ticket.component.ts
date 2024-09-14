import { Component,input, signal,output } from '@angular/core';
import { Ticket } from '../../ticket-model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  data = input.required<Ticket>();

  detailsVisibility = signal(false);

  close = output()

  onToggleDetails(){
   // this.detailsVisibility.set(!this.detailsVisibility); alternate way
    this.detailsVisibility.update((wasVisible)=>!wasVisible);
  }

  onMarkasCompleted(){
    this.close.emit();
  }


}
