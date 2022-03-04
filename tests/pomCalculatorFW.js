let homepage = require('../pages/homepage');

describe('demo calculator test', function(){


    beforeEach(() => {                          // function()  ==    () =>
        homepage.launchWebsite();
      })

    it('Addition', function(){
        
        homepage.enterFirstNumber(2);
        //browser.sleep(1000);

        homepage.enterSecondNumber(3);
        //browser.sleep(1000);

        homepage.clickGo();
       // browser.sleep(1000);

        homepage.verifyResult('5');

        browser.sleep(5000);

    });

    afterEach(() => {                               // function()  ==    () =>
        console.log('The test looks fine')
      })

});