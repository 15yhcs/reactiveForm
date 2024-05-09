import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUserNames = ['Chris', 'Anna'];
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userGroup': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]), // "this" object in the forbiddenNames function refers to some object from FormControl
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    this.signupForm.valueChanges.subscribe((value) => {
      console.log(value);
      
    })

    this.signupForm.statusChanges.subscribe((value) => {
      console.log(value);
      
    })

    this.signupForm.setValue({
      'userGroup': {
        'username' : 'hey',
        'email' : 'sampleEmail'
      },
      'gender': 'male',
      'hobbies' : []
    })
  }
  onSubmit(){
    console.log(this.signupForm);
    
  }

  addHobbies(){
    (<FormArray>this.signupForm.get('hobbies')).push(new FormControl(null, Validators.required))
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbiddenNames(controls: FormControl): {[s: string] : boolean}{
    if(this.forbiddenUserNames.indexOf(controls.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(controls: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(controls.value === 'test@test.com'){
          resolve({'emailIsForbidden': true})
        }
        resolve(null)
      },1500);
    })
    return promise;
  }
}
