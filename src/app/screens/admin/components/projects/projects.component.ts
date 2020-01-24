import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  constructor(private ProjectService: ProjectService,) {
  }

  projectForm = new FormGroup({
  project_name: new FormControl(''),


  });


  ngOnInit() {
    this.ProjectService.getProject().subscribe(response => {
      
      });
    }

  onSubmit() { var formValues = this.projectForm.value;
        let requestData = { project_name: formValues.project_name,}
       this.ProjectService
      .addNewProject(requestData) }

}
