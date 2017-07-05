import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteComponent } from './../route/route.component';
import { VehicleComponent } from './../vehicle/vehicle.component';
import { HomeComponent } from './../home/home.component';
import { AboutComponent } from './../about/about.component';

const routes : Routes = [
    {path:"home",component:HomeComponent},
    {path:"route",component:RouteComponent},
    {path:"vehicle",component:VehicleComponent},
    {path:"about",component:AboutComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule { }
