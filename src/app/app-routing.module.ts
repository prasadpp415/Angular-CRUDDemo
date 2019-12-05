import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, CanActivateChild } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ChangesettingsComponent } from './changesettings/changesettings.component';
import { AuthserviceService } from './login/authservice.service';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
	{
		path: '',
		component: LoginComponent,
		canActivate: [ AuthserviceService ],
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [ AuthserviceService ]
	},
	{
		path: 'login/register',
		component: RegisterComponent
	},
	{
		path: 'login/registeredusers',
		component: ChangesettingsComponent
	},
	{
		path: 'home',
		component: HomeComponent,
		canActivateChild: [ AuthserviceService ]
	},
	{
		path: '**',
		component: NotfoundComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
