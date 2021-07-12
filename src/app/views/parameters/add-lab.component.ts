import { Component, OnInit, EventEmitter, Output, Input  } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Labs } from '../../models/Labs';
import { LabsService } from '../../services/labs.service';
import { Location } from '@angular/common';

export const QuillConfiguration = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    ['link'],
    ['clean'],
  ],
}



@Component({
  selector: 'app-add-lab',
  templateUrl: './add-lab.component.html',
  styleUrls: ['./add-lab.component.scss']
})
export class AddLabComponent implements OnInit {

  
  @Input() lab: Labs = { title: '', description: '' }

  //sampleRichText: string = `<h1>this is a heading</h1><br/>2<sup>2</sup>&nbsp;=&nbsp;<strong>4</strong>`



  constructor(private labsService: LabsService, private location: Location) { }

  ngOnInit(): void {
    
  }

  
  save(): void {
    this.labsService.addLab(this.lab).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
  

  

  

  

  

  

  

}
