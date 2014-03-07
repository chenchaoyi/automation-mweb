var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var browser;

exports = module.exports = Header

function Header(browser)
{
    this.browser = browser;
}

var homePageUrl = 'http://mobile.walmart.com/';


Header.prototype.searchForItemId = function (itemId)
{
    var searchButton = By.css('input[type="search"]');
    this.browser.waitForElement(searchButton);
//  this.browser.sendText(searchButton,itemId);
//  this.browser.click(goButton);
    this.browser.get(homePageUrl +'ip/'+ itemId)
}


Header.prototype.searchForKeyword = function (searchKeyword)
{
    var searchButton = By.css('input[type="search"]');
    this.browser.waitForElement(searchButton);
    this.browser.sendText(searchButton,searchKeyword);
    var goButton = By.css('.search-go');
    this.browser.click(goButton);
}


Header.prototype.clickStoreFinder = function ()
{
  var storeFinder = By.css('.store-locator');

  this.browser.waitForElement(storeFinder);
  this.browser.click(storeFinder);

  var storeList = By.css('.location-list');
  this.browser.waitForElement(storeList);
}


Header.prototype.clickShowSearch = function () 
{
  var showSearch = By.css('.show-search');

  this.browser.waitForElement(showSearch);
  this.browser.click(showSearch);
}


Header.prototype.clickCart = function () 
{
  var showCart = By.css('.show-cart');
  this.browser.waitForElement(showCart);
  this.browser.click(showCart);

  var cart = By.css('.cart-cart-section');
  this.browser.waitForElement(cart);
}
