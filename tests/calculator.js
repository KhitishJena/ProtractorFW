describe('demo calc tests', function(){

    it('addition test', function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.driver.manage().window().maximize();
        

        let input1 = element(by.model('first'));
        input1.sendKeys('10');

        let input2 = element(by.model('second'));
        input2.sendKeys('15');

        element(by.css('[ng-click="doAddition()"]')).click();

        let resultDisplayed = element(by.className('ng-binding')).getText();
        expect(resultDisplayed).toEqual('25');  //Jasmine assertions

        //Jasmine takes care of Promise resolve.

        browser.sleep(10000);

    });
});