 pragma solidity >=0.4.21 <0.7.0;

contract BookStore {

  address sender;
  string fullname;
  string discription;
  uint price;

function sellBook(string memory _fullname,string memory _discription, uint _price) public {
          sender = msg.sender;
          fullname = _fullname;
          discription = _discription;
          price = _price;
  }

function getBook() public view returns(
  address _sender,
  string memory _fullname,
  string memory _discription,
  uint _price
){
      return(sender, fullname, discription, price);
  }

}