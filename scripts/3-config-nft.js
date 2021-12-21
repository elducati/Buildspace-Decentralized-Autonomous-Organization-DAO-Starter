import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xD00B30582859b6353a77B16DCE1e58f241Bb699E",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "The Community United",
        description: "This NFT will give you access to SaccourDAO!",
        image: readFileSync("scripts/assets/help.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()