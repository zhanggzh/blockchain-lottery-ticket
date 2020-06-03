pragma solidity ^0.4.24;
contract Ticket {
    address public manager ;
    address[] public players ;
    uint256 public round;
    address public winner;
    constructor () public {
        manager = msg.sender;
    }
    modifier onlyManager() {
        require(msg.sender == manager);
        _;
    }
    
    function play() public payable {
        require(msg.value == 500);
        players.push(msg.sender);
    }
    
    function getbalance() public view returns(uint256) {
        return address(this).balance;
    }
    
    function getplayers() public view returns(address[]) {
        return players;
    }
    function kaijiang() public onlyManager {
        bytes memory b1 = abi.encodePacked(block.timestamp,block.difficulty,players.length);
        bytes32 b2 = keccak256(b1);
        uint256 num = uint256(b2);
        winner = players[num%players.length];
        winner.transfer(address(this).balance * 9 / 10);
        manager.transfer(address(this).balance);
        delete players;
        round ++;
    }
    function tuijiang() public onlyManager {
        uint256 money = address(this).balance / players.length;
        for(uint256 i = 0; i < players.length;i++){
            players[i].transfer(money);
        }
        delete players;
        round ++;
    }
    
}

