import { Component, Input, Output, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { UserlistService } from '../home/userlist.service';
import { ajax } from 'rxjs/ajax';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements AfterViewInit {
	@ViewChild(LoginComponent, { static: false })
	private login: LoginComponent;
	// @Input() login: LoginComponent;
	constructor(private _route: Router, private _users: UserlistService) {}

	Message: string;
	public persondata = [];

	gotosetting() {
		debugger;
		if (this.login.name == 'Admin') {
			this._route.navigate([ '/settings' ]);
		}
	}

	// getusers() {
	// 	this._users.getusers().subscribe((data) => {
	// 		this.persondata = Array.from(Object.keys(data), (k) => data[k]);
	// 		console.log(this.persondata);
	// 	});
	// }

	getusers() {
		const call = ajax('http://jsonplaceholder.typicode.com/users');
		call.subscribe((res) => {
			this.persondata = Array.from(Object.keys(res.response), (k) => res.response[k]);
			console.log(this.persondata);
		});
	}

	// ngOnInit() {}

	ngAfterViewInit() {
		this.gotosetting();
	}
}
