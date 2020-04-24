import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-froms',
  templateUrl: './reactive-froms.component.html',
  styleUrls: ['./reactive-froms.component.css']
})
export class ReactiveFromsComponent implements OnInit {
  registrationForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registrationForm=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      skills:new FormArray([
        new FormControl()
      ])
    });
  }
  get email(){
    return this.registrationForm.get('email');
  }
  get password(){
    return this.registrationForm.get('password');
  }
  get skills(){
    return this.registrationForm.get('skills') as FormArray;
  }
  addSkill(){
    this.skills.push(new FormControl())
  }

  removeSkill(index:number){
    this.skills.removeAt(index)

  }
   
 
  submitForm(){
   
    console.log(this.registrationForm.value);
    
  }

}
