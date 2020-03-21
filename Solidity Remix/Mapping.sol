pragma solidity ^0.4.22 <0.7.0;

contract MappingContract{
     
   struct Person{
       string name ;
       uint age; 
   }
   
   mapping(address => Person) personStructs;
    address[] public personAddress;
     
      
  function setPerson(string name , uint age) public  { 
       personStructs[msg.sender].name = name;
       personStructs[msg.sender].age = age;
       personAddress.push(msg.sender);
    }
    
   function getAllPeople() public view returns (address[]  ){ 
        return personAddress ;
    } 
 
}