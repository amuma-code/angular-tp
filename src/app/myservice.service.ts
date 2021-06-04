import { Student } from './student';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';

type NewType = Observable<Student>;

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
base_path = 'http://localhost:3000/students';
  constructor(private http: HttpClient) { }
  httpOptions ={
    headers: new HttpHeaders({
      'content-type': 'application/json'})
  }
  createStudent(student:any): Observable<Student> {
    return this.http.post<Student>(this.base_path, JSON.stringify(student),this.httpOptions)
  }

  getStudent(id:any): Observable<Student>{
return this.http.get<Student>(this.base_path + '/' + id)
  }
  geListtStudents(): Observable<Student>{
    return this.http.get<Student>(this.base_path)
      }

      updateStudent(id:any):Observable<Student>
  { return this.http
  .put<Student>(this.base_path + '/' + id,JSON.stringify(Student),this.httpOptions)}

deleteStudent(id:any)
{return this.http
.delete<Student>(this.base_path + '/' + id,this.httpOptions)}
}
