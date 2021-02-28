import { Component, OnInit } from '@angular/core';
import { AnnouncerService } from './announcer.service';
import { ANNOUNCEMENT_TYPE } from './announcement-type.enum';

@Component({
  selector: 'app-announcer',
  templateUrl: './announcer.component.html',
  styleUrls: ['./announcer.component.scss']
})
export class AnnouncerComponent implements OnInit {

  constructor(
      public announcerService: AnnouncerService
  ) { }

  ANNOUNCEMENT_TYPE = ANNOUNCEMENT_TYPE;

  ngOnInit(): void {
  }

}
