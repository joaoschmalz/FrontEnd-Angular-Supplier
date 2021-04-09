import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { SupplierModel } from '../model/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  apiUrl = "http://localhost:8080/api/rest/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private httpClient: HttpClient) { }

  public getSuppliers(): Observable<SupplierModel[]>
  {
    return this.httpClient.get<SupplierModel[]>(this.apiUrl);
  }

  public postSuppliers(supplier: any):Observable<SupplierModel>{
    return this.httpClient.post<any>(this.apiUrl, supplier, this.httpOptions);
  }

  public updateSupplier(id: number, request: SupplierModel): Observable<SupplierModel>{
    const _url = `${this.apiUrl}/${id}`;
    
    return this.httpClient.put<SupplierModel>(_url, request);
  } 

  public deleteSupplier(id: any){
    return this.httpClient.delete(this.apiUrl + id);
  }
}