import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from
'@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class ApiService {
 httpOptions = {
 headers: new HttpHeaders({
 'Content-Type': 'application/json',
 'Access-Control-Allow-Origin' :'*'
 })
 }

 // Se establece la base url del API a consumir
 apiURL = 'https://gf7e859fe572db8-duoconwheels.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/usuario/';
 apiViaje = 'https://gf7e859fe572db8-duoconwheels.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/viaje/';
 // Se declara la variable http de tipo HttpClient
 constructor(private http:HttpClient) { }

 updatePost(id: string,post : {}):Observable<any>{
  return this.http.put(this.apiURL+id,post,this.httpOptions).pipe
  (retry(3));
  }
 
 createPost(post={}):Observable<any> {
  return this.http.post(this.apiURL,post,this.httpOptions).pipe(
   retry(3)
   );
  }
  getPost(id:string):Observable<any>{
    return this.http.get(this.apiURL+id).pipe(
    retry(3)
    );
    }
  getViaje():Observable<any>{
    return this.http.get(this.apiViaje).pipe(
    retry(3)
    );
  }
  createViaje(post={}):Observable<any> {
    return this.http.post(this.apiViaje,post,this.httpOptions).pipe(
    retry(3)
  );
  }


}
