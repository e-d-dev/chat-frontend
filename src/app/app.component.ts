import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';
import { AnnouncerService } from './announcer/announcer.service';
import { ANNOUNCEMENT_TYPE } from './announcer/announcement-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    constructor(
        public loginService: LoginService,
        public router: Router,
        public announcerService: AnnouncerService
    ) {

    }

    ngOnInit(): void {
        // this.loginService.saveLoggedIn(true);
        if (this.loginService.isLoggedIn()) {
            this.router.navigate(['/mailbox']);
        } else {
            this.router.navigate(['/login']);
            // this.announcerService.announce(ANNOUNCEMENT_TYPE.WARNING, 'Warning', 'Sie sind nicht mehr eingeloggt');
            // this.announcerService.announce(ANNOUNCEMENT_TYPE.INFORMATION, 'Info', 'Sie sind nicht mehr eingeloggt');
            // this.announcerService.announce(ANNOUNCEMENT_TYPE.ERROR, 'Error', 'Sie sind nicht mehr eingeloggt');
            // this.announcerService.announce(ANNOUNCEMENT_TYPE.CONFIRMATION, 'Confirmation', 'Sie sind nicht mehr eingeloggt');
        }
        
    }
}
