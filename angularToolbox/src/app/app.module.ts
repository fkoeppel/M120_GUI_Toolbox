import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreathalyzerComponent } from './features/breathalyzer/components/breathalyzer/breathalyzer.component';
import { BreathalyzerService } from './features/breathalyzer/services/breathalyzer.service';
import { HomeComponent } from './features/home/components/home/home.component';
import { NavigationComponent } from './features/navigation/components/navigation/navigation.component';
import { CoordinatesVisualizerComponent } from './features/coordinates-visualizer/components/coordinates-visualizer/coordinates-visualizer.component';
import { MetricUnitsComponent } from './features/metric-units/components/metric-units/metric-units.component';
import { MetricUnitsService } from './features/metric-units/services/metric-units.service';
import { HashGeneratorComponent } from './features/hash-generator/components/hash-generator/hash-generator.component';
import { CoordinatesVisualizerService } from './features/coordinates-visualizer/services/coordinates-visualizer.service';
import { HashGeneratorService } from './features/hash-generator/services/hash-generator.service';
import { MaterialModule } from './features/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BreathalyzerComponent,
    HomeComponent,
    NavigationComponent,
    CoordinatesVisualizerComponent,
    MetricUnitsComponent,
    HashGeneratorComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, BrowserAnimationsModule],
  providers: [
    BreathalyzerService,
    MetricUnitsService,
    CoordinatesVisualizerService,
    HashGeneratorService
  ],
  bootstrap: [AppComponent],
  exports: [MaterialModule]
})
export class AppModule {}
