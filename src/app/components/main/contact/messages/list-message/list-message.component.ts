import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessageService } from './../message.service';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.css']
})
export class ListMessageComponent implements OnInit {

  listMessage: Message[] = [];

  constructor (private service: MessageService) {}

  ngOnInit(): void {
    this.service.list().subscribe((listMessage) => {
      this.listMessage = listMessage
    })
    console.log(JSON.stringify(this.listMessage))
  }



}
