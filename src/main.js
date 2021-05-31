import App from './App.svelte';

const dotenv = require('dotenv');


const app = new App({
	target: document.body,
	props: {
		ENV: dotenv.config()
	}
});

export default app;