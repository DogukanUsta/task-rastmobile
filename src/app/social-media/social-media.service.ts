import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SocialMediaService {

    apiUrl = '';

    constructor(
        protected http: HttpClient) {
        this.apiUrl = 'myUrl/v1';
    }

    public getSocialMediaData(): Observable<any> {
        return this.http.get(`${this.apiUrl}/exampleUrl`);
    }

    public addSocialMediaData(params: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/exampleUrl`, params);
    }
}
