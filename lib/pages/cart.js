var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var browser;

exports = module.exports = Cart

function Cart(browser)
{
    this.browser = browser;
}


Cart.prototype.checkout = function ()
{
   var checkoutButton = By.css('.checkout');	
   this.browser.waitForElement(checkoutButton);
   this.browser.click(checkoutButton);
};
