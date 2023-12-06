import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  integerRegex = /^\d+$/

  title = 'pg2';

  registerForm = new FormGroup({
    fname : new FormControl("", [Validators.required, Validators.maxLength(32)]),
    lname : new FormControl("", [Validators.required, Validators.maxLength(32)]),
    age : new FormControl("", [Validators.required, Validators.max(65), Validators.min(17), Validators.pattern(this.integerRegex)]),
    mobile : new FormControl("", [Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern(this.integerRegex)]),
    password : new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(7) ]),
    confirm_password : new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(7)]),
  })



  registerFn(){
    console.log(this.registerForm.value)
  }

}
