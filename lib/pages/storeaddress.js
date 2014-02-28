var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var browser;

exports = module.exports = StoreAddress


function StoreAddress(browser)
{
    this.browser = browser;
}

StoreAddress.prototype.selectStore = function ()
{
    var locationFlags = By.css('.location-flags');
    this.browser.waitForElement(locationFlags);
    this.browser.click(locationFlags);
};
