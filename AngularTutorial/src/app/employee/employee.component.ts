import { Component } from '@angular/core';
import { IEmployee } from './employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import { ISubscription } from 'rxjs/Subscription';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent {
    employee: IEmployee
    statusMessage: string = 'Loading data please wait';

    subscription: ISubscription;

    constructor(private _empService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) { }
    ngOnInit() {

        let empCode: string = this._activatedRoute.snapshot.params['code'];

        this.subscription = this._empService.getEmployee(empCode)
            .retryWhen((err) => {
                return err.scan((retryCount) => {
                    retryCount += 1;
                    if (retryCount < 6) {
                        this.statusMessage = 'Retrying attempt #' + retryCount;
                        return retryCount;
                    } else {
                        throw (err);
                    }
                }, 0).delay(1000)
            })
            .subscribe((res) => {
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

    onBackButtonClick(): void {
        this._router.navigate(['/employees']);
    }

    onCancelButton(): void {
        this.statusMessage = 'Request Cancel';
        this.subscription.unsubscribe();
    }
}