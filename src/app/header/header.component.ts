import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../servicios/token.service';

interface SwitchButton extends HTMLElement {
  classList: DOMTokenList & {
    toggle(className: string, force?: boolean): boolean;
  };
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
isLogged = false;
private btnSwitch: SwitchButton | null = null;

constructor(private router: Router, private tokenService: TokenService) { }

ngOnInit(): void {
  if (this.tokenService.getToken()) {
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
  this.btnSwitch = document.querySelector('#switch');
  if (this.btnSwitch) {
    this.btnSwitch.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      this.btnSwitch!.classList.toggle('active');
    });
  }


}
onLogOut(): void {
  this.tokenService.logOut();
  window.location.reload();
}


login() {
  this.router.navigate(['/login'])
}


}