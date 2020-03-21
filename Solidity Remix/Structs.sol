pragma solidity ^0.4.22 <0.7.0;

contract StructsContract{
     
   struct Person{
       string name ;
       string lname;
       uint age;
   }
   
   Person person;
     
      
  function setPerson() public  { 
        person = Person("Muhammed", "Essa" , 36);
    }
    
   function getPersonAge() public view returns (uint  ){ 
        return person.age ;
    }
     function getPersonName() public view returns (string  ){ 
        return person.name ;
    }

    
}