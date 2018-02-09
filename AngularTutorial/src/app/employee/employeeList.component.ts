import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})
export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];

    ngOnInit(): void {
        this._employeeService.getEmployees()
            .subscribe(
            (res) => this.employees = res,
            (error) => {
                this.statusMessage = 'Problem with server try again.';
                console.error(error);
            }
            );
    }
    selectedEmployeeCountRadioButton: string = "All";
    statusMessage: string = 'Loading data please wait';

    constructor(private _employeeService: EmployeeService) {

    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeeCount(): number {
        return this.employees.filter(q => q.gender === "Male").length;
    }

    getTotalFemaleEmployeeCount(): number {
        return this.employees.filter(q => q.gender === "Female").length;
    }
}