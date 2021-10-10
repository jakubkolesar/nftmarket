import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isClicked=false;

  constructor() { }
  
  onClick(){
    this.isClicked=!this.isClicked;
  }

}
