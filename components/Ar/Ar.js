import React, { useEffect, useState, useRef } from "react";
import Script from "next/script";

// import sdasd from 'static/ASDASD/ASDASD'
const Ar = () => {
  const assetRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Script
        src='https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js'
        strategy='beforeInteractive'
      />
      <Script
        src='https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-nft.js'
        strategy='beforeInteractive'
      />
      <Script
        src='https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js'
        strategy='beforeInteractive'
      />
      <div className='arjs-loader'>
        <div>Loading, please wait...</div>
      </div>
      {isLoading && (
        <a-scene
          vr-mode-ui='enabled: false;'
          renderer='logarithmicDepthBuffer: false;'
          arjs='trackingMethod: best; sourceType: webcam;debugUIEnabled: false;'
          embedded>
          {/* <a-assets>
            <a-asset-item
              id='animated-asset'
              src='gltf/women.gltf'
              ref={assetRef}></a-asset-item>
          </a-assets> */}
          <a-box
            position='0 1.5 -3'
            color='#ff0000'
            material='opacity:0.5'
            scale='0.5 0.5 0.5'
            animation='property:rotation; from:0 0 0; to:0 360 0; dur:2000; loop:true; dir: alternate;'></a-box>
          <a-nft
            type='nft'
            url='/nfts/test-no1'
            smooth='true'
            smoothCount='10'
            smoothTolerance='.01'
            smoothThreshold='5'>
            <a-entity
              gltf-model='/glb/women.glb'
              scale='1 1 1'
              position='0 0 0'
              rotation='-90 0 0 '
              animation-mixer='loop: repeat'></a-entity>
          </a-nft>
          <a-entity camera></a-entity>
        </a-scene>
      )}
      <div className={"banner"}></div>
    </div>
  );
};

export default Ar;
