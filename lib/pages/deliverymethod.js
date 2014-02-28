var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var browser;

exports = module.exports = DeliveryMethod

function DeliveryMethod(browser)
{
    this.browser = browser;
}


DeliveryMethod.prototype.selectShipToStore = function ()
{
   var shipToStore = By.xpath('//*[text()="Store Pickup*"]');
   this.browser.waitForElement(shipToStore) ;
   this.browser.click(shipToStore);
   this.browser.click(continueButton);
};


var continueButton = By.css('.continue');

DeliveryMethod.prototype.selectShipToHome = function ()
{
	var shipToHome = By.xpath('//*[text()="Ship to Home"]');
  this.browser.waitForElement(shipToHome) ;
  this.browser.click(shipToHome);
  this.browser.click(continueButton);
};


DeliveryMethod.prototype.clickContinue = function ()
{
  this.browser.waitForElement(continueButton) ;
  this.browser.click(continueButton);
};
