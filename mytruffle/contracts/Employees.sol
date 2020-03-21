 pragma solidity >=0.4.21 <0.7.0;

contract Employees {
  string fullname;

  constructor() public {
    fullname = "Muhammed Essa Hameed";
  }
  function setEmployee(string memory name) public {
      fullname = name;
  }

   function getEmployee() public view  returns(string memory ){
    return fullname;
  }

}