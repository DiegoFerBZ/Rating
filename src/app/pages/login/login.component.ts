import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder,Validators} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  MatStepperModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    console.log(this.loginForm.value);
  }

}
