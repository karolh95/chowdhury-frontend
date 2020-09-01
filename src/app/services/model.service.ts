import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ModelService {

	constructor(private http: HttpClient) { }

	public reset(): void {

		const url: string = `${environment.api}/model/reset`;

		this.http.get(url).toPromise();
	}


}
