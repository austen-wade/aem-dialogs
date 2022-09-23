import esbuild from "esbuild";
import eslint from "esbuild-plugin-eslint";

(async () => {
    await esbuild.build({
        entryPoints: ["./src/index.ts"],
        outdir: "lib",
        bundle: true,
        platform: "node",
        target: ["esnext"],
        color: true,
        logLevel: "info",
        sourcemap: true,
        minify: true,
        format: "esm",
        plugins: [
            eslint({
                fix: true,
            }),
        ],
    });
})();
