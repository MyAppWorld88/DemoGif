import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable,of } from 'rxjs';
import { filter, map,tap } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class UrlCallService {

  apiUrl: string = 'https://api.giphy.com/v1/'; 
  urlThirdParty: string = "https://jsonplaceholder.typicode.com/users";

  headers = new HttpHeaders();
  useSubscribe = new Subject();

  constructor(private _http:HttpClient) { 

    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.headers.append('Access-Control-Allow-Origin', '*'); 
    this.headers.append('Access-Control-Request-Header', '*');
  }

  getGif(api_key,limit,offset,rating,random_id): Observable<{data:any,pagination:any,meta:any}> {
    return this._http.get<any>(this.apiUrl+'gifs/trending',   {
      params: {
        api_key:api_key,
        limit:limit,
        offset:offset,
        rating:rating,
        random_id:random_id
      }
    }); 
  }
  searchGif(api_key,search,limit,offset,rating,lang,random_id){
  return this._http.get<any>(this.apiUrl+'gifs/search',{
    params: {
      api_key:api_key,
      q:search,
      limit:limit,
      offset:offset,
      rating:rating,
      lang:lang,
      random_id:random_id
    }
  })
  }


}
