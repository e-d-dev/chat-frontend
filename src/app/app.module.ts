import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { HeaderComponent } from './header/header.component';
import { MailDetailComponent } from './mail-detail/mail-detail.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { CookieService } from './common/cookie.service';
import { AnnouncerComponent } from './announcer/announcer.component';
import { AnnouncerService } from './announcer/announcer.service';
import { RestService } from './rest.service';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        MailboxComponent,
        HeaderComponent,
        MailDetailComponent,
        LoginComponent,
        AnnouncerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        LoginService,
        CookieService,
        AnnouncerService,
        RestService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
