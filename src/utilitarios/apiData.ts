import { RequestOptions, Headers } from "@angular/http";

export class ApiData {
  readonly API_URL: string;
  readonly requestOptions: any;
  private headers;

  constructor() {
   // this.API_URL = "http://apprequestapi.kinghost.net:21093/";
    this.API_URL = "http://localhost:21093/"; // TESTE API LOCAL

    this.headers = new Headers();
    this.headers.append("Accept", "application/json");
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Access-Control-Allow-Origin", "*");

    this.requestOptions = new RequestOptions({ headers: this.headers });

  }
}
