import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  // students= [
  //   {
  //     "id": 1,
  //     "name": "Willy",
  //     "email": "email@email.com",
  //     "country": "USA"
  //   },
  //   {
  //     "id": 2,
  //     "name": "john Joy",
  //     "email": "email@email.com",
  //     "country": "France"
  //   },
  //   {
  //     "id": 3,
  //     "name": "Ali",
  //     "email": "email@email.com",
  //     "country": "India"
  //   },
  //   {
  //     "id": 4,
  //     "name": "ketsia",
  //     "email": "email@email.com",
  //     "country": "Germany"
  //   },
  //   {
  //     "id": 5,
  //     "name": "noah",
  //     "email": "email@email.com",
  //     "country": "United Kingdom"
  //   },
  //   {
  //     "id": 6,
  //     "name": "peter",
  //     "email": "email@email.com",
  //     "country": "USA"
  //   },
  //   {
  //     "id": 7,
  //     "name": "gemima",
  //     "email": "gemi@email.com",
  //     "country": "tunisie"
  //   },
  //   {
  //     "fullname": "mima",
  //     "email": "gemima@gmail.com",
  //     "country": ",,,,dx",
  //     "id": 8
  //   }
  // ]
students:any
  constructor(public Student:MyserviceService) { }
  

  ngOnInit(): void {
    this.Showtourist()
  }

Showtourist(){
  this.Student.geListtStudents().subscribe(
    (res)=>{
      this.students=res
    }
  )
}



updatetourist(){
  this.Student.updateStudent('').subscribe(
  (res1)=>{
    this.students=res1
  }
  )
   
}

deletettouriste(){
  this.Student.deleteStudent('').subscribe(
  (res2)=>{
    this.students=res2
  }
  )
   
}

}
