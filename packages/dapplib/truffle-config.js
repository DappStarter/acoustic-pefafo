require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remind arrow grid arctic orange genius'; 
let testAccounts = [
"0xa269424c19d191bc8e0b3b03266b3a87ce2a4d5e87fbfb642db961b44e8cd8e5",
"0xe56be9ba8feaa145f9f5ac871b32637eb6e3abf3f5b591c13a8626e8eea9958f",
"0xd0dea928d3cf2ad3e798c440dcb5fd67cbbb9452cd9dffb71c8c275223211a7d",
"0x4d68afd3e1bfe832c7d39e9e607e0375fa3b382339e344366b0ecab00b0616c1",
"0x4250676d65dc24652fc07f392d24536384544694e3816ca258cb3d9b4e8c6635",
"0xa03294434d58e16f5de626bbb8b20335ddf1c29a946fc7c531593dbe42601603",
"0x8877dcb05f6068ef0d4249becaff08edfc7da4e1b1092fc133a8661d23cf2424",
"0x7c402a6d2759528b46502ed9a9be400c11660624ce5f322102e739b198edcb75",
"0xcbda7476a1a82c7e86682286265f19510ad30bfa118e9820e5aa3c269315b80d",
"0x76358510fae6ea01cf2a941a22cba26d0d2f628ebd344f1ddb6f8513b571ed9d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
