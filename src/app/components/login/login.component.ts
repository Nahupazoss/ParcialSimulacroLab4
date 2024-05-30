import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent 
{
  formLogin : FormGroup;

  constructor(private userService:UserServiceService,private router:Router)
  {
    this.formLogin = new FormGroup({
      email:new FormControl(),
      password:new FormControl()})
  }

  async onSubmit() 
  {
    if (this.formLogin.valid) 
    {
      try
      {
        const user =  this.userService.login(this.formLogin.value);
        this.router.navigate(['/bienvenida']);
      } 
      catch (error) 
      {
        console.log("¡Error al iniciar sesión!");
      }
    } 
    else 
    {
      console.log("¡Por favor, complete todos los campos!");
    }
  }
 

  onSubmitHarcode()
  {
    this.formLogin.patchValue({

      email : "admin@gmail.com",
      password : "123456",
    });
  }

  onSubmitHarcode2()
  {
    this.formLogin.patchValue({

      email : "empleado@gmail.com",
      password : "123456",
    });
  }
}
