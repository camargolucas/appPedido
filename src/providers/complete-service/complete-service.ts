import { ApiData } from './../../utilitarios/apiData';
import {AutoCompleteService} from 'ionic2-auto-complete';
import { Http } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map'
import { map } from 'rxjs/operator/map';



@Injectable()
export class CompleteServiceProvider extends ApiData implements AutoCompleteService {
  labelAttribute = "NAME";
  formValueAttribute = ""
  constructor(public http: Http) {super()}




  getResults(keyword:string) {
    return this.http.get(this.API_URL + 'products/search/name/' + keyword)
      .map(
        result =>
        {
          return result.json()
            .filter(item => item.NAME.toLowerCase().startsWith(keyword.toLowerCase()) )
        });

      }


}
