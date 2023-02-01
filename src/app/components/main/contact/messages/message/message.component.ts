import { Component, Input } from '@angular/core';
import { Message } from '../message';

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

}
