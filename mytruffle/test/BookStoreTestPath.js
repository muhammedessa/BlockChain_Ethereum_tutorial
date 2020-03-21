const BookStore = artifacts.require("./BookStore.sol");

contract('BookStore',function(accounts)  {
var bookStoreInstance;
var account1 = web3.eth.getAccounts().then(
    function (params) {
        account1 = params[0];
    }
 
);
var fullname = "Muhammed Essa Hameed";
var discription = "This is template";
var price = '0'; 

it("empty values",function () {
    return BookStore.deployed().then(function (instance) {
        return instance.getBook();
    }).then(function(params) {
        assert.equal(params[0],0x0,"empty sender");
        assert.equal(params[1],"","empty full name");
        assert.equal(params[2],"","empty discription");
        assert.equal(params[3].toNumber(),0,"zero price");
    }) 
}) ;

it("sell book on store",function () {
    return BookStore.deployed().then(function (instance) {
        bookStoreInstance = instance;
        return bookStoreInstance.sellBook(
          fullname, discription,  web3.utils.toWei(price, "ether"),{from:account1});
    
    }).then(function() {
        return bookStoreInstance.getBook();
    }) .then(function(params) {
        assert.equal(params[0],account1,"sender "+account1);
        assert.equal(params[1],fullname,"full name "+fullname);
        assert.equal(params[2],discription,"discription" + discription);
        assert.equal(params[3],web3.utils.toWei(price, "ether"), 
        "Price "+web3.utils.toWei(price, "ether"));
    }) ;
}) ;
}) ;


