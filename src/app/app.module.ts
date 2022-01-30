import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { MiniMapComponent } from './mini-map/mini-map.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { MarkersComponent } from './markers/markers.component';
import { ZoomRangeComponent } from './zoom-range/zoom-range.component';
import { PropertiesComponent } from './properties/properties.component';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    MiniMapComponent,
    FullscreenComponent,
    MarkersComponent,
    ZoomRangeComponent,
    PropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
