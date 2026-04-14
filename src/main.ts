import { processAction } from "../gen-wasm/component.wasm";
import { setBlockHeight } from "./bindings";

setBlockHeight(7000);
processAction();

setBlockHeight(7100);
processAction();
