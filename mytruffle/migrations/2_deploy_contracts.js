const Employees = artifacts.require("./Employees.sol");

module.exports = function(deployer) {
  deployer.deploy(Employees);
};
