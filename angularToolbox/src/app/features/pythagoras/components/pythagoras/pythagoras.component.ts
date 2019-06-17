import { Component, OnInit } from '@angular/core';
import { getTypeNameForDebugging } from '@angular/common/src/directives/ng_for_of';

export interface Side {
    value: number;
    viewValue: string;
}

@Component({
    selector: 'app-pythagoras',
    templateUrl: './pythagoras.component.html',
    styleUrls: ['./pythagoras.component.scss']
})
export class PythagorasComponent implements OnInit {
    openFromLeft() {
        console.log('hey');
    }
    first: number;
    second: number;
    numb1: number;
    numb2: number;
    res: number;
    elem: HTMLElement;

    side_a: string;
    side_b: string;

    constructor() {
        let numb = 100;
        numb = numb.toString();
        numb += 'px';
        this.side_a = numb;

        this.side_b = numb;
    }

    ngOnInit() {
        this.elem = document.getElementById('tri') as HTMLElement;
        this.elem.style.borderTopWidth = this.side_a;
        this.elem.style.borderRightWidth = this.side_b;
        console.log(this.elem);
    }

    calc() {
        if (this.numb1 > 0 && this.numb2 > 0 && this.first > 0 && this.second > 0) {
            if (this.first == this.second) {
                return 'Please take to different Sides';
            }
            var both = this.first + this.second,
                calc_res;
            if (both == 3) {
                calc_res = this.getC();
                this.setAandB(calc_res, 1);
            } else if (both > 3) {
                calc_res = this.getAorB();
                this.setAandB(calc_res, 2);
            }
            this.setAandB(calc_res);
            return calc_res;
        }
    }

    setAandB(number, way) {
        let a, b, c;
        if (way == 1) {
            if (this.first == 1) {
                a = this.numb1;
                b = this.numb2;
                c = number;
            } else if (this.first == 2) {
                a = this.numb2;
                b = this.numb1;
                c = number;
            }
        } else if (way == 2) {
            if (this.first == 3) {
                if (this.second == 1) {
                    a = this.numb2;
                    b = number;
                    c = this.numb1;
                } else if (this.second == 2) {
                    a = number;
                    b = this.numb2;
                    c = this.numb1;
                }
            } else if (this.second == 3) {
                if (this.first == 1) {
                    a = this.numb1;
                    b = number;
                    c = this.numb2;
                } else if (this.first == 2) {
                    a = number;
                    b = this.numb1;
                    c = this.numb2;
                }
            }
        }
        a = Math.round((a / c) * 100);
        b = Math.round((b / c) * 100);
        c = Math.round((c / c) * 100);

        a = a.toString();
        b = b.toString();
        a += 'px';
        b += 'px';
        this.side_a = a;
        this.side_b = b;

        this.elem.style.borderTopWidth = this.side_a;
        this.elem.style.borderRightWidth = this.side_b;
    }

    getAorB() {
        var aorb, c, sum, res;
        if (this.first == 3) {
            c = this.numb1;
            aorb = this.numb2;
            if (aorb >= c) {
                return 'c has to be bigger than ' + this.getName(this.second);
            }
        } else {
            aorb = this.numb1;
            c = this.numb2;
            if (aorb >= c) {
                return 'c has to be bigger than ' + this.getName(this.first);
            }
        }

        sum = c * c - aorb * aorb;
        console.log(sum);
        res = Math.sqrt(sum);
        return res;
    }

    getC() {
        var a, b, sum, res;
        if (this.first == 1) {
            a = this.numb1;
            b = this.numb2;
        } else {
            b = this.numb1;
            a = this.numb2;
        }
        sum = a * a + b * b;
        res = Math.sqrt(sum);
        return res;
    }

    getName(number) {
        for (var i = this.sides.length - 1; i >= 0; i--) {
            if (this.sides[i].value == number) {
                return this.sides[i].viewValue;
            }
        }
    }

    sides: Side[] = [
        { value: 1, viewValue: 'Side a' },
        { value: 2, viewValue: 'Side b' },
        { value: 3, viewValue: 'Side c' }
    ];
}
