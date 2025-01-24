import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login2',
  imports: [],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.scss'
})
export class Login2Component implements AfterViewInit {
  container: HTMLElement | null = null;
  register: HTMLElement | null = null;

  ngAfterViewInit(): void {
    this.container = document.getElementById('container');
    this.register = document.getElementById('register');

    if (!this.container) {
      console.error('Container element not found.');
    }

    if (!this.register) {
      console.error('Register element not found.');
    }
  }

  registerBtn(): void {
    if (this.container) {
      this.container.classList.add('active');
    } else {
      console.error('Container element not found.');
    }
  }

  loginBtn(): void {
    if (this.container) {
      this.container.classList.remove('active');
    } else {
      console.error('Container element not found.');
    }
  }
}
