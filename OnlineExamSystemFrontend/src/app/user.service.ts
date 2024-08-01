import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) { }

  validateUser(user: User): Observable<boolean> {
    return this.httpClient.post<boolean>("http://localhost:8080/validate", user);
  }

  saveUser(user: User) {

    return this.httpClient.post<void>("http://localhost:8080/saveUser", user);
  }
}

export class User {
  username: string='';
  password: string='';
  emailid: string='';
  mobno: string='';

}
