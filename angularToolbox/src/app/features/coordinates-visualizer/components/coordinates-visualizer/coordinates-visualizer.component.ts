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

    this.coordinates.push(new Coordinate(1, 1));
    this.coordinates.push(new Coordinate(1, 0));
    this.coordinates.push(new Coordinate(0, 1));
    this.coordinates.push(new Coordinate(-1, 1));
    this.coordinates.push(new Coordinate(1, -1));
    this.coordinates.push(new Coordinate(-1, -1));
    this.coordinates.push(new Coordinate(0, 0));
    this.coordinates.push(new Coordinate(0, -1));
    this.coordinates.push(new Coordinate(-1, 0));
    this.createVisualGrid();
    console.table(this.grid);
  }

  ngOnInit() {}

  add() {
    this.coordinates.push(this.inputCoordinate);
    this.inputCoordinate = new Coordinate(null, null);
    this.createVisualGrid();
    const visualTable = this.createVisualTableFromGrid();
    document.getElementById('visualisation').innerHTML = visualTable;
  }

  createVisualTableFromGrid(): string {
    let html = '<table>';

    for (let i = 0; i < this.lengthY; i++) {
      if (i == this.lengthY - 1 || i == this.lengthY - 2) {
        html = html + '<tr>';
        for (let j = 0; j < this.lengthX * 2 + 1; j++) {
          html = html + '<th style="max-width: 40px; min-width: 40px;">-----</th>';
        }
        html = html + '</tr>';
      }

      html = html + '<tr>';
      for (let j = 0; j < this.lengthX; j++) {
        html = html + '<th>|</th>';
        if (this.grid[j][i] == null || this.grid[j][i] == '') {
          html = html + '<th style="max-width: 40px; min-width: 40px;"></th>';
        } else {
          html =
            html + '<th style="max-width: 40px; min-width: 40px;">' + this.grid[j][i] + '</th>';
        }
      }
      html = html + '<th>|</th>';
      html = html + '</tr>';
    }
    html = html + '</table>';

    return html;
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
    this.grid = grid;
  }
}
