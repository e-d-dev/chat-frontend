import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()

export class RestService {


    constructor(
        private http: HttpClient
    ) {
    }

    async post(url: string, body: any): Promise<any> {
        return new Promise((resolve,reject) => {
           this.http.post(url,body).subscribe((obs) => {
               console.log(obs);
               resolve(obs);
           }, (err) => {
               console.log(err, "err");
           })
        })
    }

}
