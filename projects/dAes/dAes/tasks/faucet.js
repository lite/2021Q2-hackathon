const fs = require("fs");

// This file is only here to make interacting with the Dapp easier,
// feel free to ignore it if you don't need it.

task("faucet", "Sends ETH and tokens to an address")
  .addPositionalParam("receiver", "The address that will receive them")
  .setAction(async ({ receiver }) => {
    if (network.name === "hardhat") {
      console.warn(
        "You are running the faucet task with Hardhat network, which" +
          "gets automatically created and destroyed every time. Use the Hardhat" +
          " option '--network localhost'"
      );
    }
    const [sender] = await ethers.getSigners();
    const tx = await sender.sendTransaction({
        to: receiver,
        value: ethers.constants.WeiPerEther,
        });
    await tx.wait();

    console.log(`Transferred 1 ETH and 100 tokens to ${receiver}`);


    // const addressesFile =
    //   __dirname + "/../src/artifacts/contracts/Canvas.sol/Canvas.json";

    // console.log(addressesFile);
    // if (!fs.existsSync(addressesFile)) {
    //   console.error("You need to deploy your contract first");
    //   return;
    // }

    // const addressJson = fs.readFileSync(addressesFile);
    // const address = JSON.parse(addressJson);

    // if ((await ethers.provider.getCode(address.Token)) === "0x") {
    //   console.error("You need to deploy your contract first");
    //   return;
    // }

    // const token = await ethers.getContractAt("Token", address.Token);
    // const tx2 = await token.transfer(receiver, 100);
    // await tx2.wait();
});