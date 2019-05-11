import { Component, OnInit } from '@angular/core';
import { Coordinate } from '../../models/coordinate';

@Component({
  selector: 'app-coordinates-visualizer',
  templateUrl: './coordinates-visualizer.component.html',
  styleUrls: ['./coordinates-visualizer.component.scss']
})
export class CoordinatesVisualizerComponent implements OnInit {
  inputCoordinate: Coordinate;
  coordinates: Coordinate[];
  grid: String[][];

  lowestX: number;
  highestY: number;
  lengthX: number;
  lengthY: number;

  constructor() {
    this.inputCoordinate = new Coordinate(null, null);
    this.coordinates = new Array<Coordinate>();

    this.coordinates.push(new Coordinate(0, 0));
  }

  ngOnInit() {}

  async generate() {
    this.grid = await this.createVisualGrid();
    await this.createVisualTableFromGrid().then(function(value) {
      document.getElementById('visualisation').innerHTML = value;
    });
    return 1;
  }

  async add() {
    this.coordinates.push(this.inputCoordinate);
    this.inputCoordinate = new Coordinate(null, null);
    return 1;
  }

  async createVisualGrid() {
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

    const grid = new Array<String[]>(xHeight);

    for (let index = 0; index < xHeight; index++) {
      grid[index] = new Array<String>(yHeight);
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

  async createVisualTableFromGrid() {
    const html = await this.createTables();
    return html;
  }

  private createTables() {
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
      html = html + '<th max-width: 3px;>|</th>';
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
