pragma solidity ^0.4.22 <0.7.0;
 
contract MuhammedEssa {

    uint number; //this is comment
     uint8 number2;
    int256 myNumber;
     int myNumber2;
    int8 myNum;
    
   bool playerStatus ;  //boolean
 
 //this function will get number from user
 
 
    functioni setNum(bool  num) public {
        playerStatus = num;
    }
    
 
    function getNum() public view returns (bool ){
        return playerStatus;
    }
}