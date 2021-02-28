import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    login: string;
    password: string;

    registerLogin: string
    registerPassword: string;
    registerEmail: string;

    constructor(
        public loginService: LoginService
    ) { }

    ngOnInit(): void {
        this.login = '';
        this.password = '';

        this.registerLogin = '';
        this.registerPassword = '';
        this.registerEmail = '';
    }

}
