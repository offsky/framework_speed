System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var RowComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RowComponent = (function () {
                function RowComponent() {
                }
                RowComponent.prototype.click = function (row, i) {
                    console.log("click", row);
                    row.c[i]++;
                };
                RowComponent = __decorate([
                    core_1.Component({
                        selector: 'my-row',
                        template: "\n\t  <span class=\"cell\" (click)=\"click(row,0)\">{{row.name}} = <i>{{row.c[0]}}</i></span>\n\t  <span class=\"cell\" (click)=\"click(row,1)\">{{row.text}} = <i>{{row.c[1]}}</i></span>\n\t  <span class=\"cell\" (click)=\"click(row,2)\">a = <i>{{row.c[2]}}</i></span>\n\t  <span class=\"cell\" (click)=\"click(row,3)\">b = <i>{{row.c[3]}}</i></span>\n\t  <span class=\"cell\" (click)=\"click(row,4)\">c = <i>{{row.c[4]}}</i></span>\n\t  <span class=\"cell\" (click)=\"click(row,5)\">d = <i>{{row.c[5]}}</i></span>\n\t  <span class=\"cell\" (click)=\"click(row,6)\">e = <i>{{row.c[6]}}</i></span>\n\t  <span class=\"cell\" (click)=\"click(row,7)\">f = <i>{{row.c[7]}}</i></span>\n\t  <span class=\"cell\" (click)=\"click(row,8)\">g = <i>{{row.c[8]}}</i></span>\n\t  <span class=\"cell\" (click)=\"click(row,9)\">h = <i>{{row.c[9]}}</i></span>\n\t  <span class=\"cell\" (click)=\"click(row,10)\">i = <i>{{row.c[10]}}</i></span>\n\t  <span class=\"cell\" (click)=\"click(row,11)\">j = <i>{{row.c[11]}}</i></span>\n\t  <span class=\"cell\" (click)=\"click(row,12)\">k = <i>{{row.c[12]}}</i></span>\n\t",
                        inputs: ['row']
                    }), 
                    __metadata('design:paramtypes', [])
                ], RowComponent);
                return RowComponent;
            })();
            exports_1("RowComponent", RowComponent);
        }
    }
});
//# sourceMappingURL=row.component.js.map