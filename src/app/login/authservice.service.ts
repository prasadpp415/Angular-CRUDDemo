import { Injectable } from '@angular/core';
import {
	CanActivate,
	CanActivateChild,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router
} from '@angular/router';
import { LoginserviceService } from './loginservice.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
	providedIn: 'root'
})
export class AuthserviceService implements CanActivate, CanActivateChild {
	constructor(private _login: LoginserviceService, private _route: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this._login.isUserLoggedin) {
			return true;
		} else {
			alert('You are not allowed to access this page');
			this._route.navigate([ 'login' ]);
			return false;
		}
	}

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this._login.isUserAdmin) {
			return true;
		} else {
			alert('Sorry !!!! , You are not an Admin');
			this._route.navigate([ 'login' ]);
			return false;
		}
	}
}
