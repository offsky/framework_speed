import {Component} from 'angular2/core';

@Component({
	selector: 'my-row',
	template: `
	  <span class="cell" (click)="click(row,0)">{{row.name}} = <i>{{row.c[0]}}</i></span>
	  <span class="cell" (click)="click(row,1)">{{row.text}} = <i>{{row.c[1]}}</i></span>
	  <span class="cell" (click)="click(row,2)">a = <i>{{row.c[2]}}</i></span>
	  <span class="cell" (click)="click(row,3)">b = <i>{{row.c[3]}}</i></span>
	  <span class="cell" (click)="click(row,4)">c = <i>{{row.c[4]}}</i></span>
	  <span class="cell" (click)="click(row,5)">d = <i>{{row.c[5]}}</i></span>
	  <span class="cell" (click)="click(row,6)">e = <i>{{row.c[6]}}</i></span>
	  <span class="cell" (click)="click(row,7)">f = <i>{{row.c[7]}}</i></span>
	  <span class="cell" (click)="click(row,8)">g = <i>{{row.c[8]}}</i></span>
	  <span class="cell" (click)="click(row,9)">h = <i>{{row.c[9]}}</i></span>
	  <span class="cell" (click)="click(row,10)">i = <i>{{row.c[10]}}</i></span>
	  <span class="cell" (click)="click(row,11)">j = <i>{{row.c[11]}}</i></span>
	  <span class="cell" (click)="click(row,12)">k = <i>{{row.c[12]}}</i></span>
	`,
	inputs: ['row']
})
export class RowComponent {
	 public row;

	 click(row,i) {
		  console.log("click",row);
		  row.c[i]++;
	 }
}