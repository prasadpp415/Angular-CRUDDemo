import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
	MatCardModule,
	MatInputModule,
	MatButtonModule,
	MatToolbarModule,
	MatDialogModule,
	MatFormFieldModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent, DialogOverviewExampleDialog } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ChangesettingsComponent } from './changesettings/changesettings.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';

const modules = [
	MatCardModule,
	MatInputModule,
	MatButtonModule,
	MatToolbarModule,
	MatDialogModule,
	MatFormFieldModule
];

@NgModule({
	entryComponents: [ LoginComponent, DialogOverviewExampleDialog ],
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		DialogOverviewExampleDialog,
		ChangesettingsComponent,
		RegisterComponent,
		NotfoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		modules,
		ReactiveFormsModule,
		HttpClientModule
	],
	exports: [ modules ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
