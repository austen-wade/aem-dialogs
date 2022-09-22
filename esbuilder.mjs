import esbuild from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import eslint from 'esbuild-plugin-eslint';

(async () => {
    await esbuild.build({
        entryPoints: ['./src/index.ts'],
        bundle: true,
        platform: 'node',
        target: ['node10.4'],
        outfile: './dist/out.js',
        color: true,
        logLevel: 'info',
        sourcemap: true,
        plugins: [
            eslint({
                fix: true,
            }),
        ],
    });
})();
