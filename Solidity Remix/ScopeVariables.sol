pragma solidity ^0.4.22 <0.7.0;

contract VariablesContract{
  uint public myData =79 ;  
  uint internal myStoredData = 33; 
  uint private myStoredData2 = 66; 
  
         function getStoredData() public view returns (uint ){ 
           myStoredData2 = 22;
        return myStoredData2;
    }
   
}

contract SecondContract{
    
  VariablesContract vc = new VariablesContract();
  
         function getSecondData() public view returns (uint ){ 
         
        return vc.myData();
    }
   
}




contract ThirdContract is VariablesContract{
      
   function getVariablesContractData() public  returns (uint ){ 
         myStoredData = 11;
        return myStoredData;
    }
    
  function getThirdData() public view returns (uint ){ 
         uint x = 11 ;
         uint result = x + myStoredData;
        return result;
    }
   
}