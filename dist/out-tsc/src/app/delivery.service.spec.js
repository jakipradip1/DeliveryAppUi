"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var delivery_service_1 = require("./delivery.service");
describe('DeliveryService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [delivery_service_1.DeliveryService]
        });
    });
    it('should be created', testing_1.inject([delivery_service_1.DeliveryService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=delivery.service.spec.js.map