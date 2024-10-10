import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { RegisterComponent } from "./register/register.component";
import { NgxSpinnerComponent } from 'ngx-spinner';
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, RegisterComponent, NgxSpinnerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ecommerce';
}
