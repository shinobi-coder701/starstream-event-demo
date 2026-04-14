import { blockHeight } from starstream:std/cardano;

abi MyAbi {
    event Action(block_height: i64);
}

script fn processAction() {
    let height = runtime blockHeight();
    emit Action(height);
}
