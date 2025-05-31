import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import prefixWrap from 'postcss-prefixwrap';

const config = {
	plugins: [
		tailwindcss(),
		autoprefixer(),
		prefixWrap('.theme-editor-svelte-root', {
			blacklist: ['.theme-editor-svelte-root']
		})
	]
}

export default config
