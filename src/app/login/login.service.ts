import { Injectable } from '@angular/core';
import { Cookie } from '../class/cookie';
import { CookieService } from '../common/cookie.service';
import { RestService } from '../rest.service';
import { Envelope } from '../common/envelope';
import { AnnouncerService } from '../announcer/announcer.service';
import { ANNOUNCEMENT_TYPE } from '../announcer/announcement-type.enum';
import { ERROR_CODE } from '../enum/error-code.enum';

@Injectable()
export class LoginService {

    constructor(
        public cookieService: CookieService,
        public restService: RestService,
        public announcerService: AnnouncerService
    ) { }


    isLoggedIn(): boolean {
        const loginCookieValue: boolean | undefined = this.cookieService.getCookieValue('session');
        if (loginCookieValue === undefined) {
            return false;
        }

        this.restService.post('http://localhost/api/isLoggedIn', JSON.stringify({
            token: loginCookieValue
        })).then((res) => {
            console.log(res);
        });
    }

    saveLoggedIn(token: string): void {
        document.cookie = `session=${token}`;
    }


    login(login: string, password: string): void {

        const request: any = {
            login,
            password
        };

        this.restService.post('http://localhost/api/login', request).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        });
    }

    async register(login: string, password: string, email: string) {

        const request: any = {
            login,
            password,
            email
        };

        let response: Envelope<any> = await this.restService.post('http://localhost/api/register', request);
        console.log(response)
        if (response.status === false) {
            // es gab einen fehler. Prüfe welchen fehler es gab
            // if (response.contentError.message === ERROR_CODE.EMPTY_LOGIN) {
            //     // gib meldung aus
            //     this.announcerService.announce(ANNOUNCEMENT_TYPE.INFORMATION, 'Info', ERROR_CODE.EMPTY_LOGIN);
            // }
            if (response.contentError === ERROR_CODE.USER_OR_EMAIL_EXIST) {
                this.announcerService.announce(ANNOUNCEMENT_TYPE.ERROR, 'Error', ERROR_CODE.USER_OR_EMAIL_EXIST);
            } else if (response.contentError === ERROR_CODE.INVALID_EMAIL_FORMAT) {
                this.announcerService.announce(ANNOUNCEMENT_TYPE.ERROR, 'Error', ERROR_CODE.INVALID_EMAIL_FORMAT);
            }

        } else {
            this.announcerService.announce(ANNOUNCEMENT_TYPE.INFORMATION, 'Success', 'User erfolgreich angelegt');
        }
    }

    async testAsync() {
        let resp = await setTimeout(() => {
            this.announcerService.announce(ANNOUNCEMENT_TYPE.CONFIRMATION, 'Confirmation', 'Sie sind nicht mehr eingeloggt');
        }, 100)
        // if (resp) {
        // }
    }

    testOhneAsync() {
        this.announcerService.announce(ANNOUNCEMENT_TYPE.CONFIRMATION, 'Confirmation', 'Sie sind nicht mehr eingeloggt');

    }

}
