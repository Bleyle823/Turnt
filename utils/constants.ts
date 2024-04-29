import {createThirdwebClient } from 'thirdweb';

export const CLIENT = createThirdwebClient({
    secretKey: process.env.TW_SECRET_KEY as string, 
});

export const CHAIN = defineChain( optimism);

export const erc721ContractAddress = process.env.CONTRACT_ADDRESS as string;