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
var http_1 = require("@angular/http");
var DeliveryService = (function () {
    function DeliveryService(http) {
        this.http = http;
        this.vehicleURL = "http://localhost:2222/vehicle-app/vehicle";
        this.routeURL = "http://localhost:2222/vehicle-app/route";
    }
    DeliveryService.prototype.getAllVehicles = function () {
        return this.http.get(this.vehicleURL);
    };
    DeliveryService.prototype.postVehicles = function (vehicleModel) {
        return this.http.post(this.vehicleURL, vehicleModel);
    };
    DeliveryService.prototype.deleteVehicle = function (id) {
        return this.http.delete(this.vehicleURL + "/" + id);
    };
    DeliveryService.prototype.putVehicles = function (vehicleModel) {
        return this.http.put(this.vehicleURL, vehicleModel);
    };
    DeliveryService.prototype.searchVehicle = function (searchBy, searchValue) {
        return this.http.get(this.vehicleURL + "/" + searchBy + "?" + searchBy + "=" + searchValue);
    };
    DeliveryService.prototype.getAllRoutes = function () {
        return this.http.get(this.routeURL);
    };
    DeliveryService.prototype.postRoute = function (routeModel) {
        return this.http.post(this.routeURL, routeModel);
    };
    DeliveryService.prototype.deleteRoute = function (id) {
        return this.http.delete(this.routeURL + "/" + id);
    };
    DeliveryService.prototype.putRoute = function (routeModel) {
        return this.http.put(this.routeURL, routeModel);
    };
    DeliveryService.prototype.searchRoutes = function (searchBy, searchValue) {
        return this.http.get(this.routeURL + "/" + searchBy + "?" + searchBy + "=" + searchValue);
    };
    return DeliveryService;
}());
DeliveryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DeliveryService);
exports.DeliveryService = DeliveryService;
//# sourceMappingURL=delivery.service.js.map