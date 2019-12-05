import { Component, OnInit, EventEmitter, Input, Output, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginserviceService } from './loginservice.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
	name: string;
}

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent {
	form: FormGroup = new FormGroup({
		username: new FormControl(''),
		password: new FormControl('')
	});
	name: string;
	constructor(private _login: LoginserviceService, private _route: Router, private dialog: MatDialog) {}

	submit() {
		if (this.form.valid) {
			// this.submitEM.emit(this.form.value);
			// var loginObj: any;
			var invaliduser = "user isn't valid";
			// loginObj = {
			var username = this.form.value.username;
			var password = this.form.value.password;
			// };
			var userexist = this._login.validateuser(username);
			localStorage.setItem('loginusername', username);
			this.name = username;
			this.form.reset();
			if (userexist) {
				this.openDialog(username, 'Happy Shopping !!!');
				setInterval(() => {}, 500);
				setTimeout(() => {
					this._route.navigate([ '/home' ]);
				}, 500);
			} else {
				this.openDialog(invaliduser, '');
				this._route.navigate([ '/login' ]);
			}
		}
	}

	register() {
		this._route.navigate([ '/register' ]);
	}

	openDialog(name, message): void {
		const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
			width: '250px',
			data: { name: name, message: message }
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}
}

@Component({
	selector: 'dialog-overview-example-dialog',
	templateUrl: 'dialogPage.html'
})
export class DialogOverviewExampleDialog {
	constructor(public dialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

	onNoClick(): void {
		this.dialogRef.close();
	}
}
