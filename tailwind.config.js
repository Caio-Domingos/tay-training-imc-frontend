/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const defaultConfig = require('tailwindcss/defaultConfig');
const formsPlugin = require('@tailwindcss/forms');

/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['index.html', 'src/**/*.tsx'],
	darkMode: 'selector',
	theme: {
		fontFamily: {
			sans: ['Inter', ...defaultConfig.theme.fontFamily.sans],
		},
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin],
};
module.exports = config;
