import esbuild from 'esbuild';

esbuild
	.build({
		entryPoints: ['./src/index.ts'],
		bundle: true,
		platform: 'node',
		target: ['node10.4'],
		outfile: './dist/out.js',
		color: true,
		logLevel: 'info',
	})
	.catch(() => process.exit(1));
