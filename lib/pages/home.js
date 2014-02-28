var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var browser;
var goButton = By.css('.search-go');
var findStore = By.css('.find_store');
var yourOrders = By.css('.order_status');
var pharmacy = By.css('.photo');
var localAd = By.css('local_ad');


exports = module.exports = Home

function Home(browser)
{
    this.browser = browser;
}

var homePageUrl = 'http://mobile.walmart.com/';


Home.prototype.openHomePage = function ()
{
    this.browser.get(homePageUrl+'m/phoenix');
};


Home.prototype.searchForItemId = function (itemId)
{
    var searchButton = By.css('input[type="search"]');
    this.browser.waitForElement(searchButton);
//  this.browser.sendText(searchButton,itemId);
//  this.browser.click(goButton);
    this.browser.get(homePageUrl +'ip/'+ itemId)
}


Home.prototype.shopByDepartment = function ()
{
  var shopByDepartment = By.css('.shop_by_department');	
  this.browser.waitForElement(shopByDepartment);
  this.browser.click(shopByDepartment);
}


Home.prototype.clickRollbacks = function ()
{
  var rollbacks = By.css('.rollbacks');	
  this.browser.waitForElement(rollbacks);
  this.browser.click(rollbacks);
}

