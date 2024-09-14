import { Component } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';
import { NewTicketComponent } from "../../tickets/new-ticket/new-ticket.component";
import { Ticket } from '../../ticket-model';
import { TicketComponent } from "../../tickets/ticket/ticket.component";
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [DashboardItemComponent, NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

tickets:Ticket[]=[];

  onAdd(ticketData:{title:string,request:string}){
    const ticket: Ticket = {
      id:Math.random().toString(),
      title:ticketData.title,
      request:ticketData.request,
      status:'open'
    }
    this.tickets.push(ticket);
  }

  closeTicketbyId(id:string){
    this.tickets = this.tickets.map((ticket)=>{
      if(ticket.id===id){
        return {...ticket,status:'closed'}
      }
      return ticket
    })

    console.log(this.tickets)
  }

}
