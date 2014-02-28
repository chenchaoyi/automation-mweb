var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var browser;
var shelf = By.className('shelf-list');

exports = module.exports = ShelfList

function ShelfList(browser)
{
    this.browser = browser;
}

ShelfList.prototype.sortByTopRated = function ()
{
  var toprated = By.xpath('//label[contains(@for,"TOPRATED")]');
  this.browser.waitForElement(toprated);
  this.browser.click(toprated);
  this.browser.waitForElement(shelf);
};


ShelfList.prototype.sortByBestsellers = function ()
{
  var bestsellers = By.xpath('//label[contains(@for,"BESTSELLERS")]');
  this.browser.waitForElement(bestsellers);
  this.browser.click(bestsellers);
  this.browser.waitForElement(shelf);
};


ShelfList.prototype.sortByPrice = function ()
{
  var price = By.xpath('//label[contains(@for,"PRICE_LOHI")]');
  this.browser.waitForElement(price);
  this.browser.click(price);
  this.browser.waitForElement(shelf);
};

