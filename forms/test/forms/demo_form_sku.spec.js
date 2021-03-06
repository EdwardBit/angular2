"use strict";
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/core/testing');
var by_1 = require('@angular/platform-browser/src/dom/debug/by');
var demo_form_sku_1 = require('../../app/ts/forms/demo_form_sku');
var util_1 = require('../util');
testing_1.describe('DemoFormSku Component', function () {
    var originalConsole, fakeConsole;
    var el, input, form;
    beforeEach(function () {
        fakeConsole = new util_1.ConsoleSpy();
        originalConsole = window.console;
        window.console = fakeConsole;
    });
    afterAll(function () { return window.console = originalConsole; });
    function createComponent(tcb) {
        return tcb.createAsync(demo_form_sku_1.DemoFormSku)
            .then(function (fixture) {
            el = fixture.debugElement.nativeElement;
            input = fixture.debugElement.query(by_1.By.css('input')).nativeElement;
            form = fixture.debugElement.query(by_1.By.css('form')).nativeElement;
            fixture.detectChanges();
            return fixture;
        });
    }
    testing_1.it('logs the submitted value', testing_1.inject([testing_2.TestComponentBuilder], testing_1.fakeAsync(function (tcb) {
        createComponent(tcb).then(function (fixture) {
            input.value = 'MY-SKU';
            util_1.dispatchEvent(input, 'input');
            fixture.detectChanges();
            testing_1.tick();
            fixture.detectChanges();
            util_1.dispatchEvent(form, 'submit');
            testing_1.tick();
            testing_1.expect(fakeConsole.logs).toContain('you submitted value: [object Object]');
        });
    })));
});
