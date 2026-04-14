import * as utxo from "../gen-wasm/component.wasm";
import { setBlockHeight } from "./bindings";

setBlockHeight(7000);
utxo.processAction();

setBlockHeight(7100);
utxo.processAction();
