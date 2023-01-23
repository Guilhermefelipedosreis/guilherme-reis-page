import { Component } from '@angular/core';
import { Message } from './messages/message';

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

  submit() {
    alert('Message sent!')
  }

}
