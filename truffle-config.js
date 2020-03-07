require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name rice pizza pudding inflict kangaroo army giggle'; 
let testAccounts = [
"0xdf1f59be995bae7eb012b7bd9800414a248f5b320ff157a9efaf0dd05814d6d2",
"0xa69adf52d806b3f7fd6e1cf907bb6650dbb520b87c32428001919ab6d047e71a",
"0x2aa16507b5273bfbe5b0b28342998d129cf40d703f42e2def25df1104535c26b",
"0x2b9e855424708007c7e1e2cccecf113e8e1bae9ee9fbcf862ff9c8f90a0f7d26",
"0xbcb207152e7fe0309a6392d91a51171d693ce00510b79f5a9f214160d5112f0f",
"0xac12605e0d976e7fdc1bfccf307dff3e454aa194dde5056114d3c6e599f10862",
"0x3f5ec85c5930c2256a1f2c8b99c00dda32ed9df34ce8cd6de94758d039d672e4",
"0x01d72ed011bf9be969c13cacda98ed9e9cc7cc2dd67c8448739a33a02216bb42",
"0x4d51f66416412faf103ed2fffe660cfec2a1dce668d506d38251520f734ce483",
"0x386d46cc8381c3e407a25f7f6c63c2d45ff701c8ad4d673f5e15745862cceead"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
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
