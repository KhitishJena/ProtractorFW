let homepage = function() {

    let input1 = element(by.model('first'));
    let input2 = element(by.model('second'));

    let go_button = element(by.css('[ng-click="doAddition()"]'));

    this.launchWebsite = function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.driver.manage().window().maximize();
    };

    this.enterFirstNumber = function(firstNumber){
        input1.sendKeys(firstNumber);
    };

    this.enterSecondNumber = function(secondNumber){
        input2.sendKeys(secondNumber);
    };

    this.clickGo = function(){
        go_button.click();
    };

    this.verifyResult = function(result){
        let resultDisplayed = element(by.className('ng-binding')).getText();
        expect(resultDisplayed).toEqual(result);  //Jasmine assertions

        //Jasmine takes care of Promise resolve.
    };
    
};

module.exports = new homepage();