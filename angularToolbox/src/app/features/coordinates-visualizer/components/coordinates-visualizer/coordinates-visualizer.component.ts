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
    this.createVisual();
    console.table(this.grid);
  }

  ngOnInit() {
    document.getElementById('visualisation').innerHTML = '<h1>Hello</h1>';
  }

  add() {
    this.coordinates.push(this.inputCoordinate);
    this.inputCoordinate = new Coordinate(null, null);
    this.createVisual();
  }

  createVisual() {
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
      gridX[newY] = 'X:' + coordinate.X + '/' + 'Y:' + coordinate.Y;
    });

    this.grid = grid;
  }
}
