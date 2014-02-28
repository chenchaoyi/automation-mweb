var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var browser;

exports = module.exports = Payment

function Payment(browser)
{
    this.browser = browser;
}

Payment.prototype.clickContinue = function ()
{
   this.browser.waitForElement(By.css('.payment-choose'));
   this.browser.click(By.css('.continue'));
};


Payment.prototype.enterPickUpInfo = function (firstName, lastName)
{
   this.browser.waitForElement(By.css('.payment-choose'));
   this.browser.sendText(By.css('input[name="pickupFirstName"]'),firstName) ;
   this.browser.sendText(By.css('input[name="pickupLastName"]'), lastName) ;
};


Payment.prototype.enterCreditCardInfo = function (cardInfo)
{
   this.browser.waitForElement(By.css('.payment-choose'));

   var cardNumber = By.css('input[id="cardNumber"]');
   this.browser.sendText(cardNumber, cardInfo.number) ;

   var firstAndLastName = By.css('input[name="nameOnCard"]');
   this.browser.sendText(firstAndLastName, cardInfo.name);
   
   this.browser.click(By.css('select[name="expiryMonth"]>option[value="' + cardInfo.expiryMonth + '"]'));
   this.browser.click(By.css('select[name="expiryYear"]>option[value="' + cardInfo.expiryYear + '"]'));
};


Payment.prototype.enterGuestEmailAddressInfo = function (emailAddress)
{
   this.browser.sendText(By.css('input[type=\'email\']'), emailAddress);
};


Payment.prototype.enterAddressInfo = function (userAddress)
{
   this.browser.waitForElement(By.css(".payment-choose"));
   this.browser.sendText(By.css('input[name="address[street1]"]'), userAddress.street ) ;
   this.browser.sendText(By.css('input[name="address[street2]"]'), userAddress.street2);
   this.browser.sendText(By.css('input[name="address[city]"]'), userAddress.city);

   this.browser.sendText(By.css('input[type="tel"]'),userAddress.telephone);
   this.browser.click(By.css('select[name="address[state]"]>option[value="' + userAddress.state + '"]'));
   this.browser.sendText(By.css('input[placeholder="ZIP code"]'), userAddress.zip);

};
