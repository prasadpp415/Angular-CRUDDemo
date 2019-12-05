import { Component, OnInit, Input } from '@angular/core';
import { LoginserviceService } from '../login/loginservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		username: new FormControl(''),
		password: new FormControl('')
	});
	constructor(private _login: LoginserviceService) {}

	ngOnInit() {}

	// submit(firstName, lastName, username, password) {
	// 	debugger;
	// 	if (this.registerForm.valid) {
	// 		var usersarray;
	// 	}
	// }

	adduser(firstName, lastName, username, password) {
		debugger;
		this._login.adduser(firstName, lastName, username, password);
	}
}
