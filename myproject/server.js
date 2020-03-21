const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const Web3 = require('web3');
const truffle_connect = require('./connection/app.js');
const bodyParser = require('body-parser');
 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', express.static('public_static'));

app.get('/getAccounts', (req, res) => {
  console.log("**** GET /getAccounts ****");
  truffle_connect.start(function (answer) {
    res.send(answer);
  })
});

// get all accounts
app.get('/api/accounts', (req, res) => {
  console.log("**** GET /getAccounts ****");
  truffle_connect.start(function (answer) {
    console.log(answer);
    res.status(200).send({
      success: 'true',
      accounts:answer
    });
  })
});

// get one account
app.get('/api/accounts/:id', (req, res) => {
  console.log("**** GET /getAccounts ****");
  truffle_connect.start(function (answer) {
    console.log(answer[req.params.id]);
    res.status(200).send({
      success: 'true',
      accounts:answer[req.params.id]
    });
  })
});

 
// get account balance
app.get('/api/balance/:id', (req, res) => {
  console.log("**** GET /getAccounts ****");
 var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

  truffle_connect.start(function (answer) {
    console.log(answer[req.params.id]);
 var balance =    web3.eth.getBalance(answer[req.params.id])
    res.status(200).send({
      success: 'true',
      accounts:answer[req.params.id],
      balance:balance
    });
  })
});
 



// get account balance in ether
app.get('/api/balance/ether/:id', (req, res) => {
  console.log("**** GET /getAccounts ****");
 var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

  truffle_connect.start(function (answer) {
    console.log(answer[req.params.id]);
 var balance = web3.fromWei(web3.eth.getBalance(answer[req.params.id]),'ether');
    res.status(200).send({
      success: 'true',
      accounts:answer[req.params.id],
      balance:balance
    });
  })
});








// get transaction number
app.get('/api/get/transaction/number/:id', (req, res) => {
  console.log("**** GET /getAccounts ****");
 var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

  truffle_connect.start(function (answer) {
    console.log(answer[req.params.id]);
 var transactionCount = web3.eth.getTransactionCount(answer[req.params.id]) ;
    res.status(200).send({
      success: 'true',
      accounts:answer[req.params.id],
      NoOfTransaction:transactionCount
    });
  })
});



// get Tx Hash
app.get('/api/tx/hash/:id', (req, res) => {
  console.log("**** GET /getAccounts ****");
 var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
  
  truffle_connect.start(function (answer) {
    console.log(answer[req.params.id]);
 var txHash = web3.eth.getTransaction('0xcdaa1fba32ba51b051872c7ada67782d8a6ba0d13b22f255c8585860a5662fb2') ;
    res.status(200).send({
      success: 'true',
      accounts:answer[req.params.id],
      txHash:txHash
    });
  })
 
});






// get privatekey
app.get('/api/privatekey/:id', (req, res) => {
 
  var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

  truffle_connect.start(function (answer) {

    var accountPrivateKey = web3.eth.accounts.privateKeyToAccount(answer[req.params.id]) ;

     console.log(answer[req.params.id]);
     res.status(200).send({
      success: 'true',
      accountPrivateKey:accountPrivateKey, 
    });
  })
 
});




// get privatekey
app.get('/api/privatekeyonly/:id', (req, res) => {
 
  var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

  truffle_connect.start(function (answer) {

    var accountPrivateKey = web3.eth.accounts.privateKeyToAccount(answer[req.params.id]) ;

     console.log(answer[req.params.id]);
     res.status(200).send({
      success: 'true',
      accountPrivateKey:accountPrivateKey.privateKey, 
    });
  })
 
});








// get book info
app.get('/api/get/book', (req, res) => {   
  truffle_connect.getBook( (answer) => { 
      res.send(answer);
    }); 
});


//sell book
app.post('/api/sell/book/:id', (req, res) => { 
  console.log(req.body);
  var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

  let fullname = req.body.fullname;
  let discription = req.body.discription;
  let price = web3.utils.toWei(req.body.price, 'ether');
 
  truffle_connect.start(function (answer) {
    console.log(answer[req.params.id]); 
    truffle_connect.sellBook(answer[req.params.id] ,
      fullname,discription,price, (answer) => {
      res.send(answer);
    });
  })

  
});





 

app.post('/getBalance', (req, res) => {
  console.log("**** GET /getBalance ****");
  console.log(req.body);
  let currentAcount = req.body.account;

  truffle_connect.refreshBalance(currentAcount, (answer) => {
    let account_balance = answer;
    truffle_connect.start(function(answer){
      // get list of all accounts and send it along with the response
      let all_accounts = answer;
      response = [account_balance, all_accounts]
      res.send(response);
    });
  });
});

app.post('/sendCoin', (req, res) => {
  console.log("**** GET /sendCoin ****");
  console.log(req.body);

  let amount = req.body.amount;
  let sender = req.body.sender;
  let receiver = req.body.receiver;

  truffle_connect.sendCoin(amount, sender, receiver, (balance) => {
    res.send(balance);
  });
});

app.listen(port, () => {

  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  truffle_connect.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

  console.log("Express Listening at http://localhost:" + port);

});
