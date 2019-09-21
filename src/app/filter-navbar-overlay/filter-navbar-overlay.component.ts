import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter-navbar-overlay',
  templateUrl: './filter-navbar-overlay.component.html',
  styleUrls: ['./filter-navbar-overlay.component.css']
})
export class FilterNavbarOverlayComponent implements OnInit {  
  elemHeight = 0;
  category = '';

  constructor() { }

  ngOnInit() {    
    this.elemHeight = 0;
  }

  styleNav(): Object {    
    return {height: `${this.elemHeight}%`};
  }
  
  openNav() {
    this.elemHeight = 100;    
  }
  
  closeNav() {
    this.elemHeight = 0;    
  }
}
