var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var browser;

exports = module.exports = Item

function Item(browser)
{
    this.browser = browser;
}

var addToCartButton = By.css('button.add-to-cart');


Item.prototype.addToCart = function ()
{
   this.browser.waitForElement(addToCartButton);
   this.browser.click(addToCartButton);
};


Item.prototype.customizeEGiftCardAndAddToCart = function (card)
{

   var customizeGiftCardButton = By.css('button.gift-card');
   this.browser.waitForElement(customizeGiftCardButton);
   this.browser.click(customizeGiftCardButton);

   var giftCardAmount = By.css('input[name="cardAmount"]');
   this.browser.waitForElement(giftCardAmount);
   this.browser.sendText(giftCardAmount, card.amount );

   var giftCardRecipientName = By.css('input[name="recipName"]');
   this.browser.sendText(giftCardRecipientName, card.recipName);

   var giftCardRecipientEmail= By.css('input[name="recipEmail"]');
   this.browser.sendText(giftCardRecipientEmail, card.recipEmail);

   var giftCardRecipientConfirmEmail= By.css('input[name="recipEmailConfirm"]');
   this.browser.sendText(giftCardRecipientConfirmEmail, card.recipEmail);

   var giftCardSenderName = By.css('input[name="senderName"]');
   this.browser.sendText(giftCardSenderName, card.senderName );

   var giftCardMessage= By.css('textarea[name="message"]');
   this.browser.sendText(giftCardMessage, card.message );

   var giftCardReview = By.css('button.primary-button');
   this.browser.click(giftCardReview);

   var giftCardAddToCartButton = By.css('.gift-card-add');
   this.browser.waitForElement(giftCardAddToCartButton);
   this.browser.click(giftCardAddToCartButton);
};


var itemHeader = By.css('div.item-item-header');


Item.prototype.viewersBoughtPresent = function () 
{
   this.browser.waitForElement(itemHeader);
   var richRelevance = By.css('div.rich-relevance');
   return this.browser.isElementPresent(richRelevance);
}


Item.prototype.storeNearYouSectionPresent = function () 
{
   this.browser.waitForElement(itemHeader);
   var storeDiv = By.css('div.put-action-section');
   return this.browser.isElementPresent(storeDiv);
}


Item.prototype.headerPresent = function () 
{
   this.browser.waitForElement(itemHeader);
   var headerDiv = By.css('div.header');
   return this.browser.isElementPresent(headerDiv);
}


Item.prototype.ratingsSectionPresent = function () 
{
   this.browser.waitForElement(itemHeader);
   var ratingsPreviewDiv = By.css('div.rating-preview');
   return this.browser.isElementPresent(ratingsPreviewDiv);
}


Item.prototype.selectVariants = function ()
{
   this.browser.waitForElement(addToCartButton);
   this.browser.click(By.xpath('//*[@id="variant-1"]/option[2]'));
   this.browser.click(By.xpath('//div[@class="variants"]/div[@data-value="Ash"]'));
};
