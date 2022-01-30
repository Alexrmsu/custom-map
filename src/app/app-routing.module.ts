import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FullscreenComponent} from "./fullscreen/fullscreen.component";
import {ZoomRangeComponent} from "./zoom-range/zoom-range.component";
import {MarkersComponent} from "./markers/markers.component";
import {PropertiesComponent} from "./properties/properties.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'fullscreen', component: FullscreenComponent },
      {path: 'zoom-range', component: ZoomRangeComponent},
      {path: 'markers', component: MarkersComponent},
      {path: 'propiedades', component: PropertiesComponent},
      {path: '**', redirectTo: 'fullscreen'},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
