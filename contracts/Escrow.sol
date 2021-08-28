// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Escrow {
	address public arbiter;
	address payable public beneficiary;
	address payable public depositor;

	constructor(address _arbiter, address payable _beneficiary) payable {
		arbiter = _arbiter;
		beneficiary = _beneficiary;
		depositor = payable(msg.sender);
	}

	event Approved(uint);

	function approve() external OnlyArbiter {
		uint balance = address(this).balance;
		beneficiary.transfer(balance);
		emit Approved(balance);
	}

	event Revert(uint);

	function revert() external OnlyArbiter {
		uint balance = address(this).balance;
		depositor.transfer(balance);
		emit Revert(balance);
	}ch

	modifier OnlyArbiter {
		require(msg.sender == arbiter);
		_;
	}

}
