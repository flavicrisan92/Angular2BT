import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { FormsModule } from "@angular/forms";
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employeeCout.component';
import { SimpleComponent } from './others/simple.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './others/pagenotfound.component';
import { EmployeeService } from './employee/employee.service';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/:code', component: EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '*', component: PageNotFoundComponent }
]

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes, { useHash: false })],
    declarations: [
        AppComponent, EmployeeComponent,
        EmployeeListComponent,
        EmployeeTitlePipe, EmployeeCountComponent,
        SimpleComponent, HomeComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent],
    providers: [EmployeeService]
})
export class AppModule { }
