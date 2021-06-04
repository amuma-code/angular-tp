import { MyserviceService } from './../myservice.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public add: FormGroup;

  constructor(public formbuilder: FormBuilder, public myservice:MyserviceService, public route:Router) {
    this.add =formbuilder.group({
      fullname :["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email:["", [Validators.required, Validators.email]],
      country:["", Validators.required]
    })
  }
   onadd()
   {const data =this.add.value;
  this.myservice.createStudent(data).subscribe((response) => {
      console.log("hi")
      this.route.navigateByUrl("/")
  })
  }

  ngOnInit(): void {
  }

}
