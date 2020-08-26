import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { MaterialModule } from './modules/material.module';
import { ModelComponent } from './components/model/model.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
	declarations: [
		AppComponent,
		SideNavigationComponent,
		ModelComponent,
		SettingsComponent
	],
	imports: [
		BrowserModule,
		MaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
