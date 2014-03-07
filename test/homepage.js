var assert = require('assert') ;
var test = require('selenium-webdriver/testing');
var mwp = require('../lib/pages/mwebpages');
var b = require('../lib/browser');
var browser, pages;


test.describe('homepage', function() {

  beforeEach(function(){
    browser = new b();
    pages = new mwp(browser);
  });

  afterEach(function(){
    browser.close();
  });

  test.it('verify header', function() {
    pages.Home().openHomePage();
    pages.Header().clickStoreFinder();
    pages.Header().clickCart();
    pages.Header().clickShowSearch();
    pages.Header().searchForKeyword('nail polish');

  });

  test.it('verify footer', function() {
    pages.Home().openHomePage();
    pages.Footer().getCopyright().then(function(copyrightText){
      assert.equal(copyrightText, '© 2014 Wal-Mart Stores, Inc.');
    });
  });

});

