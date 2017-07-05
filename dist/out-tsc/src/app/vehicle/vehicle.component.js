"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var delivery_service_1 = require("../delivery.service");
var VehicleComponent = (function () {
    function VehicleComponent(deliveryService) {
        this.deliveryService = deliveryService;
    }
    VehicleComponent.prototype.ngOnInit = function () {
        this.searchValue = "";
        this.errorMessage = new ErrorMessage();
        this.isError = false;
        this.searchBy = "anyField";
        this.initVehicleModel();
        this.editedVehicle = new VehicleModel();
        this.getAllVehicles();
        this.edit = false;
    };
    VehicleComponent.prototype.initVehicleModel = function () {
        this.regNumClass = "";
        this.regNumPlaceHolder = "Enter Reg Num";
        this.vehicleModel = new VehicleModel();
        this.vehicleModel.activeStatus = true;
        this.vehicleModel.dutyStatus = "ONDUTY";
        this.vehicleModel.type = "BUS";
    };
    VehicleComponent.prototype.getAllVehicles = function () {
        var _this = this;
        this.isError = false;
        this.deliveryService.getAllVehicles().subscribe(function (data) { return _this.vehicleList = data.json().listVehicleVO; }, function (error) { return _this.getError(error.json()); });
    };
    VehicleComponent.prototype.getError = function (eM) {
        this.errorMessage = eM;
        this.isError = true;
    };
    VehicleComponent.prototype.postVehicle = function () {
        var _this = this;
        if (this.vehicleModel.regNum == null || this.vehicleModel.regNum == "") {
            this.regNumPlaceHolder = "Required";
            this.regNumClass = "error";
        }
        else {
            this.deliveryService.postVehicles(this.vehicleModel).subscribe(function (data) { return _this.getAllVehicles(); }, function (error) { return _this.getError(error.json()); });
            this.initVehicleModel();
        }
    };
    VehicleComponent.prototype.deleteVehicle = function (id) {
        var _this = this;
        this.sureDelete = confirm("Are You Sure?");
        if (this.sureDelete) {
            this.deliveryService.deleteVehicle(id).subscribe(function (data) { return _this.getAllVehicles(); });
        }
    };
    VehicleComponent.prototype.putButton = function (vm) {
        this.edit = true;
        this.editedVehicle = Object.assign({}, vm);
    };
    VehicleComponent.prototype.putVehicle = function () {
        var _this = this;
        this.edit = false;
        this.deliveryService.putVehicles(this.editedVehicle).subscribe(function (data) { return _this.getAllVehicles(); }, function (error) { return _this.getError(error.json()); });
    };
    VehicleComponent.prototype.putCancel = function () {
        this.edit = false;
    };
    VehicleComponent.prototype.searchVehicle = function () {
        var _this = this;
        this.isError = false;
        this.deliveryService.searchVehicle(this.searchBy, this.searchValue).subscribe(function (data) { return _this.vehicleList = data.json().listVehicleVO; });
    };
    return VehicleComponent;
}());
VehicleComponent = __decorate([
    core_1.Component({
        selector: 'app-vehicle',
        templateUrl: '/src/app/vehicle/vehicle.component.html',
        styleUrls: ['src/app/vehicle/vehicle.component.css']
    }),
    __metadata("design:paramtypes", [delivery_service_1.DeliveryService])
], VehicleComponent);
exports.VehicleComponent = VehicleComponent;
var VehicleModel = (function () {
    function VehicleModel() {
    }
    return VehicleModel;
}());
exports.VehicleModel = VehicleModel;
var ErrorMessage = (function () {
    function ErrorMessage() {
    }
    return ErrorMessage;
}());
exports.ErrorMessage = ErrorMessage;
//# sourceMappingURL=vehicle.component.js.map