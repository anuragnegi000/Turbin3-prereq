import {Keypair} from "@solana/web3.js";

let kp=Keypair.generate();
console.log("The Key pair generated is:- ",kp.publicKey.toBase58())
console.log("Secret key",kp.secretKey);

