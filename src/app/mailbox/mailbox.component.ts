import { Component, OnInit } from '@angular/core';
import { Email } from '../class/email';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {

  public testEmailList: Email[] = [];

  public selectedEmail: Email;
  public backUpEmail: Email;

  public email1 = new Email('Sender1', 'Receiver1', 'Subject1', 'Message1');
  public email2 = new Email('Sender2', 'Receiver2', 'Subject2', 'Message2');
  public email3 = new Email('Sender3', 'Receiver3', 'Subject3', 'Message3');
  public email4 = new Email('Sender4', 'Receiver4', 'Subject4', 'Message4');
  public email5 = new Email('Sender5', 'Receiver5', 'Subject5', 'Message5');
  public email6 = new Email('Sender6', 'Receiver6', 'Subject6', 'Message6');

  constructor() { }

  ngOnInit(): void {
    this.testEmailList.push(this.email1, this.email2, this.email3, this.email4, this.email5, this.email6)  
  }
}
