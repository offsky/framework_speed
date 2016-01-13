import {Injectable} from 'angular2/core';

@Injectable()
export class DataService {

	getData() {
		var hh = [];

		for(var i = 0;i<5000;i++) {
			var cols = [1,1,1,1,1,1,1,1,1,1,1,1,1];
			hh.push({"name":"Item"+i,"text":"This is "+i+" comment","c":cols});
		}

		return hh;
	}
}