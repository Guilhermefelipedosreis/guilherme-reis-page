import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from './messages/message';
import { MessageService } from './messages/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  message: Message = {
    name: '',
    email: '',
    phone: '',
    content: ''
  }

  constructor(
    private service: MessageService,
    private router: Router) { }

  submit() {
    this.service.send(this.message).subscribe()
    window.location.reload()

  }
}
