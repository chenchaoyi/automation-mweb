var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var browser;

exports = module.exports = Browse

function Browse(browser)
{
    this.browser = browser;
}


Browse.prototype.clickDepartment = function (departmentName)
{

  var departmentList = By.css('.link-list');
  this.browser.waitForElement(By.linkText(departmentName))
  this.browser.click(By.linkText(departmentName));
}


Browse.prototype.waitForResults = function ()
{
  this.browser.waitForElement(By.css('.shelf-list'))
}
