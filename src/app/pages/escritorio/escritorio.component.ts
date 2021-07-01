import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/interfaces/interfaces';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styleUrls: ['./escritorio.component.css']
})
export class EscritorioComponent implements OnInit {
  ticketEnAtencion: Ticket;
  escritorio = 0;
  constructor(private wsServices: WebsocketService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.escucharSockets();
    this.route.params.subscribe(param => {
      this.escritorio = param.id;
    });
  }

  escucharSockets(): void {

    this.wsServices.listen('ticket-atender').subscribe((ticket: Ticket) => {
      this.ticketEnAtencion = ticket;
    });
  }

  atender(): void {
    this.wsServices.emit('ticket-atender', this.escritorio);
  }

}
