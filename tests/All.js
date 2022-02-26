let homepage = require('../pages/homepage');

describe('Locators All concepts', function () {
    homepage.launchWebsite('http://juliemr.github.io/protractor-demo/');
    browser.sleep(5000)

    function Add(a,b){
        var input1 = element(by.model('first'))
        input1.sendKeys(a)

        //chaining of locaters
        element(by.model('operator')).element(by.css('option:nth-child(1)')).click()

        let input2 = element(by.model('second'))
        input2.sendKeys(b)

        element(by.css('[ng-click="doAddition()"]')).click()

        browser.sleep(5000)

    }

    function Multiply(a,b){
        var input1 = element(by.model('first'))
        input1.sendKeys(a)

        //chaining of locaters
        element(by.model('operator')).element(by.css('option:nth-child(4)')).click()

        let input2 = element(by.model('second'))
        input2.sendKeys(b)

        element(by.css('[ng-click="doAddition()"]')).click()

        browser.sleep(5000)

    }

    function Subtract(a,b){
        var input1 = element(by.model('first'))
        input1.sendKeys(a)

        //chaining of locaters
        element(by.model('operator')).element(by.css('option:nth-child(5)')).click()

        let input2 = element(by.model('second'))
        input2.sendKeys(b)

        element(by.css('[ng-click="doAddition()"]')).click()

        browser.sleep(5000)
    }
/*
    it('Add test case', function () {

        var input1 = element(by.model('first'))
        input1.sendKeys('20')

        //chaining of locaters
        element(by.model('operator')).element(by.css('option:nth-child(1)')).click()

        let input2 = element(by.model('second'))
        input2.sendKeys('15')

        element(by.css('[ng-click="doAddition()"]')).click()

        browser.sleep(5000)

    })

    it('Multiply test case', function () {

        var input1 = element(by.model('first'))
        input1.sendKeys('20')

        //chaining of locaters
        element(by.model('operator')).element(by.css('option:nth-child(4)')).click()

        let input2 = element(by.model('second'))
        input2.sendKeys('15')

        element(by.css('[ng-click="doAddition()"]')).click()

        browser.sleep(5000)

    })

    it('Subtract test case', function () {

        var input1 = element(by.model('first'))
        input1.sendKeys('20')

        //chaining of locaters
        element(by.model('operator')).element(by.css('option:nth-child(5)')).click()

        let input2 = element(by.model('second'))
        input2.sendKeys('15')

        element(by.css('[ng-click="doAddition()"]')).click()

        browser.sleep(5000)

    })
    */

    it('Reading the text', function(){

        Add(20,15)
        Multiply(20,20)
        Subtract(30,12)

        //All locators
        //Each is for resolving the promise in protracter for deriving the data
        console.log('The text read are ------------ :')
        element.all(by.repeater('result in memory')).each(function (item) {
            item.element(by.css('td:nth-child(3)')).getText().then(function (text) {
                console.log( text)
            })
        })

    })

})