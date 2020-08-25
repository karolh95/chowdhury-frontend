import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
	declarations: [
		AppComponent,
		SideNavigationComponent,
		ContentComponent
	],
	imports: [
		BrowserModule,
		MaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
