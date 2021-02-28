import { Injectable } from '@angular/core';
import { Cookie } from '../class/cookie';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

    /**
     * Returns all cookies saved in the browser.
     */
    getAllCookies(): Cookie[] {
        const cookies: Cookie[] = [];
        const cookiesTemp: string[] = document.cookie.split(';');
        cookiesTemp.forEach((cookie) => {
            const separated: string[] = cookie.split('=');
            cookies.push(
                new Cookie(separated[0].trim(), separated[1])
            );
        });
        return cookies;
    }


    /**
     * Searches the cookie for the key and returns the cookie with the corresponding key.
     * @param key The key of the cookie to find.
     */
    findCookie(key: string): Cookie | undefined {
        const cookies = this.getAllCookies();
        let found: Cookie = new Cookie('', '');
        found = cookies.find((elem) => {
            return elem.key === key;
        });
        return found;
    }

    getCookieValue(key: string): any {
        const temp: Cookie = this.findCookie(key);
        return (temp === undefined) ? undefined : temp.value;
    }

    deleteCookie(key: string): void {
        // const found = this.findCookie(key);
        document.cookie = `${key}=''`;
    }


}
