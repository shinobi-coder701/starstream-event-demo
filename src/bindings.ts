export let blockHeightValue: number = 7000;
export function setBlockHeight(value: number) {
  blockHeightValue = value;
}

const bindings = {
  "my-abi": {
    action(blockHeight: bigint): void {
      console.log("action called at:", blockHeight);
    }
  },

  "starstream:std/cardano": {
    blockHeight() {
      return blockHeightValue;
    },
  }
};

export const action = bindings["my-abi"].action;
export const blockHeight = bindings["starstream:std/cardano"].blockHeight;