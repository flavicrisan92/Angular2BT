import { Component } from "@angular/core"


@Component({
    selector: 'my-app',
    template: `<div style="padding:5px">
                    <ul class="nav nav-tabs">
                        <li routerLinkActive="active"><a routerLink="home">Home</a></li>
                        <li routerLinkActive="active"><a routerLink="employees">Employees</a></li>
                    </ul>
                    <router-outlet></router-outlet>
              </div>`
})

export class AppComponent {
    name: string = "Tom"
    userText: string = "pragim"
}
