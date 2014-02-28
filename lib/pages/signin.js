var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var browser;

exports = module.exports = SignIn

function SignIn(browser)
{
    this.browser = browser;
}

var guestCheckout = By.className('guest');

SignIn.prototype.clickContinueAsGuest = function ()
{
   this.browser.waitForElement(guestCheckout);
   this.browser.click(guestCheckout);
};

SignIn.prototype.login = function (emailAddress, accountPassword)
{
   var email = By.css('input[type="email"]');
   this.browser.waitForElement(email);
   this.browser.sendText(email, emailAddress);
   var password =  By.css('input[type="password"]');
   this.browser.sendText(password, accountPassword);
   var signInButton = By.css('button.signin.button.primary-button');
   this.browser.click(signInButton);
};


SignIn.prototype.clickContinueAsGuestNative = function ()
{
   var guestCheckout = By.css('.guest');
   this.browser.waitForElement(guestCheckout);
   this.browser.click(guestCheckout);
   var shipToHome = By.xpath('//*[text()="Ship to Home"]');
   this.browser.waitForElementThenOpenUrl(shipToHome, 'https://mobile.walmart.com/r/phoenix/iphone/index.html#checkout/shipping-options');

};


SignIn.prototype.createAccount = function ()
{
   var createAccount = By.css('.create-account-wrap');
   this.browser.waitForElement(createAccount);
   this.browser.click(createAccount);
};
