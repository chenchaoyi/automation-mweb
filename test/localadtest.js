var assert = require('assert') ;
var test = require('selenium-webdriver/testing');
var mwp = require('../lib/pages/mwebpages');
var b = require('../lib/browser');
var browser, pages;


test.describe('local ad tests', function() {

  beforeEach(function(){
    browser = new b();
    pages = new mwp(browser);
  });

  afterEach(function(){
    browser.close();
  });

  test.it('local ad change store', function() {
    pages.Home().openHomePage();
    pages.Home().clickLocalAd();
    pages.LocalAd().changeStore();
  });


  test.it('local ad view all items', function() {
    pages.Home().openHomePage();
    pages.Home().clickLocalAd();
    pages.LocalAd().clickViewAllItems();
    pages.LocalAd().pricingInfoPresent().then(function(info){
      assert.equal(info, true);
    });
    pages.LocalAd().getPricingInfo().then(function(info){
      assert.equal(info.indexOf('Prices effective') !== -1, true, 'missing Prices effective');
    });

  });

});
