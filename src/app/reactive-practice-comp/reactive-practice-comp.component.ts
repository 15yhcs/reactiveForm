import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, of } from 'rxjs';

@Component({
  selector: 'app-reactive-practice-comp',
  templateUrl: './reactive-practice-comp.component.html',
  styleUrls: ['./reactive-practice-comp.component.css']
})
export class ReactivePracticeCompComponent implements OnInit {
  projectForm: FormGroup;
  forbiddenName = "Test";
  invalidMail = "email@email.com"
  constructor() { }
  
  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'project': new FormControl("",[Validators.required, this.invalidProjectName.bind(this)]),
      'mail': new FormControl("", [Validators.email, Validators.required], this.invalidEmail.bind(this)),
      'status': new FormControl("Stable")
    })

    console.log(this.projectForm.get('mail'));
    
  }

  invalidProjectName(controls: FormControl){
    if(controls.value === this.forbiddenName){
      return {'NotValidName': true}
    }
    return null;
  }

  invalidEmail(controls: FormControl): Promise<any> | Observable<any> | null{
    const email = controls.value;
    if(this.invalidMail === email){
      return of({'invalidEmail': true});
    }
    return of(null);
  }

  onSubmit(){
    console.log(this.projectForm);
    console.log(this.projectForm.get('project').status);
    
  }
}
