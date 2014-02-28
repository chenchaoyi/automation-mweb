var h = require('./home');
var i = require('./item');
var c = require('./cart');
var s = require('./signin');
var d = require('./deliverymethod');
var sa = require('./storeaddress');
var p = require('./payment');
var r = require('./revieworder');
var sa2 = require('./shippingaddress');
var ca = require('./createaccount');
var b = require('./browse');
var sl = require('./shelflist');


var webdriver = require('selenium-webdriver');
var By = webdriver.By;


var browser, item, cart, signin, deliverymethod, storeaddress, payment,
    revieworder, shippingaddress, variantitem, userInfo, shelflist;

function MWebPages(browser)
{
    this.browser = browser;
    this.home = new h(browser);
    this.item = new i(browser);
    this.cart = new c(browser);
    this.signin = new s(browser);
    this.deliverymethod = new d(browser);
    this.storeaddress = new sa(browser);
    this.payment = new p(browser);
    this.revieworder = new r(browser);
    this.shippingaddress = new sa2(browser);
    this.createaccount = new ca(browser);
    this.browse = new b(browser);
    this.shelflist = new sl(browser);
};

MWebPages.prototype.Home = function ()
{
    return this.home;
};


MWebPages.prototype.Item = function ()
{
    return this.item;
};


MWebPages.prototype.Cart = function ()
{
    return this.cart;
};


MWebPages.prototype.CreateAccount = function ()
{
    return this.createaccount;
};


MWebPages.prototype.SignIn = function ()
{
    return this.signin;
};


MWebPages.prototype.DeliveryMethod = function ()
{
    return this.deliverymethod;
};


MWebPages.prototype.StoreAddress = function ()
{
    return this.storeaddress;
};


MWebPages.prototype.ShippingAddress = function ()
{
    return this.shippingaddress;
};


MWebPages.prototype.Payment = function ()
{
    return this.payment;
};


MWebPages.prototype.ReviewOrder = function ()
{
    return this.revieworder;
};


MWebPages.prototype.Browse = function ()
{
    return this.browse;
};


MWebPages.prototype.ShelfList = function ()
{
    return this.shelflist;
};

exports = module.exports = MWebPages
