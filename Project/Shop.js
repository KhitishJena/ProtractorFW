//const { doesNotMatch } = require("assert")

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

    function checkNoOfItemsOnCheckoutTab(number){
        element(by.partialLinkText('Checkout')).getText().then(function (text) {
            console.log(text)
            let x = text.split('(')
            let itemCountOnScreen = Number(x[1].trim().charAt(0));
            console.log(itemCountOnScreen)
            expect(itemCountOnScreen).toEqual(number)
            element(by.css('li[class*="item active"]')).click()
        })
    }

    function finalCheckout(){
        let firstArray = new Array()
        let secondArray = new Array()
        element.all(by.css('tbody tr')).each(function(item) {
            
            item.element(by.css('td:nth-child(4)')).getText().then(function (text) {
                console.log(text)
                console.log('*****************')
                
                firstArray.push(text)
                
                console.log(firstArray) 
            for(i=0;i<firstArray.length-2;i++){

                let x = firstArray[i].split(' ')
                console.log(x[1])
                let y = Number(x[1])
                console.log(y) 
                secondArray.push(y)                     
            }  
            console.log(secondArray)
            }) 
            

    })
    } 

    it('Shop test case', function () {

        browser.get('https://rahulshettyacademy.com/angularpractice/')
        browser.driver.manage().window().maximize()

        element(by.linkText('Shop')).click()

        addItems('Samsung Note 8')
        addItems('iphone X')

        checkNoOfItemsOnCheckoutTab(2)

        finalCheckout()
})
})