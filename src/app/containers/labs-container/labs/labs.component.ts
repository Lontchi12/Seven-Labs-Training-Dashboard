
import { Component, OnInit } from '@angular/core';
import { navItems } from '../../../_navlab'
 

@Component({
  selector: 'app-lab-content',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.scss']
})
export class LabsComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
 

  constructor() { }

  ngOnInit(): void {
  }

}
