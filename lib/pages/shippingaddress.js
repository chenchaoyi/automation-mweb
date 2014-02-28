var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var browser;

exports = module.exports = ShippingAddress

var shipToHome = By.xpath('//div[contains(@data-view-name,"ship-to-home")]');


var continueButton = By.className('continue');

function ShippingAddress(browser)
{
    this.browser = browser;
}

ShippingAddress.prototype.enterName = function (userFirstName, userLastName)
{
   this.browser.waitForElement(shipToHome);

   var firstName = By.css('input[name="firstName"]');
   this.browser.sendText(firstName, userFirstName);

   var lastName = By.css('input[name="lastName"]');
   this.browser.sendText(lastName, userLastName);
};


ShippingAddress.prototype.enterAddress = function (userAddress )
{
   this.browser.waitForElement(shipToHome);

   var address = By.css('input[type="text"][placeholder="Address"]');
   this.browser.sendText(address, userAddress.street ) ;

   var address2 = By.css('input[type="text"][placeholder="Address line 2 (optional)"]');
   this.browser.sendText(address2, userAddress.street2);

   var city = By.css('input[type="text"][placeholder="City"]');
   this.browser.sendText(city, userAddress.city);

   var telephone = By.css('input[type="tel"]');
   this.browser.sendText(telephone, userAddress.telephone);

   var zip = By.css('input[placeholder="ZIP code"]');
   this.browser.sendText(zip, userAddress.zip);

   this.browser.click(By.css('select[name="address[state]"]>option[value="' + userAddress.state + '"]'));
   this.browser.click(continueButton);
};
