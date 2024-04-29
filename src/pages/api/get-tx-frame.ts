import { NextApiRequest, NextApiResponse} from "next";
import { getERC721PreparedEncodedData, getFarcasterAccountAddress } from "../../../utils/tx-frame";
import { FrameRequest } from "@coinbase/onchainkit";
import { CoinbaseKit } from "../../../classes/CoinbaseKit";
import { erc721ContractABI } from "../../../utils/erc721ContractABI";
import { erc721ContractAddress } from "../../../utils/constants";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse, 
    ) {
        if (req.method !== "POST") {
            return res.status(405).json({error: "Invalid Request"});
        }

        const accountAddress = getFarcasterAccountAddress(message.interactor);

        const data = await getERC721PreparedEncodedData(accountAddress);
        
        return res.status(200).json({
            chainId: "eip155:10",
            method: "eth_sendTransaction",
            params: {
                abi: erc721ContractABI,
                to:erc721ContractAddress,
                data:data,
                value:"0",

            }

        });
        
    };