import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url ="http://localhost:3000/users";

    constructor(private http: HttpClient) { }

    getUser(username: string,password: string): Observable<string>{
      return this.http
      .post(
        '${this.url}/login-fixed',
        {username : username,password :password },
        { responseType :'text'}
      )
      .pipe(
        tap((response)=>{
          console.log(response);
          if(JSON.parse(response).data==='login success'){
            // register the user in the local storage
            localStorage.setItem('username',username);
          }
        })
      );
    }
}
