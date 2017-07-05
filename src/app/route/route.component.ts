import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../delivery.service';
import { ErrorMessage } from './../vehicle/vehicle.component';

@Component({
  selector: 'app-route',
  templateUrl: '/src/app/route/route.component.html',
  styleUrls: ['src/app/route/route.component.css']
})
export class RouteComponent implements OnInit {

  private sTimes:string[];
  private eTimes:string[];

  private routeModel : RouteModel;
  private destinations:string[];
  private isError:boolean;
  private searchBy:string;
  private searchValue:string;
  private editedRoute:RouteModel;
  private routeList:RouteModel[];
  private edit:boolean;
  private sureDelete:boolean;
  private errorMessage:ErrorMessage;
  constructor(private deliveryService:DeliveryService) { }

  ngOnInit() {
    this.searchValue ="";
    this.destinations = ["DALLAS","ARLINGTON","AUSTIN","NEW ORLEANS","ADDISON","MICKINNEY","PLANO","GRAPEVINE","SAN ANTINO","COMMERCE","IRVING","MCKINNEY"];
    this.sTimes=["1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"];
    this.eTimes=["15m","30m","45m","1h","1h15m","1h30m","1h45m","2h","2h15m","2h30m","2h45m","3h","3h15m","3h30m","3h45m","4h"];
    this.errorMessage = new ErrorMessage();
    this.isError=false;
    this.searchBy="anyField";
    this.initRouteModel();
    this.editedRoute = new RouteModel();
    this.getAllRoutes();
    this.edit = false;
  }

    initRouteModel():void{
 
    this.routeModel= new RouteModel();
    this.routeModel.activeStatus = true;
    this.routeModel.sDest = "DALLAS";
    this.routeModel.eDest = "IRVING";
    this.routeModel.sTime = "12:00";
    this.routeModel.eTime = "30m";
  }

  getAllRoutes():void{
    this.isError=false;
    this.deliveryService.getAllRoutes().subscribe(
      data => this.routeList = data.json().listRouteVO,
      error => this.getError(error.json())
    );
     
  }

  getError(eM:ErrorMessage):void{
    this.errorMessage = eM;
    this.isError = true;
    
  }

  postRoute():void{
      this.deliveryService.postRoute(this.routeModel).subscribe(
        data => this.getAllRoutes(),
        error => this.getError(error.json())
      );
      this.initRouteModel();
  }

  deleteRoute(id:number):void{
      this.sureDelete = confirm("Are You Sure?");
      if(this.sureDelete){
        this.deliveryService.deleteRoute(id).subscribe(
          data => this.getAllRoutes()
        )
      }
  }

  putButton(rm:RouteModel):void{
    this.edit = true;
    this.editedRoute = Object.assign({}, rm);
  }

  putRoute():void{
      this.edit = false;
      this.deliveryService.putRoute(this.editedRoute).subscribe(
        data => this.getAllRoutes(),
        error => this.getError(error.json())
      );
  }

  putCancel():void{
    this.edit = false;
  }

  searchVehicle():void{
    this.isError=false;
    this.deliveryService.searchRoutes(this.searchBy,this.searchValue).subscribe(
      data => this.routeList = data.json().listRouteVO
    );
  }
}

export class RouteModel{
    id: number;
    sDest: string;
    eDest: string;
    sTime: string;
    name: string;
    activeStatus: boolean;
    eTime: string;
}
