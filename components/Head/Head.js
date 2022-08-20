import React from "react";
import Script from "next/script";
import Head from "next/head";
const HeadComponent = () => {
  return (
    <>
      <Script src='https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js' />
      <Script src='https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js' />
      <title></title>
    </>
  );
};

export default HeadComponent;
