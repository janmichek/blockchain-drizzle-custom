pragma solidity >=0.4.21 <0.6.0;

contract CustomStorage {
    uint public storedData;

    event DataChanged(uint newValue, uint date);

    function set(uint x) public {
        storedData = x;
        emit DataChanged(x, now);
    }
}