import { Component, OnInit, OnDestroy } from '@angular/core';
import { Coordinate } from '../../models/coordinate';
import * as $ from 'jquery';
import { BehaviorSubject } from 'rxjs';
import { CoordinateForm } from '../../models/coordinate-form';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IsDirtyErrorStateMatcher } from '../../shared/IsDirtyErrorStateMatcher';

@Component({
  selector: 'app-coordinates-visualizer',
  templateUrl: './coordinates-visualizer.component.html',
  styleUrls: ['./coordinates-visualizer.component.scss']
})
export class CoordinatesVisualizerComponent implements OnInit, OnDestroy {
  coordinates$: BehaviorSubject<Coordinate[]>;
  private coordinates: Coordinate[];
  private grid: string[][];
  visualTable$: BehaviorSubject<string>;
  generateEnabled$: BehaviorSubject<boolean>;
  coordinateForm: FormGroup;
  private lowestX: number;
  private highestY: number;
  private lengthX: number;
  private lengthY: number;
  matcher: IsDirtyErrorStateMatcher;

  table: HTMLTableElement;
  tr: HTMLTableRowElement;
  th: HTMLTableHeaderCellElement;
  container: Element;
  documentFragment: DocumentFragment;

  constructor() {
    this.defaultForm();
    this.generateEnabled$ = new BehaviorSubject<boolean>(true);
    this.visualTable$ = new BehaviorSubject<string>('');
    this.coordinates = new Array<Coordinate>();
    this.matcher = new IsDirtyErrorStateMatcher();
    this.coordinates$ = new BehaviorSubject<Coordinate[]>(this.coordinates);

    this.coordinates.push(new Coordinate(0, 0));
    // this.createDefaultCoordinates();

    this.coordinates$.subscribe(() => {
      this.generateEnabled$.next(this.isGenerateEnabled(this.coordinates));
    });
  }

  createVisualTableFromGrid() {
    console.log('Start' + Date.now().toLocaleString());
    this.table = document.createElement('table');
    this.tr = document.createElement('tr');
    this.th = document.createElement('th');
    this.container = document.querySelector('#visualisation');
    this.documentFragment = document.createDocumentFragment();
    return this.createTables();
  }

  private createTables() {
    const tableClone = this.table.cloneNode(true);
    for (let i = 0; i < this.lengthY; i++) {
      const tr = this.tr.cloneNode(true);
      for (let j = 0; j < this.lengthX; j++) {
        const th = this.th.cloneNode(true) as HTMLTableHeaderCellElement;
        th.textContent = '|';
        tr.appendChild(th);
        if (this.grid[j][i] == null || this.grid[j][i] == '') {
          const th = this.th.cloneNode(true) as HTMLTableHeaderCellElement;
          th.textContent = '-';
          th.setAttribute('class', 'column');
          tr.appendChild(th);
        } else {
          const koo = this.grid[j][i];
          const th = this.th.cloneNode(true) as HTMLTableHeaderCellElement;
          th.textContent = koo;
          th.setAttribute('class', 'column');
          tr.appendChild(th);
        }
      }
      const th = this.th.cloneNode(true) as HTMLTableHeaderCellElement;
      th.textContent = '|';
      tr.appendChild(th);

      tableClone.appendChild(tr);
    }
    this.documentFragment.appendChild(tableClone);
    this.container.innerHTML = '';
    console.log('End' + Date.now().toLocaleString());
    console.log(this.documentFragment.textContent);
    this.visualTable$.next(this.documentFragment.textContent);
    console.log('Start dom Manipulating' + Date.now().toLocaleString());
    this.container.appendChild(this.documentFragment);
    console.log('End dom Manipulating' + Date.now().toLocaleString());
  }

  private createDefaultCoordinates() {
    for (let index = 0; index < 30; index++) {
      this.coordinates.push(new Coordinate(1, index));
    }
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.coordinates$.unsubscribe();
  }

  remove(coordinate: Coordinate) {
    const newCoordinates = this.coordinates.filter(element => {
      if (element.X === coordinate.X && element.Y === coordinate.Y) {
        return false;
      }
      return true;
    });
    this.coordinates = newCoordinates;
    this.coordinates$.next(newCoordinates);
  }

