import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, FormArray} from '@angular/forms';
import {KalturaValidators} from './validators/kaltura-validators';

@Component({
  selector: 'app-root',
  styles: [`
    input.ng-invalid {background-color: red}
    input.ng-pending {background-color: green}
  `
  ],
  template: `
      
    <h1>Forms</h1>

    <form [formGroup]="loginForm"
          (ngSubmit)="submit()">
      
      <input formControlName="username">
      <span *ngIf="username.invalid">invalid username</span>
      
      <input type="password"
             formControlName="password">
      
      <input type="checkbox"
             formControlName="rememberMe">
      
      <div formArrayName="phones">
        <input *ngFor="let p of phones.controls; let i=index"
                [formControlName]="i">
      <button (click)="addPhone()">+</button>
      </div>
      
      <button>submit</button>
      <pre>status    : {{ username.status }}</pre>
      <pre>valid    : {{ username.valid }}</pre>
      <pre>invalid  :{{  username.invalid }}</pre>
      <pre>pristine : {{ username.pristine }}</pre>
      <pre>untouched: {{ username.untouched }}</pre>
      <pre>dirty    : {{ username.dirty     }}</pre>
      <pre>touched  : {{ username.touched   }}</pre>
      <pre>errors  : {{ username.errors | json   }}</pre>
    </form>
  `,
})
export class AppComponent {

  public loginForm: FormGroup;

  constructor(fb: FormBuilder) {

    this.loginForm = fb.group({
      username  : ['', [
        Validators.required,
      ], KalturaValidators.startWithKAsync],
      password  : null,
      rememberMe: null,
      phones: fb.array([new FormControl()])
    });


  }

  get phones(): FormArray {
    return this.loginForm.get('phones') as FormArray;
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  addPhone() {
    this.phones.push(new FormControl())
  }

  submit() {
    console.log(this.loginForm.value);
  }
}
