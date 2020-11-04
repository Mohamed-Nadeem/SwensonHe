import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class HomePage {
    countries = [];

    constructor(private hc: HttpClient) {}

    activate() {
        this.hc.get('https://restcountries.eu/rest/v2/all').then(res => {
            this.countries = res.content;
        });
    }
}