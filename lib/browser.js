var webdriver = require('selenium-webdriver');
var By = webdriver.By;

    SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;


function Browser()
{
  // var server = new SeleniumServer('/Users/grober4/workspace/selenium-2.40.0/selenium-server-standalone-2.40.0.jar', {
  //   port: 4444
  // });

  // server.start();

  // console.log(server.address());
  // this.driver = new webdriver.Builder().
  //   usingServer(server.address()).
  //   withCapabilities(webdriver.Capabilities.firefox()).
  //   build();

    this.driver = new webdriver.Builder(). withCapabilities(webdriver.Capabilities.chrome()).build();
}

Browser.prototype.get = function (url)
{
  this.driver.get(url)
};

//wait for element to be present and visible 
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


//wait for element, then open a url. for native tests. 
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


Browser.prototype.isElementPresent = function (by)
{
    return this.driver.isElementPresent(by);
};


// get text, returns a promise 
Browser.prototype.getText = function(by)
{
   return this.driver.findElement(by).getText();
};


//get attribute, returns a promise 
Browser.prototype.getAttribute = function(by, attribute)
{
   return this.driver.findElement(by).getAttribute(attribute);
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


//returns a promise 
Browser.prototype.findElements = function (by)
{
   return this.driver.findElements(by);
};


//returns a webelement 
Browser.prototype.findElement = function (by)
{
   return this.driver.findElement(by);
};


exports = module.exports = Browser
