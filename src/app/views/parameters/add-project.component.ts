
import { Component, Input, OnInit } from '@angular/core';
import { Projects } from '../../models/Projects';
import { ProjectsService } from './../../services/projects.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  @Input() project: Projects = { title: '', description: '', solution: ''}

  constructor(private projectsService: ProjectsService, private location: Location) { }

  ngOnInit(): void {
  }

  
  save(): void {
    this.projectsService.addProject(this.project).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
