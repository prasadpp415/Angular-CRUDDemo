import { Component, OnInit } from '@angular/core';
import users from '../users';
import { LoginserviceService } from '../login/loginservice.service';

@Component({
	selector: 'app-changesettings',
	templateUrl: './changesettings.component.html',
	styleUrls: [ './changesettings.component.css' ]
})
export class ChangesettingsComponent implements OnInit {
	users: users[];

	constructor(private _login: LoginserviceService) {}

	ngOnInit() {
		this._login.getuser().subscribe((data: users[]) => {
			this.users = data;
		});
	}
}
