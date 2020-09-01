import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ModelComponent } from './components/model/model.component';
import { SettingsComponent } from './components/settings/settings.component';
import { VehicleIconPipe } from './pipes/VehicleIcon';

@NgModule({
	declarations: [
		AppComponent,
		SideNavigationComponent,
		ModelComponent,
		SettingsComponent,
		VehicleIconPipe
	],
	imports: [
		BrowserModule,
		MaterialModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
