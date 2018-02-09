import { Component } from '@angular/core';
import { IEmployee } from './employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent {
    employee: IEmployee
    statusMessage: string = 'Loading data please wait';

    constructor(private _empService: EmployeeService,
        private _activatedRoute: ActivatedRoute) { }
    ngOnInit() {

        let empCode: string = this._activatedRoute.snapshot.params['code'];
        
        this._empService.getEmployee(empCode).subscribe((res) => {
            if (res == null) {
                this.statusMessage = 'No emploeyee with this code'
            } else {
                this.employee = res;
            }
        },
            (error) => {
                this.statusMessage = 'Failed to retrieve user';
                console.log(error);
            });
    }


}