export let blockHeightValue: number = 7000;
export function setBlockHeight(value: number) {
  blockHeightValue = value;
}

const bindings = {
  // handled by the user to catch effects from the contract (like events)
  "my-abi": {
    action(blockHeight: bigint): void {
      console.log("action called at:", blockHeight);
    }
  },

  // in theory, this would be handled by the node
  "starstream:std/cardano": {
    blockHeight() {
      return blockHeightValue;
    },
  }
};

export const action = bindings["my-abi"].action;
export const blockHeight = bindings["starstream:std/cardano"].blockHeight;