import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../delivery.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: '/src/app/vehicle/vehicle.component.html',
  styleUrls: ['src/app/vehicle/vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  private vehicleModel : VehicleModel;
  private isError:boolean;
  private searchBy:string;
  private searchValue:string;
  private editedVehicle:VehicleModel;
  private vehicleList:VehicleModel[];
  private edit:boolean;
  private sureDelete:boolean;
  private regNumClass:string;
  private regNumPlaceHolder:string;
  private errorMessage:ErrorMessage;
  constructor(private deliveryService:DeliveryService) { }

  ngOnInit() {
    this.searchValue ="";

    this.errorMessage = new ErrorMessage();
    this.isError=false;
    this.searchBy="anyField";
    this.initVehicleModel();
    this.editedVehicle = new VehicleModel();
    this.getAllVehicles();
    this.edit = false;
  }

  initVehicleModel():void{
    this.regNumClass = "";
    this.regNumPlaceHolder="Enter Reg Num";
    this.vehicleModel= new VehicleModel();
    this.vehicleModel.activeStatus = true;
    this.vehicleModel.dutyStatus = "ONDUTY";
    this.vehicleModel.type = "BUS";
  }

  getAllVehicles():void{
    this.isError=false;
    this.deliveryService.getAllVehicles().subscribe(
      data => this.vehicleList = data.json().listVehicleVO,
      error => this.getError(error.json())
    );
     
  }

  getError(eM:ErrorMessage):void{
    this.errorMessage = eM;
    this.isError = true;
    
  }

  postVehicle():void{
    if(this.vehicleModel.regNum == null || this.vehicleModel.regNum == ""){
       this.regNumPlaceHolder="Required";
       this.regNumClass = "error";
    }else{
      this.deliveryService.postVehicles(this.vehicleModel).subscribe(
        data => this.getAllVehicles(),
        error => this.getError(error.json())
      );
      this.initVehicleModel();
    }
  }

  deleteVehicle(id:number):void{
    this.sureDelete = confirm("Are You Sure?");
    if(this.sureDelete){
      this.deliveryService.deleteVehicle(id).subscribe(
        data => this.getAllVehicles()
      )
    }
  }

  putButton(vm:VehicleModel):void{
    this.edit = true;
    this.editedVehicle = Object.assign({}, vm);
  }

  putVehicle():void{
  
      this.edit = false;
      this.deliveryService.putVehicles(this.editedVehicle
      ).subscribe(
        data => this.getAllVehicles(),
        error => this.getError(error.json())
      );
  
  }

  putCancel():void{
    this.edit = false;
  }

  searchVehicle():void{
    this.isError=false;
    this.deliveryService.searchVehicle(this.searchBy,this.searchValue).subscribe(
      data => this.vehicleList = data.json().listVehicleVO
    );
  }
}

export class VehicleModel{
    id: number;
    regNum: string;
    name: string;
    type: string;
    activeStatus: boolean;
    dutyStatus: string;
}

export class ErrorMessage{
  errorCode:string;
  errorDesc:string;
}

