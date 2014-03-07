var assert = require('assert') ;
var test = require('selenium-webdriver/testing');
var mwp = require('../lib/pages/mwebpages');
var b = require('../lib/browser');
var browser, pages;

test.describe('browse test', function() {

  beforeEach(function(){
    browser = new b();
    pages = new mwp(browser);

  });

  afterEach(function(){
    browser.close();
  });

  test.it('browse by department and sort', function() {
    pages.Home().openHomePage();
    pages.Home().shopByDepartment();
    pages.Browse().clickDepartment('Baby');

    pages.Browse().clickDepartment('Cribs');
    pages.ShelfList().getCrumb().then(function(selectedText){
      assert.equal(selectedText, 'Cribs');
    });

    pages.ShelfList().sortByTopRated();
    pages.ShelfList().isSortedByTopRated().then(function(selectedText){
      assert.equal(selectedText, 'true');
    });
    pages.ShelfList().sortByBestsellers();
    pages.ShelfList().isSortedByTopRated().then(function(selectedText){
      assert.notEqual(selectedText, 'true');
    });
    pages.ShelfList().isSortedByBestsellers().then(function(selectedText){
      assert.equal(selectedText, 'true');
    });
    pages.ShelfList().sortByPrice();
    pages.ShelfList().sortByPrice();
  });


 test.it('browse by department and filter', function() {
    pages.Home().openHomePage();
    pages.Home().shopByDepartment();
    pages.Browse().clickDepartment('Baby');

    pages.Browse().clickDepartment('Cribs');
    pages.ShelfList().getCrumb().then(function(selectedText){
      assert.equal(selectedText, 'Cribs');
    });

    pages.ShelfList().applyFilter('Shop by Finish', 'Black');
    pages.ShelfList().filtered().then(function(filtered){
      assert.equal(filtered, true);
    });
  });


  test.it('browse rollbacks', function() {
    pages.Home().openHomePage();
    pages.Home().clickRollbacks();
    pages.Browse().clickDepartment('Apparel');
    pages.ShelfList().sortByTopRated();
    pages.ShelfList().sortByBestsellers();
    pages.ShelfList().sortByPrice();
    pages.ShelfList().sortByPrice();
  });

});