  private isGenerateEnabled(coordinates: Coordinate[]): boolean {
    if (coordinates.length <= 0) {
      return false;
    }
    return true;
  }

  hasError = (controlName: string, errorName: string) => {
    return this.coordinateForm.controls[controlName].hasError(errorName);
  }

  createCoordinate = coordinateValue => {
    if (this.coordinateForm.valid) {
      this.executeCoordinateCreation(coordinateValue);
      this.defaultForm();
    }
  }

  private executeCoordinateCreation = coordinateValue => {
    const formValue: CoordinateForm = {
      inputX: coordinateValue.inputX,
      inputY: coordinateValue.inputY
    };
    this.coordinates.unshift(new Coordinate(formValue.inputX, formValue.inputY));
    this.coordinates$.next(this.coordinates);
  }

  private defaultForm() {
    this.coordinateForm = new FormGroup({
      inputX: new FormControl(null, [
        Validators.required,
        Validators.maxLength(50),
        Validators.max(10000000),
        Validators.min(-10000000),
        Validators.pattern('-?[0-9]*')
      ]),
      inputY: new FormControl(null, [
        Validators.required,
        Validators.maxLength(50),
        Validators.max(10000000),
        Validators.min(-10000000),
        Validators.pattern('-?[0-9]*')
      ])
    });
  }

  generate() {
    this.grid = this.createVisualGrid();
    this.visualTable$.next(this.createVisualTableFromGridInnerHtml());
    $('#visualisation').html(this.visualTable$.getValue());
  }

  createVisualGrid() {
    let highestX = 0;
    let highestY = 0;
    let lowestX = 0;
    let lowestY = 0;

    this.coordinates.forEach(function(coordinate) {
      if (coordinate.X > highestX) {
        highestX = +coordinate.X;
      }
      if (coordinate.Y > highestY) {
        highestY = +coordinate.Y;
      }
      if (coordinate.X < lowestX) {
        lowestX = +coordinate.X;
      }
      if (coordinate.Y < lowestY) {
        lowestY = +coordinate.Y;
      }
    });

    if (lowestX < 0) {
      lowestX = +lowestX * -1;
    }
    if (lowestY < 0) {
      lowestY = +lowestY * -1;
    }

    const xHeight: number = +highestX + +lowestX + 1;
    const yHeight: number = +highestY + +lowestY + 1;

    const grid = new Array<string[]>(xHeight);

    for (let index = 0; index < xHeight; index++) {
      grid[index] = new Array<string>(yHeight);
    }

    this.coordinates.forEach(function(coordinate) {
      let newX = 0;
      let newY = 0;

      if (coordinate.X < 0) {
        newX = +lowestX - +coordinate.X * -1;
      }
      if (coordinate.X >= 0) {
        newX = +lowestX + +coordinate.X;
      }

      if (coordinate.Y < 0) {
        newY = +highestY + +coordinate.Y * -1;
      }
      if (coordinate.Y >= 0) {
        newY = +highestY - +coordinate.Y;
      }

      const gridX = grid[newX];
      gridX[newY] = '(' + coordinate.X + '/' + coordinate.Y + ')';
    });

    this.lengthX = xHeight;
    this.lengthY = yHeight;
    this.highestY = highestY;
    this.lowestX = lowestX;
    return grid;
  }

  createVisualTableFromGridInnerHtml() {
    return this.createTablesInnerHtml();
  }

  private createTablesInnerHtml() {
    let html = '<table>';
    html = this.createRows(html);
    html = html + '</table>';
    return html;
  }

  private createRows(html: string) {
    for (let i = 0; i < this.lengthY; i++) {
      html = html + '<tr>';
      html = this.createColumns(html, i);
      html = html + '</tr>';
    }
    return html;
  }

  private createColumns(html: string, i: number) {
    for (let j = 0; j < this.lengthX; j++) {
      html = html + '<th>|</th>';
      if (this.grid[j][i] == null || this.grid[j][i] == '') {
        html = html + '<th style="text-align: center;min-width: 40px;">-</th>';
      } else {
        const koo = this.grid[j][i];
        html = html + '<th style="text-align: center; min-width: 40px;">' + koo + '</th>';
      }
    }
    html = html + '<th>|</th>';
    return html;
  }
}
