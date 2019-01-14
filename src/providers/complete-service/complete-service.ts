import {AutoCompleteService} from 'ionic2-auto-complete';
import { Http } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map'



@Injectable()
export class CompleteServiceProvider  implements AutoCompleteService{
  labelAttribute = "NAME";
  formValueAttribute = ""
  URL = "http://apprequestapi.kinghost.net:21093/produto/like/"
  URL_TEST = "http://localhost:21093/products/search/name/"
  constructor(public http: Http) {}




  getResults(keyword:string) {
    return this.http.get(this.URL_TEST + keyword)
      .map(
        result =>
        {
          console.log(result.json)
          return result.json()
            .filter(item => item.NAME.toLowerCase().startsWith(keyword.toLowerCase()) )
        });
  }

}
