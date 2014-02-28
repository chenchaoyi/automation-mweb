var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var browser;

exports = module.exports = ReviewOrder

function ReviewOrder(browser)
{
    this.browser = browser;
}


ReviewOrder.prototype.onReviewOrderPage = function ()
{


};
