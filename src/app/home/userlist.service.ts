import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UserlistService {
	constructor(private _http: HttpClient) {}

	getusers(): Observable<any> {
		const url = 'http://jsonplaceholder.typicode.com/users';
		return this._http.get(url).pipe(retry(3), map((res) => console.log(res)));
	}
}
