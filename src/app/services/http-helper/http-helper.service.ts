import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
    providedIn: 'root'
})
export class HttpHelperService {
    
    private publicToken = <your marvel api public key here>;
    private privateToken = <your marvel api private key here>;

    constructor(private http: HttpClient) { }

    doHttpPost(url, data) {
        console.log(url);
        return new Promise((resolve, reject) => {
            this.http.post(url, JSON.stringify(data))
                .subscribe((response) => {
                    console.log(response);
                    resolve(response);
                }, (err) => {
                    console.log(err);
                    reject(err);
                }
                );
        });
    }

    doHttpGet(url) {
        let timestamp = Date.now();
        let hash = Md5.hashStr(timestamp + this.privateToken + this.publicToken);
        url += '&apikey=' + this.publicToken + '&ts=' + timestamp + '&hash=' + hash;
        const headers = new HttpHeaders();
            // .append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8')
            // .append('Content-Type', 'application/x-www-form-urlencoded')
            // .append('Method', 'get, options')
            // .append('Accept-Language', 'en-GB,en;q=0.5')
            // .append('Upgrade-Insecure-Requests', '1');
        console.log(url);
        return new Promise((resolve, reject) => {
            this.http.get(url, {headers: headers}).subscribe((response) => {
                console.log(response);
                resolve(response);
            }, (err) => {
                console.log(err);
                reject(err);
            });
        });
    }
}
