import { Component, OnInit } from '@angular/core';

export interface Unit {
    value: number;
    viewValue: string;
}

@Component({
    selector: 'app-metric-units',
    templateUrl: './metric-units.component.html',
    styleUrls: ['./metric-units.component.scss']
})
export class MetricUnitsComponent implements OnInit {
    from: number;
    to: number;
    numb: number;
    numb_nice: string;
    res: number;
    res_nice: string;

    from_old: number;
    to_old: number;
    numb_old: number;

    constructor() {
        this.from_old = 0;
        this.to_old = 0;
        this.numb_old = 0;
        this.res = 0;
    }

    ngOnInit() {}

    getValue() {
        if (this.numb >= 1000) {
            this.numb_nice = this.formatNumber(this.numb);
            return this.numb_nice;
        }
        return this.numb;
    }

    calc() {
        if (this.numb > 0 && this.from && this.to) {
            this.from_old = this.from;
            this.to_old = this.to;
            this.numb_old = this.numb;
            let res = 0;
            res += this.from;
            res -= this.to;
            res = Math.pow(10, res);
            this.res = this.numb * res;
            // this.res_nice = this.formatNumber(this.res);
            return ' = ' + this.res; //_nice;
        }
    }

    formatNumber(numb) {
        let resarr = [],
            count = 0;
        if (numb >= 1000) {
            let arr = numb.toString(10).split('');
            for (var i = arr.length - 1; i >= 0; i--) {
                if (count % 3 == 0 && count != 0) {
                    resarr.unshift("'");
                }
                resarr.unshift(arr[i]);
                count++;
            }
        }
        return resarr.join('');
    }

    getName(number) {
        for (var i = this.units.length - 1; i >= 0; i--) {
            if (this.units[i].value == number) {
                return this.units[i].viewValue;
            }
        }
    }

    getPlaceholder() {
        if (this.res > 0) {
            return '=';
        } else {
            return '';
        }
    }

    units: Unit[] = [
        { value: 18, viewValue: 'Exa' },
        { value: 15, viewValue: 'Peta' },
        { value: 12, viewValue: 'Tera' },
        { value: 9, viewValue: 'Giga' },
        { value: 6, viewValue: 'Mega' },
        { value: 3, viewValue: 'Kilo' },
        { value: 2, viewValue: 'Hecto' },
        { value: 1, viewValue: 'Deka' },
        { value: 0, viewValue: 'Meter' },
        { value: -1, viewValue: 'Deci' },
        { value: -2, viewValue: 'Centi' },
        { value: -3, viewValue: 'Milli' },
        { value: -6, viewValue: 'Micro' },
        { value: -9, viewValue: 'Nano' },
        { value: -12, viewValue: 'Pico' },
        { value: -15, viewValue: 'Femto' },
        { value: -18, viewValue: 'Atto' }
    ];
}
