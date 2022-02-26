//Dynamic selection of values in Dropdwons

describe('Protractor Element Demo', function () {

    //Any Local functions are declared outside the it block to be called in future
    function Calc(a, b, c) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);

        element.all(by.tagName("option")).each(function (item) {
            item.getAttribute("value").then(function (values) {

                if (values == c) {
                    item.click();
                }
            })
        })

        element(by.id("gobutton")).click();
    }

    it('Locators', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(5000)

        Calc(3, 5, "MULTIPLICATION");
        Calc(3, 5, "MODULO");
        Calc(3, 5, "DIVISION");
        Calc(10, 6, "ADDITION");

        console.log('The text read are ^^^^^^^^^^^^^^^^^^^ :')
        element.all(by.repeater("result in memory")).each(function (item) {
            item.element(by.css("td:nth-child(3)")).getText().then(function (text) {
                console.log(text);
            })
        })
    })
})