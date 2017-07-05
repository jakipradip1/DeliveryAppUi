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
var vehicle_component_1 = require("./../vehicle/vehicle.component");
var RouteComponent = (function () {
    function RouteComponent(deliveryService) {
        this.deliveryService = deliveryService;
    }
    RouteComponent.prototype.ngOnInit = function () {
        this.searchValue = "";
        this.destinations = ["DALLAS", "ARLINGTON", "AUSTIN", "NEW ORLEANS", "ADDISON", "MICKINNEY", "PLANO", "GRAPEVINE", "SAN ANTINO", "COMMERCE", "IRVING", "MCKINNEY"];
        this.sTimes = ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"];
        this.eTimes = ["15m", "30m", "45m", "1h", "1h15m", "1h30m", "1h45m", "2h", "2h15m", "2h30m", "2h45m", "3h", "3h15m", "3h30m", "3h45m", "4h"];
        this.errorMessage = new vehicle_component_1.ErrorMessage();
        this.isError = false;
        this.searchBy = "anyField";
        this.initRouteModel();
        this.editedRoute = new RouteModel();
        this.getAllRoutes();
        this.edit = false;
    };
    RouteComponent.prototype.initRouteModel = function () {
        this.routeModel = new RouteModel();
        this.routeModel.activeStatus = true;
        this.routeModel.sDest = "DALLAS";
        this.routeModel.eDest = "IRVING";
        this.routeModel.sTime = "12:00";
        this.routeModel.eTime = "30m";
    };
    RouteComponent.prototype.getAllRoutes = function () {
        var _this = this;
        this.isError = false;
        this.deliveryService.getAllRoutes().subscribe(function (data) { return _this.routeList = data.json().listRouteVO; }, function (error) { return _this.getError(error.json()); });
    };
    RouteComponent.prototype.getError = function (eM) {
        this.errorMessage = eM;
        this.isError = true;
    };
    RouteComponent.prototype.postRoute = function () {
        var _this = this;
        this.deliveryService.postRoute(this.routeModel).subscribe(function (data) { return _this.getAllRoutes(); }, function (error) { return _this.getError(error.json()); });
        this.initRouteModel();
    };
    RouteComponent.prototype.deleteRoute = function (id) {
        var _this = this;
        this.sureDelete = confirm("Are You Sure?");
        if (this.sureDelete) {
            this.deliveryService.deleteRoute(id).subscribe(function (data) { return _this.getAllRoutes(); });
        }
    };
    RouteComponent.prototype.putButton = function (rm) {
        this.edit = true;
        this.editedRoute = Object.assign({}, rm);
    };
    RouteComponent.prototype.putRoute = function () {
        var _this = this;
        this.edit = false;
        this.deliveryService.putRoute(this.editedRoute).subscribe(function (data) { return _this.getAllRoutes(); }, function (error) { return _this.getError(error.json()); });
    };
    RouteComponent.prototype.putCancel = function () {
        this.edit = false;
    };
    RouteComponent.prototype.searchVehicle = function () {
        var _this = this;
        this.isError = false;
        this.deliveryService.searchRoutes(this.searchBy, this.searchValue).subscribe(function (data) { return _this.routeList = data.json().listRouteVO; });
    };
    return RouteComponent;
}());
RouteComponent = __decorate([
    core_1.Component({
        selector: 'app-route',
        templateUrl: '/src/app/route/route.component.html',
        styleUrls: ['src/app/route/route.component.css']
    }),
    __metadata("design:paramtypes", [delivery_service_1.DeliveryService])
], RouteComponent);
exports.RouteComponent = RouteComponent;
var RouteModel = (function () {
    function RouteModel() {
    }
    return RouteModel;
}());
exports.RouteModel = RouteModel;
//# sourceMappingURL=route.component.js.map