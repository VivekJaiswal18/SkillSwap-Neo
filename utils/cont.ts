// import { ethers } from "ethers";
// import { aiachain } from "./neoxChainConfig";

// // Enhanced types to match the new contract
// export interface Course {
//   id: number;
//   creator: string;
//   price: bigint;
//   isActive: boolean;
//   contentURI: string;
//   title: string;
//   description: string;
//   purchaseCount: bigint;
//   createdAt: bigint;
// }

// export interface CourseInput {
//   price: bigint;
//   contentURI: string;
//   title: string;
//   description: string;
// }

// export const CONTRACT_ADDRESS = "0x0771a6569bfd4a4c9701e6e95038d0f89746391b";

// export const CONTRACT_ABI = [
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "account",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "operator",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "bool",
// 				"name": "approved",
// 				"type": "bool"
// 			}
// 		],
// 		"name": "ApprovalForAll",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "uint256",
// 				"name": "courseId",
// 				"type": "uint256"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "newContentURI",
// 				"type": "string"
// 			}
// 		],
// 		"name": "CourseContentUpdated",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "uint256",
// 				"name": "courseId",
// 				"type": "uint256"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "creator",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "price",
// 				"type": "uint256"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "title",
// 				"type": "string"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "contentURI",
// 				"type": "string"
// 			}
// 		],
// 		"name": "CoursePublished",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "uint256",
// 				"name": "courseId",
// 				"type": "uint256"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "buyer",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "price",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "CoursePurchased",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "uint256",
// 				"name": "courseId",
// 				"type": "uint256"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "newPrice",
// 				"type": "uint256"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "bool",
// 				"name": "isActive",
// 				"type": "bool"
// 			}
// 		],
// 		"name": "CourseUpdated",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "uri",
// 				"type": "string"
// 			}
// 		],
// 		"name": "initialize",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "uint8",
// 				"name": "version",
// 				"type": "uint8"
// 			}
// 		],
// 		"name": "Initialized",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "previousOwner",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "OwnershipTransferred",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "price",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "contentURI",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "title",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "description",
// 				"type": "string"
// 			}
// 		],
// 		"name": "publishCourse",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "courseId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "purchaseCourse",
// 		"outputs": [],
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "renounceOwnership",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256[]",
// 				"name": "ids",
// 				"type": "uint256[]"
// 			},
// 			{
// 				"internalType": "uint256[]",
// 				"name": "amounts",
// 				"type": "uint256[]"
// 			},
// 			{
// 				"internalType": "bytes",
// 				"name": "data",
// 				"type": "bytes"
// 			}
// 		],
// 		"name": "safeBatchTransferFrom",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "id",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "amount",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "bytes",
// 				"name": "data",
// 				"type": "bytes"
// 			}
// 		],
// 		"name": "safeTransferFrom",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "operator",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "bool",
// 				"name": "approved",
// 				"type": "bool"
// 			}
// 		],
// 		"name": "setApprovalForAll",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "courseId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "toggleCourseStatus",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "operator",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256[]",
// 				"name": "ids",
// 				"type": "uint256[]"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256[]",
// 				"name": "values",
// 				"type": "uint256[]"
// 			}
// 		],
// 		"name": "TransferBatch",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "transferOwnership",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "operator",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "id",
// 				"type": "uint256"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "TransferSingle",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "courseId",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "newContentURI",
// 				"type": "string"
// 			}
// 		],
// 		"name": "updateCourseContent",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "courseId",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "newPrice",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "updateCoursePrice",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "value",
// 				"type": "string"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "uint256",
// 				"name": "id",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "URI",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "withdraw",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "activeCourses",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "account",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "id",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "balanceOf",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address[]",
// 				"name": "accounts",
// 				"type": "address[]"
// 			},
// 			{
// 				"internalType": "uint256[]",
// 				"name": "ids",
// 				"type": "uint256[]"
// 			}
// 		],
// 		"name": "balanceOfBatch",
// 		"outputs": [
// 			{
// 				"internalType": "uint256[]",
// 				"name": "",
// 				"type": "uint256[]"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "courses",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "creator",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "price",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "bool",
// 				"name": "isActive",
// 				"type": "bool"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "contentURI",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "title",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "description",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "purchaseCount",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "createdAt",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "creatorCourses",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getAllActiveCourses",
// 		"outputs": [
// 			{
// 				"internalType": "uint256[]",
// 				"name": "ids",
// 				"type": "uint256[]"
// 			},
// 			{
// 				"internalType": "address[]",
// 				"name": "creators",
// 				"type": "address[]"
// 			},
// 			{
// 				"internalType": "uint256[]",
// 				"name": "prices",
// 				"type": "uint256[]"
// 			},
// 			{
// 				"internalType": "string[]",
// 				"name": "titles",
// 				"type": "string[]"
// 			},
// 			{
// 				"internalType": "string[]",
// 				"name": "descriptions",
// 				"type": "string[]"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "courseId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getCourse",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "creator",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "price",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "bool",
// 				"name": "isActive",
// 				"type": "bool"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "title",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "description",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "purchaseCount",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "createdAt",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "courseId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getCourseURI",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "creator",
// 				"type": "address"
// 			}
// 		],
// 		"name": "getCreatorCourses",
// 		"outputs": [
// 			{
// 				"internalType": "uint256[]",
// 				"name": "",
// 				"type": "uint256[]"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "user",
// 				"type": "address"
// 			}
// 		],
// 		"name": "getUserCourses",
// 		"outputs": [
// 			{
// 				"internalType": "uint256[]",
// 				"name": "",
// 				"type": "uint256[]"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "account",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "operator",
// 				"type": "address"
// 			}
// 		],
// 		"name": "isApprovedForAll",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "nextCourseId",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "owner",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "bytes4",
// 				"name": "interfaceId",
// 				"type": "bytes4"
// 			}
// 		],
// 		"name": "supportsInterface",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "totalCourses",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "uri",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "userOwnedCourses",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "userPurchases",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ];

