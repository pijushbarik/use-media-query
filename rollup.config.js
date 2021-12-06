import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";

const name = require("./package.json").main.replace(/\.js$/, "");

export default [
  {
    input: "src/index.ts",
    plugins: [
      esbuild({
        sourceMap: process.env.NODE_ENV !== "production",
        minify: process.env.NODE_ENV === "production",
        target: "es2017",
      }),
    ],
    output: [
      {
        file: `${name}.mjs`,
        format: "es",
        exports: "auto",
      },
      {
        file: `${name}.js`,
        format: "cjs",
        exports: "auto",
      },
    ],
    external: ["react"],
  },
  {
    input: "src/index.ts",
    plugins: [dts()],
    output: {
      file: `${name}.d.ts`,
      format: "es",
    },
    external: ["react"],
  },
];
