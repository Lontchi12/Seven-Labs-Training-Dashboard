
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Labs } from '../../models/Labs';
import { LabsService } from '../../services/labs.service';



@Component({
  selector: 'app-edit-lab',
  templateUrl: './edit-lab.component.html',
  styleUrls: ['./edit-lab.component.scss']
})
export class EditLabComponent implements OnInit {


  

  //cart: Cart = {} as Cart;

  @Input() lab! : Labs 
  //lab: Labs = {} as Labs

  constructor(private labsService: LabsService, 
    private route: ActivatedRoute, 
    private location: Location,
   
    
    ) { 
      
    }

  ngOnInit(): void {
    
    this.getLab()
  }

 
  getLab(): void {
    const _id =  this.route.snapshot.paramMap.get('id');
    console.log(_id)
    this.labsService.getLab(_id)
    .subscribe( lab => this.lab = lab)

  }

  
  save(): void {
    this.labsService.updateLab(this.lab).subscribe(success => {this.goBack()})
  }
  goBack(): void {
    this.location.back();
  }

}
