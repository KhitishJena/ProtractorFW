describe('Real time website Practice', function () {

    it('Real time website practice', function () {

        browser.get('https://rahulshettyacademy.com/angularpractice/')
        browser.driver.manage().window().maximize()

        element(by.name('name')).sendKeys('Satish')

        element(by.css('input[name="email"]')).sendKeys('satish@gmail.com')

        element(by.css('input[id*="Password"]')).sendKeys('!Lulu123')

        let icecream_Box = element(by.css('input[id*="Check1"]'))
        expect(icecream_Box.isSelected()).toBe(false);              //checks whether the checkbox is selected
        icecream_Box.click();                                       //or not, if no then select

        let gender = element(by.cssContainingText('select[id="exampleFormControlSelect1"] option', 'Female'))
        gender.getText().then(function (genderText) {
            console.log(genderText)
            expect(genderText).toMatch('Female')                    //check the gender text  from drop down
            gender.click()                                        //and select
        })

        element.all(by.css('input[name="inlineRadioOptions"]')).get(1).click()

        element(by.name('bday')).sendKeys('17-07-1990')

        element.all(by.css('div[class*="alert-danger"]')).count().then(function (errorCount) {
            console.log(errorCount)
            expect(errorCount).toEqual(0)

            if (errorCount == 0)
                element(by.css('input[value="Submit"]')).click().then(function () {

                    let successMessage = element(by.css('div[class*="alert-success"]'))
                    successMessage.getText().then(function (successText) {
                        expect(successText).toContain('Success! The Form has been submitted successfully!.')
                        console.log(successText)
                    })
                })
        })
    })
})