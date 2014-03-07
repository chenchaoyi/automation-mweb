var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var browser;

exports = module.exports = Footer

function Footer(browser)
{
    this.browser = browser;
}


var footerSection = By.css('footer.footer');


Footer.prototype.clickCareers = function ()
{
    this.browser.waitForElement(footerSection);
    var careersLink = By.linkText('Careers');
    this.browser.click(careersLink);
}

Footer.prototype.clickFeedBack = function ()
{
    this.browser.waitForElement(footerSection);
    var feedbackLink = By.css('.feedback');
    this.browser.click(feedbackLink);
}

Footer.prototype.clickLegal = function () 
{
  this.browser.waitForElement(footerSection);
  var legalLink = By.linkText('Legal Terms');
  this.browser.click(legalLink);
}


Footer.prototype.getCopyright = function () 
{
  this.browser.waitForElement(footerSection);
  var copyrightDiv = By.css('div.copyright');
  return this.browser.getText(copyrightDiv);
}

