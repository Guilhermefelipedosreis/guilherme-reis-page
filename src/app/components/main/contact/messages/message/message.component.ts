import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../message';
import { MessageService } from './../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() message: Message = {
    id: 0,
    name: 'Gui',
    email: 'guilhermefelipedosreis@hotmail.com',
    phone: '647 446 5034',
    content: 'to dentro de message/message.components'
  }

  constructor(
    private service: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  deleteMessage() {
    this.service.delete(this.message).subscribe(() => {
      window.location.reload()
    })



  }
}
