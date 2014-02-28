var assert = require('assert') ;
var test = require('selenium-webdriver/testing');
var mwp = require('../lib/pages/mwebpages');
var b = require('../lib/browser');
var browser, pages;


test.describe('existing user checkout', function() {

  beforeEach(function(){
    browser = new b();
    pages = new mwp(browser);
  });

  afterEach(function(){
    browser.close();
  });

  test.it('ship regular item to store', function() {
    pages.Home().openHomePage();
    pages.Home().searchForItemId('5172339');
    pages.Item().addToCart();
    pages.Cart().checkout();
    pages.SignIn().login('walmartmobile+20140224_142707@walmart.com', 'mobile123');
    pages.DeliveryMethod().selectShipToStore();
    pages.StoreAddress().selectStore();
  });

  test.it('buy e gift card', function() {
  	giftCardInfo = {amount: '10.00', recipEmail: 'fake@email.com', recipName: 'John Doe',
  						senderName: 'Jane Doe',
                        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac dignissim tortor, ut mollis nibh. Aliquam vitae ornare risus. Nam hendrerit nisi id luctus vehicula. Duis eu diam arcu. Fusce metus.'}

    pages.Home().openHomePage();
    pages.Home().searchForItemId('3223392');
    pages.Item().customizeEGiftCardAndAddToCart(giftCardInfo);
    pages.Cart().checkout();
    pages.SignIn().login('walmartmobile+20140224_142707@walmart.com', 'mobile123');
    pages.DeliveryMethod().clickContinue();
  });

});

