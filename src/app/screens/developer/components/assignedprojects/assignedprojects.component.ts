import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { ProjectInterface } from 'src/app/screens/project-interface';
import { Projectlogging } from 'src/app/projectlogging';

import { ProjectloggingService } from 'src/app/projectlogging.service';
import { ProjectService } from 'src/app/project.service';


export interface Food {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  title: string;
  description: string;
  startdate: string;
  enddate: string;
  duration: number;
  devno: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    title: 'Web Services',
    description: 'Lorem ipsium',
    startdate: '3.09.17',
    enddate: '12.01.18',
    duration: 6,
    devno: 2
  }
];

@Component({
  selector: 'app-assignedprojects',
  templateUrl: './assignedprojects.component.html',
  styleUrls: ['./assignedprojects.component.css']
})


export class AssignedprojectsComponent implements OnInit {
  incomingProject = { project_id: 2, title: '' };
  showAlert: boolean = false;
  userProjects: any

  hourform = new FormGroup({
    project_hours: new FormControl(''),
    volunteering_hours: new FormControl(''),
    vacation: new FormControl(''),
    sick: new FormControl(''),
    emp_id: new FormControl(localStorage.getItem('empId')),
    project_id: new FormControl(localStorage.getItem('pid')),
    logged_date: new FormControl(new Date().toISOString().slice(0, 10)),
  });
  constructor(
    private plog: ProjectloggingService,
    private projectService: ProjectService
  ) {}
  newProject = '';
  assignedprojects =[{title: "tpms"}]
  displayedColumns: string[] = [
    'Web Services',
    'Volunteering',
    'Sick',
    'Vacation',
    'Reset'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dummy = [];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  ngOnInit() {
    
    var userData = JSON.parse(localStorage.getItem("userProjects"))
    console.log("User Data | ",userData);
    
    if(userData === null){
      this.userProjects = [];
    }else{
      this.userProjects = userData.projects;
    }
    // this.projectService
    //   .getAssignedProject(localStorage.getItem('empId'))
    //   .subscribe(response => {
    //     // this.incomingProject.project_id = response.project_id;
    //     localStorage.setItem('pid', response.project_id.toString());
    //     this.incomingProject.title = response.title;
    //   });
    
  }

  sickFieldChecked(event) {
    // tslint:disable-next-line: triple-equals
    if (event == 'sick') {
      this.hourform.controls.vacation.disable();
      this.hourform.controls.volunteering_hours.disable();
      this.hourform.controls.project_hours.disable();
    }
    else {
      this.hourform.controls.vacation.enable();
      this.hourform.controls.volunteering_hours.enable();
      this.hourform.controls.project_hours.enable();
    }
  }

  vacationFieldChecked(event) {
    // tslint:disable-next-line: triple-equals
    if (event == 'vacation') {
      this.hourform.controls.sick.disable();
      this.hourform.controls.volunteering_hours.disable();
      this.hourform.controls.project_hours.disable();
    }
    else {
      this.hourform.controls.sick.enable();
      this.hourform.controls.volunteering_hours.enable();
      this.hourform.controls.project_hours.enable();
    }
  }

  submitChecked(event: string) {
    if (event === 'true') {
      this.hourform.controls.vacation.enable();
      this.hourform.controls.sick.enable();
      this.hourform.controls.volunteering_hours.enable();
      this.hourform.controls.project_hours.enable();
    }
  }

  resetChecked(event) {
    if (event === 'true') {
      this.hourform.controls.vacation.enable();
      this.hourform.controls.sick.enable();
      this.hourform.controls.volunteering_hours.enable();
      this.hourform.controls.project_hours.enable();
    }
  }



  logsuccess() {}
  onSubmit() {
    // console.log(this.hourform.value);
    this.plog.logproject(this.hourform.value).subscribe(() => {
    });
   // alert('Successfully submitted');
    // this.hourform.reset();
    this.plog.logsick(this.hourform.value).subscribe(()=>{
      
    });
    // this.hourform.reset();
    this.plog.logvacation(this.hourform.value).subscribe(()=>{
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
      this.showAlert = true;
    });
    this.hourform.reset();
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }


}
