import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

 toggled : boolean = false ;
  ngOnInit(): void {
  }

 openmenu () : boolean {
    return  this.toggled = !this.toggled;
 }


}
