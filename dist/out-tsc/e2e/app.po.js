"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var TestDeliveryAppPage = (function () {
    function TestDeliveryAppPage() {
    }
    TestDeliveryAppPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    TestDeliveryAppPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return TestDeliveryAppPage;
}());
exports.TestDeliveryAppPage = TestDeliveryAppPage;
//# sourceMappingURL=app.po.js.map