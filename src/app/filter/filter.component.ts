import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  isClicked=false;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.isClicked=!this.isClicked;
  }

}
