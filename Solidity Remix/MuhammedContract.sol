pragma solidity ^0.4.22 <0.7.0;

contract MuhammedContract{
    
    function getSum() public view returns(uint256){
        uint256 num1 = 2;
        uint256 num2 = 2;
        uint256 sum = num1 + num2;
        return sum;
    }
    function getSub() public view returns(uint256){
        uint256 num1 = 20;
        uint256 num2 = 2;
        uint256 sum = num1 - num2;
        return sum;
    }
    function getDiv() public view returns(uint256){
        uint256 num1 = 4;
        uint256 num2 = 2;
        uint256 sum = num1 / num2;
        return sum;
    }
    function getMulti() public view returns(uint256){
        uint256 num1 = 5;
        uint256 num2 = 2;
        uint256 sum = num1 * num2;
        return sum;
    }
}