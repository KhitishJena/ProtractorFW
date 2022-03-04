describe('Shop test case', function () {

    //take all elements into list and traverse through the list by each promise
    function addItems(productName) {
        element.all(by.tagName('app-card')).each(function (item) {

            item.element(by.css('h4 a')).getText().then(function (text) {
                if (text == productName) {
                    item.element(by.buttonText('Add')).click()
                    console.log('added item ^^^^^^^^^^^ ' + productName)
                }
            })
        })
    }

    function checkNoOfItemsOnCheckoutTab(number) {
        element(by.partialLinkText('Checkout')).getText().then(function (text) {
            console.log(text)
            let x = text.split('(')
            let itemCountOnScreen = Number(x[1].trim().charAt(0));
            console.log(itemCountOnScreen)
            expect(itemCountOnScreen).toEqual(number)
            element(by.css('li[class*="item active"]')).click()
        })
    }

    function getItemsList() {
        let firstArray = new Array()
        let secondArray = new Array()
        let sum = 0
        element.all(by.css('tbody tr')).count().then(function (count) {

            console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^' + count)
            // for (j = 1; j <= count - 2; j++) 

            //console.log('^^^^^^^^^INSIDE FOR^^^^^^^^^^^^^^^^^^' + j)
            element.all(by.css('tbody tr')).each(function (item) {
                item.element(by.css('td:nth-child(4)')).getText().then(function (text) {
                    console.log(text)

                    let x = text.split(' ')
                    let y = Number(x[1])
                    console.log(y)
                    firstArray.push(y)
                    console.log(firstArray)

                    console.log('*****************')
                    console.log('The array length is ' + firstArray.length)
                    console.log('^^^^^^^^^^^^^^^^^^')

                    secondArray = firstArray.slice(0, firstArray.length - 2)
                    console.log('$$$$$$$$$$$$$$$$$')
                    //secondArray = firstArray.slice(4)
                    console.log(secondArray)
                })
            })
        })
    }

    function clickFinalCheckout(){

        let p = new getItemsList()
        console.log('Inside the click final checkout '+p.secondArray)
    }



    it('Shop test case', function () {

        browser.get('https://rahulshettyacademy.com/angularpractice/')
        browser.driver.manage().window().maximize()

        element(by.linkText('Shop')).click()

        addItems('Samsung Note 8')
        addItems('iphone X')
        addItems('Nokia Edge')

        checkNoOfItemsOnCheckoutTab(3)

        getItemsList()
        clickFinalCheckout()
    })
})