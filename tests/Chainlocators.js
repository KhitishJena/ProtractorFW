describe('chain locaters test suite', function () {

    it('Add chain locaters test', function () {

        browser.get('http://juliemr.github.io/protractor-demo/')
        browser.driver.manage().window().maximize()

        //chain locators, Repeaters and CSS for identical tags

        let input1 = element(by.model('first'))
        input1.sendKeys('10')

        let input2 = element(by.model('second'))
        input2.sendKeys('15')

        element(by.css('[ng-click="doAddition()"]')).click()

        element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function (text) {
            console.log('The text ADD read is +++++++++++++++++++ : ' + text)

        })

        browser.sleep(5000)
    })

    it('Subtract Chain locators test', function () {
        let input1 = element(by.model('first'))
        input1.sendKeys('20')

        //chaining of locaters
        element(by.model('operator')).element(by.css('option:nth-child(5)')).click()

        let input2 = element(by.model('second'))
        input2.sendKeys('15')

        element(by.css('[ng-click="doAddition()"]')).click()

        element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function (text) {
            console.log('The text read for Subtraction is ------------ : ' + text)

        })

        browser.sleep(5000)
    })
})