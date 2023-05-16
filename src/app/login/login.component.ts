import { Component, OnInit } from '@angular/core';
import { TokenService } from '../servicios/token.service';
import { LoginUsuario } from '../model/login-usuario';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password! : string;
  roles: string[] = [];
  errMsj!: string;
  form: FormGroup ;
  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router, private formBuiler: FormBuilder ) {
    this.form=this.formBuiler.group(
      {
        nombreUsuario:['',[Validators.required,Validators.minLength(4)]],
        password:['',[Validators.required,Validators.minLength(4)]],
      }
    )
  } 
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
       
      });
        
    
  }
  
get NombreUsuario(){
  return this.form.get('nombreUsuario');
}
get Password(){
  return this.form.get('password');
}

}