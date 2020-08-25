import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'Chowdhury Frontend';

	sidebarOpen: boolean = true;

	sidebarToggler() {
		this.sidebarOpen = !this.sidebarOpen;
	}
}
