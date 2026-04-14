// `bun run build.ts`
import { $ } from "bun";
import { WasmComponentPlugin } from "bun-plugin-wasm-component/component.ts";

// compile Starstream
await $`starstream wasm -c src/event-demo.star --output-component gen-wasm/component.wasm`;

// build Typescript code
Bun.build({
  entrypoints: ["src/main.ts"],
  outdir: "dist",
  target: "browser",
  sourcemap: true, // sourcemaps not yet supported
  plugins: [WasmComponentPlugin()],
});
