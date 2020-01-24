import { Component, OnInit } from '@angular/core';
// Reactive forms
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProjectService } from 'src/app/project.service';



@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {

 
  projectForm = new FormGroup({
    // description: new FormControl(''),
    // project_id: new FormControl(''),
    title: new FormControl(''),
    // startdate: new FormControl(''),
    // enddate: new FormControl(''),
    // devno: new FormControl('')
  // tslint:disable-next-line: no-shadowed-variable
  });  constructor(private ProjectService: ProjectService) { }





  ngOnInit() { }
  onSubmit() {
    this.ProjectService
      .addNewProject(this.projectForm.value)
      .subscribe(client => console.log(client));
  // alert(JSON.stringify(this.projectForm.value))
  }
}
