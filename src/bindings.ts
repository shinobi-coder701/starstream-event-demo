type CardanoChain = typeof import ("../gen-wasm/component.wasm").StarstreamStdCardano;
type ContractAbi = typeof import ("../gen-wasm/component.wasm").MyAbi;

export let blockHeightValue: bigint = 7000n;
export function setBlockHeight(value: bigint) {
  blockHeightValue = value;
}

const bindings = {
  // handled by the user to catch effects from the contract (like events)
  "my-abi": {
    action(blockHeight: bigint): void {
      console.log("action called at:", blockHeight);
    }
  } satisfies ContractAbi,

  // in theory, this would be handled by the node
  "starstream:std/cardano": {
    blockHeight() {
      return blockHeightValue;
    },
  } satisfies CardanoChain
};

export const action = bindings["my-abi"].action;
export const blockHeight = bindings["starstream:std/cardano"].blockHeight;