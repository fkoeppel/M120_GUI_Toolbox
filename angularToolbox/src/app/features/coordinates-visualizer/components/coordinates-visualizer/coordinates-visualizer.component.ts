import { Component, OnInit } from '@angular/core';
import { CoordinatesVisualizer } from '../../models/coordinates-visualizer';

@Component({
  selector: 'app-coordinates-visualizer',
  templateUrl: './coordinates-visualizer.component.html',
  styleUrls: ['./coordinates-visualizer.component.scss']
})
export class CoordinatesVisualizerComponent implements OnInit {
  inputCoordinate: CoordinatesVisualizer;
  coordinates: CoordinatesVisualizer[];

  constructor() {
    this.inputCoordinate = new CoordinatesVisualizer(null, null);
    this.coordinates = new Array<CoordinatesVisualizer>();
  }

  ngOnInit() {}

  add() {
    this.coordinates.push(this.inputCoordinate);
  }
}
