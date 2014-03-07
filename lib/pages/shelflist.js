var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var browser;
var shelf = By.className('shelf-list');

exports = module.exports = ShelfList

function ShelfList(browser)
{
    this.browser = browser;
}

var filterButton = By.css('.filter-button');


ShelfList.prototype.applyFilter = function (filter, option) 
{
  this.browser.waitForElement(filterButton);
  this.browser.click(filterButton);

  var category = By.xpath('//button[normalize-space(text())="'+ filter +'"]');
  this.browser.waitForElement(category);
  this.browser.click(category);
  
  var refinement = By.xpath('//div[normalize-space(text())="' +option +'"]');
  this.browser.click(refinement);

  var apply = By.css('.apply');
  this.browser.waitForElement(apply);

  this.browser.click(apply);

}


ShelfList.prototype.getCrumb = function ()
{
  this.browser.waitForElement(By.css('.crumb'));
  return this.browser.getText(By.css('.crumb'));
}

var toprated = By.xpath('//label[contains(@for,"TOPRATED")]');


ShelfList.prototype.sortByTopRated = function ()
{
  this.browser.waitForElement(toprated);
  this.browser.click(toprated);
  this.browser.waitForElement(shelf);
};


ShelfList.prototype.filtered = function ()
{
  this.browser.waitForElement(shelf);
  this.browser.waitForElement(filterButton);
  return this.browser.isElementPresent(By.css('button.filtered'))
};


ShelfList.prototype.isSortedByTopRated = function ()
{
  this.browser.waitForElement(toprated);
  var topratedInput = By.css('input[value="TOPRATED"]');
  return this.browser.getAttribute(topratedInput, 'checked');
};


ShelfList.prototype.sortByBestsellers = function ()
{
  var bestsellers = By.xpath('//label[contains(@for,"BESTSELLERS")]');
  this.browser.waitForElement(bestsellers);
  this.browser.click(bestsellers);
  this.browser.waitForElement(shelf);
};


ShelfList.prototype.isSortedByBestsellers = function ()
{
  this.browser.waitForElement(toprated);
  var bestsellersdInput = By.css('input[value="BESTSELLERS"]');
  return this.browser.getAttribute(bestsellersdInput, 'checked');
};


ShelfList.prototype.sortByPrice = function ()
{
  var price = By.xpath('//label[contains(@for,"PRICE_LOHI")]');
  this.browser.waitForElement(price);
  this.browser.click(price);
  this.browser.waitForElement(shelf);
};

