var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var browser;

exports = module.exports = CreateAccount

function CreateAccount(browser)
{
    this.browser = browser;
}


CreateAccount.prototype.enterAccountInfo = function (userInfo)
{
   var accountCreate = By.css('.account-create');
   this.browser.waitForElement(accountCreate);

   var firstName = By.css('input[name="firstName"]');
   this.browser.sendText(firstName, userInfo.firstName);
   
   var lastName = By.css('input[name="lastName"]');
   this.browser.sendText(lastName, userInfo.lastName);
   
   var emailAddress = By.css('input[name="email"]')
   this.browser.sendText(emailAddress, userInfo.emailAddress);
   
   var zip = By.css('input[name="zipCode"]')
   this.browser.sendText(zip, userInfo.zip);
   
   var password = By.css('input[name="password"]')
   this.browser.sendText(password, userInfo.pass);

   var passwordConfirm = By.css('input[name="passwordConfirm"]')
   this.browser.sendText(passwordConfirm, userInfo.pass);

   var continueButton = By.css('.continue');
   this.browser.click(continueButton);
};
