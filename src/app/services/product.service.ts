import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPro } from '../model/interfaces/ipro';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  getAllProducts(): Observable<IPro[]> {
    return this._http.get<IPro[]>(`${environment.ApiUrl}/product`);
  }

  getProductByID(id): Observable<IPro> {
    return this._http.get<IPro>(`${environment.ApiUrl}/product/${id}`)
  }

  insertProduct(prd: IPro): Observable<IPro> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })
    };
    console.log(prd);
    return this._http.post<IPro>(`${environment.ApiUrl}/product`, prd, httpOptions)
  }

}
