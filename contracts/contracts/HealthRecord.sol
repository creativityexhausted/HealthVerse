// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract HealthRecord {
    struct Record {
        string ipfsHash;
        address doctor;
        address patient;
    }

    mapping(address => Record[]) public records;

    function addRecord(address _patient, string memory _ipfsHash) public {
        records[_patient].push(Record(_ipfsHash, msg.sender, _patient));
    }

    function getRecords(address _patient) public view returns (Record[] memory) {
        return records[_patient];
    }
}