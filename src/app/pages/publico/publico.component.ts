import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/interfaces/interfaces';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-publico',
  templateUrl: './publico.component.html',
  styleUrls: ['./publico.component.css']
})
export class PublicoComponent implements OnInit {
  ticketsEnAtencion: Ticket[] = [];
  constructor(private wsServices: WebsocketService) { }

  ngOnInit(): void {
    this.escucharSockets();
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('container');
  }

  escucharSockets(): void {
    console.log('escuchando desde publico');

    this.wsServices.listen('ticket-atender').subscribe((tickets: Ticket[]) => {
      console.log('escucho algo', tickets);

      this.ticketsEnAtencion = tickets;
    });
  }


}
