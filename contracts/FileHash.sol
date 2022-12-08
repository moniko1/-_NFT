pragma solidity ^0.4.2;

contract FileHash {
    string ipfsHash;

    function set(string x) public {
        ipfsHash = x;
    }

    function get() public view returns (string) {
        return ipfsHash;
    }
}