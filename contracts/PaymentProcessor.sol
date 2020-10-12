// SPDX-License-Identifier: Non-Licensed
pragma solidity ^0.6.2;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract PaymentProcessor{
    address public admin;
    IERC20 public dai;

    event PaymentDone(
        address payer,
        uint amount,
        uint paymentId,
        uint date
    );

    constructor(address _adminAddress, address _daiAddress) public{
        admin = _adminAddress;
        dai = IERC20(_daiAddress);
    }

    function pay(uint amount, uint paymentId) external {
        dai.transferFrom(msg.sender, admin, amount);
        emit PaymentDone(msg.sender, amount, paymentId, block.timestamp);
    }
}