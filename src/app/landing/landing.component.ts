import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    MatCard
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
