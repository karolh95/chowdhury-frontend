import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'side-navigation',
	templateUrl: './side-navigation.component.html',
	styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

	categories: Category[] = [];

	constructor() { }

	ngOnInit(): void { }

}

class Category {
	label: string;
	links: Link[];
}

class Link {
	url: string;
	label: string;
	icon?: string;
}
