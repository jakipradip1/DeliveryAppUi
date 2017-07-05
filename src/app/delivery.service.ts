import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { VehicleModel } from './vehicle/vehicle.component';
import { RouteModel } from './route/route.component';

@Injectable()
export class DeliveryService {

  private vehicleURL:string = "http://localhost:2222/vehicle-app/vehicle";
  private routeURL:string = "http://localhost:2222/vehicle-app/route";

  constructor(private http:Http) { }

  getAllVehicles():Observable<any>{
    return this.http.get(this.vehicleURL);
  }

  postVehicles(vehicleModel:VehicleModel):Observable<Response>{
    return this.http.post(this.vehicleURL, vehicleModel);
  }

  deleteVehicle(id:number):Observable<Response>{
    return this.http.delete(this.vehicleURL+"/"+id);
  }

 putVehicles(vehicleModel:VehicleModel):Observable<Response>{
    return this.http.put(this.vehicleURL, vehicleModel);
  }

  searchVehicle(searchBy:string, searchValue:string):Observable<Response>{
    return this.http.get(this.vehicleURL+"/"+searchBy+"?"+searchBy+"="+searchValue);
  }

  getAllRoutes():Observable<any>{
    return this.http.get(this.routeURL);
  }

  postRoute(routeModel:RouteModel):Observable<Response>{
    return this.http.post(this.routeURL, routeModel);
  }

  deleteRoute(id:number):Observable<Response>{
    return this.http.delete(this.routeURL+"/"+id);
  }

 putRoute(routeModel:RouteModel):Observable<Response>{
    return this.http.put(this.routeURL, routeModel);
  }

  searchRoutes(searchBy:string, searchValue:string):Observable<Response>{
    return this.http.get(this.routeURL+"/"+searchBy+"?"+searchBy+"="+searchValue);
  }
}

