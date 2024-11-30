import { Component } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'login',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
    ],
    templateUrl: 'login.component.html',
    styleUrl: 'login.component.css',
})
export class LoginComponent {

    username: FormControl = new FormControl('');

}
