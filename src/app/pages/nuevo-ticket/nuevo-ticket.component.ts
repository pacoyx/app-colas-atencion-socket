import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/interfaces/interfaces';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-nuevo-ticket',
  templateUrl: './nuevo-ticket.component.html',
  styleUrls: ['./nuevo-ticket.component.css']
})
export class NuevoTicketComponent implements OnInit {

  objtTicket: Ticket;

  constructor(private wsServices: WebsocketService) { }

  ngOnInit(): void {
    this.escucharSockets();
  }

  escucharSockets(): void {

    this.wsServices.listen('ticket-agregar').subscribe((ticket: Ticket) => {
      this.objtTicket = ticket;
    });
  }

  agregarTicket(): void {
    this.wsServices.emit('ticket-agregar');
  }

}
