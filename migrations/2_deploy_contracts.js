var Election = artifacts.require("./Election.sol");
var College = artifacts.require("./College.sol");

module.exports = function(deployer) {
  deployer.deploy(Election);
  deployer.deploy(College);
};