// export const getContract = (signer: ethers.ContractRunner | null | undefined) => {
//   return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
// };

// export const getAllCourses = async (): Promise<Course[]> => {
//   try {
//     const provider = new ethers.JsonRpcProvider(aiachain.rpcUrls.default.http[0]);
//     const contract = getContract(provider);

//     // Use the new getAllActiveCourses function
//     const [ids, creators, prices, titles, descriptions] = await contract.getAllActiveCourses();

//     // Map the returned arrays into Course objects
//     const courses: Course[] = ids.map((id: bigint, index: number) => ({
//       id: Number(id),
//       creator: creators[index].toLowerCase(),
//       price: prices[index],
//       isActive: true, // These are all active courses
//       title: titles[index],
//       description: descriptions[index],
//       contentURI: "", // ContentURI is only available to purchasers
//       purchaseCount: BigInt(0), // We'll need a separate call to get this
//       createdAt: BigInt(0) // We'll need a separate call to get this
//     }));

//     // Get additional details for each course
//     const coursesWithDetails = await Promise.all(
//       courses.map(async (course) => {
//         try {
//           const details = await contract.getCourse(course.id);
//           return {
//             ...course,
//             purchaseCount: details.purchaseCount,
//             createdAt: details.createdAt
//           };
//         } catch (error) {
//           console.error(`Error fetching details for course ${course.id}:`, error);
//           return course;
//         }
//       })
//     );

//     return coursesWithDetails;
//   } catch (error) {
//     console.error("Error fetching courses:", error);
//     throw error;
//   }
// };

// export const publishCourse = async (
//   signer: ethers.Signer,
//   { price, contentURI, title, description }: CourseInput
// ): Promise<ethers.TransactionResponse> => {
//   try {
//     const contract = getContract(signer);
//     const tx = await contract.publishCourse(price, contentURI, title, description);
//     await tx.wait();
//     return tx;
//   } catch (error) {
//     console.error("Error publishing course:", error);
//     throw error;
//   }
// };

// export const purchaseCourse = async (
//   signer: ethers.Signer,
//   courseId: number,
//   price: bigint
// ): Promise<ethers.TransactionResponse> => {
//   try {
//     const contract = getContract(signer);
//     const tx = await contract.purchaseCourse(courseId, { value: price });
//     await tx.wait();
//     return tx;
//   } catch (error) {
//     console.error("Error purchasing course:", error);
//     throw error;
//   }
// };

// export const formatCourseData = (course: Course) => ({
//   ...course,
//   formattedPrice: ethers.formatEther(course.price),
//   formattedDate: new Date(Number(course.createdAt) * 1000).toLocaleDateString(),
// });