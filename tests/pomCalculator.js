let homepage = require('../pages/homepage');

describe('demo calculator test', function(){

    it('Addition', function(){
        homepage.launchWebsite('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber(2);
        browser.sleep(1000);

        homepage.enterSecondNumber(3);
        browser.sleep(1000);

        homepage.clickGo();
        browser.sleep(1000);

        homepage.verifyResult('5');

        browser.sleep(10000);

    });

});