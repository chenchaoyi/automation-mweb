var assert = require('assert') ;
var test = require('selenium-webdriver/testing');
var mwp = require('../lib/pages/mwebpages');
var b = require('../lib/browser');
var browser, pages;


test.describe('item details page', function() {

  beforeEach(function(){
    browser = new b();
    pages = new mwp(browser);
  });

  afterEach(function(){
    browser.close();
  });

  test.it('verify ratings section', function() {
    pages.Home().openHomePage();
    pages.Header().searchForItemId('5172339');
    pages.Item().ratingsSectionPresent().then(function(ratings){
      assert.equal(ratings, true);
    });
  });


  test.it('verify store section', function() {
    pages.Home().openHomePage();
    pages.Header().searchForItemId('5172339');
    pages.Item().storeNearYouSectionPresent().then(function(store){
      assert.equal(store, true);
    });
  });

  
  test.it('verify ultimately bought section', function() {
    pages.Home().openHomePage();
    pages.Header().searchForItemId('5172339');
    pages.Item().viewersBoughtPresent().then(function(bought){
      assert.equal(bought, true);
    });
  });


  test.it('verify header', function() {
    pages.Home().openHomePage();
    pages.Header().searchForItemId('5172339');
    pages.Item().headerPresent().then(function(header){
      assert.equal(header, true);
    });
  });

});

