pragma solidity ^0.6.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract PaymentProcessor {
    address public admin;
    IERC20 public dai;

    event PaymentDone(
        address payer,
        uint amount,
        uint date,
        uint paymentId
    );

    constructor(address adminAddress,address daiAddress)public
    {
        admin=adminAddress;
        dai=IERC20(daiAddress);

    }

    function pay(uint amount, uint paymentId)external
    {
        dai.transferFrom(msg.sender,admin,amount);
        emit PaymentDone(msg.sender,amount,block.timestamp,paymentId);
    }
}
