import { Labs } from './../../models/Labs';

import { Component, Input, OnInit } from '@angular/core';
import { Projects } from '../../models/Projects';
import { ProjectsService } from './../../services/projects.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { LabsService } from '../../services/labs.service';


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
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  @Input() project: Projects = { title: '', description: '', solution: ''}
  @Input() labs : Labs[];

  constructor(private projectsService: ProjectsService, 
    private location: Location, 
    private labsService: LabsService) { }

  ngOnInit(): void {
   this.labsService.getLabs()
   .subscribe( lab => {
      console.log(lab);
      this.labs = lab
    })
   console.log(`Labs comming from request are ${this.labs}`);
  }

  
  save(): void {
    this.projectsService.addProject(this.project).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
