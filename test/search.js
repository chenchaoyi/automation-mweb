var assert = require('assert') ;
var test = require('selenium-webdriver/testing');
var mwp = require('../lib/pages/mwebpages');
var b = require('../lib/browser');
var browser, pages;

test.describe('search test', function() {

  beforeEach(function(){
    browser = new b();
    pages = new mwp(browser);

  });

  afterEach(function(){
    browser.close();
  });

  //Need to create Test for type ahead

  test.it('search by single keyword', function() {
    pages.Home().openHomePage();
    pages.Header().searchForKeyword('tvs');
    pages.ShelfList().sortByTopRated();
    pages.ShelfList().sortByBestsellers();
    pages.ShelfList().sortByPrice();
    pages.ShelfList().sortByPrice();
  });

  test.it('search by multi keyword', function() {
    pages.Home().openHomePage();
    pages.Header().searchForKeyword('laptops on sale');
    pages.ShelfList().sortByTopRated();
    pages.ShelfList().sortByBestsellers();
    pages.ShelfList().sortByPrice();
    pages.ShelfList().sortByPrice();
  });

  //Need to create Test for Filtering

});