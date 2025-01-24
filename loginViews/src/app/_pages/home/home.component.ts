import { Component } from '@angular/core';
import { Login1Component } from '../../_components/login1/login1.component';
import { Login2Component } from "../../_components/login2/login2.component";
import { Login3Component } from "../../_components/login3/login3.component";

@Component({
  selector: 'app-home',
  imports: [
    Login1Component,
    Login2Component,
    Login3Component
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
