import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  windowWidth=0;
  isClicked=false;
  
  constructor() { }
  
  onClick(){
    this.isClicked=!this.isClicked;
  }
  hideOnClick(){
    this.windowWidth=window.innerWidth;
    if(this.windowWidth<1350){
      const element = document.getElementById("navbar");
      element?.classList.remove('menu-active');
      element?.classList.add('none');
      
      
    }
  }


}
