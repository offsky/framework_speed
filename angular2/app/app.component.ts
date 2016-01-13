// https://angular.io/docs/ts/latest/tutorial/toh-pt1.html

import {Component, OnInit} from 'angular2/core';
import {DataService} from './data.service';
import {RowComponent} from './row.component';

@Component({ //component meta-data decorator
	selector: 'my-app', //where to attach this component in the html
	template:`
	<button (click)="click()">start</button>
	<div *ngFor="#row of data">
  	  	<my-row [row]="row"></my-row>
	</div>
	`,
	directives: [RowComponent],
	providers: [DataService]
}) //no semicolon here and no code between this and the export, since it is a chained function
//export tells the rest of the app that we have defined this component.
//One component per file with same name
export class AppComponent implements OnInit { 
	public data;
 
	constructor(private _dataService: DataService) { };

	click() {
		 this.getData();
	}
	ngOnInit() {
		 this.data = [];
  	}
	getData() {
		 this.data = this._dataService.getData();
  	}

}
