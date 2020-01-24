import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {FormControl} from '@angular/forms';

// Cookie stuff
import {CookieService} from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './screens/admin/components/dashboard/dashboard.component';
import { DashboardComponent as Dev } from './screens/developer/components/dashboard/dashboard.component';
import { CardComponent } from './screens/admin/components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HoursComponent } from './screens/developer/components/hours/hours.component';
import { HourComponent } from './screens/admin/components/hour/hour.component';
import { ProjectsComponent } from './screens/admin/components/projects/projects.component';

// Material Stuff
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { AddprojectComponent } from './screens/admin/components/addproject/addproject.component';
import {MatDatepickerModule} from '@angular/material/datepicker';




import { DevelopersComponent } from './screens/admin/components/developers/developers.component';
import { AssignedprojectsComponent } from './screens/developer/components/assignedprojects/assignedprojects.component';
import { MatTableModule } from '@angular/material/table';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavigationComponent } from './screens/admin/navigation/navigation.component';
import { VerifyComponent } from './screens/verify/verify.component';
import { MatFormFieldModule, MatInputModule, MatNativeDateModule, DateAdapter, MAT_DATE_LOCALE } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './screens/developer/nav/nav.component';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatListModule} from '@angular/material/list';




import { ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AreaComponent } from './screens/admin/components/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Dev,
    CardComponent,
    HoursComponent,
    HourComponent,
    ProjectsComponent,
    AddprojectComponent,
     DevelopersComponent,
    AssignedprojectsComponent,
    NavigationComponent,
    VerifyComponent,
    NavComponent,
    AreaComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatListModule,
    HighchartsChartModule,

    




  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
