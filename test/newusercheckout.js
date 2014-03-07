var assert = require('assert') ;
var test = require('selenium-webdriver/testing');
var mwp = require('../lib/pages/mwebpages');
var b = require('../lib/browser');
var browser, pages;


test.describe('new user checkout', function() {

  beforeEach(function(){
    browser = new b();
    pages = new mwp(browser);
    userInfo = {firstName: 'Mobile', lastName: 'QA',
      emailAddress:('mobileqa' + (new Date()).getTime()+ '@automation.com'),
      zip:'94066', pass:'mobile123'};

    userAddress = {street :'850 Cherry ave', street2: 'Ste 300', city: 'San Bruno',
      telephone: '650-553-1298', state:'CA', zip: '94066'}

    cardInfo = {number :'4387752222222227', expiryMonth: '9', expiryYear: '2020',
                        name: 'Mobile QA'}
  });

  afterEach(function(){
    browser.close();
  });

  test.it('ship regular item to store', function() {
    pages.Home().openHomePage();
    pages.Header().searchForItemId('5172339');
    pages.Item().addToCart();
    pages.Cart().checkout();
    pages.SignIn().createAccount();
    pages.CreateAccount().enterAccountInfo(userInfo);
    pages.DeliveryMethod().selectShipToStore();
    pages.StoreAddress().selectStore();
    pages.Payment().enterCreditCardInfo(cardInfo);
    pages.Payment().enterAddressInfo(userAddress);
    pages.Payment().clickContinue();
  });


  test.it('ship regular item to home', function() {
    pages.Home().openHomePage();
    pages.Header().searchForItemId('5172339');
    pages.Item().addToCart();
    pages.Cart().checkout();
    pages.SignIn().createAccount();
    pages.CreateAccount().enterAccountInfo(userInfo);
    pages.DeliveryMethod().selectShipToHome();
    pages.ShippingAddress().enterAddress(userAddress);
    pages.Payment().enterCreditCardInfo(cardInfo);
    pages.Payment().clickContinue();
  });


  test.it('ship variant item to home', function() {

    pages.Home().openHomePage();
    pages.Header().searchForItemId('24796478');
    //pages.Item().selectVariants();
    pages.Item().addToCart();
    pages.Cart().checkout();
    pages.SignIn().createAccount();
    pages.CreateAccount().enterAccountInfo(userInfo);
    pages.DeliveryMethod().selectShipToHome();
    pages.ShippingAddress().enterAddress(userAddress);
    pages.Payment().enterCreditCardInfo(cardInfo);
    pages.Payment().clickContinue()
  });
  

});

