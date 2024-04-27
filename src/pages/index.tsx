import Head from "next/head";

const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL;
const title = "Transaction Farcaster Frame on OP";
const frameImgUrl = `${HOST_URL}/NFTImage.png`;

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="fc:frame" content="vNext"/>
        <meta property="fc:frame:image" content={frameImgUrl} />
        <meta property="fc:frame:image:aspect_ratio" content="1:1" />
        <meta property="fc:frame:button:1" content="Mint Event NFT " />
        <meta property="fc:frame:button:1:action" content="tx" />
        <meta 
          property="fc:frame:button:1:action:1:target" 
          content={ `${HOST_URL}/api/frame/op/get-txt-frame`} 
        />
      </Head>
      <h1> Transaction Frame </h1>
      
    </>
  );
}
