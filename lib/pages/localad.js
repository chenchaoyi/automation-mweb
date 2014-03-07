var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var browser;

exports = module.exports = LocalAd

function LocalAd(browser)
{
    this.browser = browser;
}

var localAdPromotions = By.css('.local-ad-promotions');	


LocalAd.prototype.changeStore = function ()
{
	var selectStoreButton = By.css('.select-store');
	this.browser.waitForElement(localAdPromotions);
   	this.browser.click(selectStoreButton);
   	this.browser.waitForElement(By.css('ul.stores'));
};

LocalAd.prototype.clickViewAllItems = function () 
{
	var viewAllLink = By.css('a.view-all');
	this.browser.waitForElement(viewAllLink);
   	this.browser.click(viewAllLink);
}


var categoryList  = By.css('div[data-view-name="taxonomy"]');


LocalAd.prototype.clickCategory = function () 
{
	this.browser.waitForElement(categoryList);
	var viewAllLink = By.css('a.view-all');
   	this.browser.click(viewAllLink);
}

LocalAd.prototype.pricingInfoPresent = function () 
{
	this.browser.waitForElement(categoryList);	
	var localAdPricing = By.css('.local-ad-pricing');
	return this.browser.isElementPresent(localAdPricing);
}

LocalAd.prototype.getPricingInfo = function () 
{
	this.browser.waitForElement(categoryList);	
	var localAdPricing = By.css('.local-ad-pricing');
	return this.browser.getText(localAdPricing);
}