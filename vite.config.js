import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot} from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port:3001,
		fs: {
			allow: [
				searchForWorkspaceRoot(process.cwd())
			]
		  },
	},
	

});
