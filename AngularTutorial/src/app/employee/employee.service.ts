import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {
   

    constructor(private _http: Http) {

    }

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get("http://localhost:61051/api/employees")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);

    }

    getEmployee(empCode: string): Observable<IEmployee> {
        return this._http.get("http://localhost:61051/api/employees/" + empCode)
            .map((response: Response) => <IEmployee>response.json())
            //.toPromise();
            .catch(this.handleError);
    }

    handlePromiseError(error: Response) {
        console.error(error);
        throw(error);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}