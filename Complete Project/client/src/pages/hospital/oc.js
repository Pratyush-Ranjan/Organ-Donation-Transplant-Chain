import Web3 from 'web3';
const web3=new Web3(window.web3.currentProvider);
const address='0x23BD82c94d40daeF4B013316690732C050D36028';

const abi= [
	{
		"constant": true,
		"inputs": [
			{
				"name": "donoradd",
				"type": "address"
			}
		],
		"name": "getdonor",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "recipientad",
				"type": "address"
			}
		],
		"name": "transplantmatch",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "patientaddr",
				"type": "address"
			}
		],
		"name": "EMR",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "hospiaddr",
				"type": "address"
			},
			{
				"name": "m",
				"type": "uint256"
			}
		],
		"name": "getrecipientdetail",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "recipientadr",
				"type": "address"
			}
		],
		"name": "transplantedrecipient",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "hospiadd",
				"type": "address"
			}
		],
		"name": "getrecipientcount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "reciadd",
				"type": "address"
			}
		],
		"name": "getrecipient",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "donori",
				"type": "address"
			},
			{
				"name": "hash",
				"type": "string"
			},
			{
				"name": "hash2",
				"type": "string"
			},
			{
				"name": "organ_name",
				"type": "string"
			},
			{
				"name": "bgroup",
				"type": "string"
			}
		],
		"name": "adddonor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "hospi",
				"type": "address"
			},
			{
				"name": "patient",
				"type": "address"
			},
			{
				"name": "hash",
				"type": "string"
			},
			{
				"name": "hash2",
				"type": "string"
			},
			{
				"name": "organ_name",
				"type": "string"
			},
			{
				"name": "bgroup",
				"type": "string"
			}
		],
		"name": "addrecipient",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
export default new web3.eth.Contract(abi,address);