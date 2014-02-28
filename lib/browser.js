var webdriver = require('selenium-webdriver');
var By = webdriver.By;


function Browser()
{
    this.driver = new webdriver.Builder(). withCapabilities(webdriver.Capabilities.chrome()).build();
}

Browser.prototype.get = function (url)
{
  this.driver.get(url)
};


Browser.prototype.waitForElement = function (by)
{
   self = this;

   this.driver.wait(function () {
          return self.driver.isElementPresent(by);
   }, 80000)
   .then(function (){
      self.driver.wait(function () {
          return self.driver.findElement(by).isDisplayed();
     }, 80000)
    })

};


Browser.prototype.waitForElementThenOpenUrl = function(by, url )
{
   self = this;

   this.driver.wait(function () {
          return self.driver.isElementPresent(by);
   }, 80000)
   .then(function (){
      self.driver.wait(function () {
          return self.driver.findElement(by).isDisplayed();
     }, 80000)
    })
   .then(function (){
      self.driver.get(url);
   });
};


Browser.prototype.sendText = function (by, text)
{
   this.driver.findElement(by).sendKeys(text);
};


Browser.prototype.click = function (by)
{
   this.driver.findElement(by).click();
};


Browser.prototype.close = function (by)
{
   this.driver.close();
   this.driver.quit();
};


Browser.prototype.findElements = function (by)
{
   return this.driver.findElements(by);
};


Browser.prototype.findElement = function (by)
{
   return this.driver.findElements(by);
};


exports = module.exports = Browser
