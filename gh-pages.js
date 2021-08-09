const ghpages = require('gh-pages');
const path = require('path');

const distPath = path.resolve(__dirname, 'public');

console.log('Starting to publish GitHub Pages');
ghpages.publish(
	distPath,
	(res) => {
		console.log(res);
	},
	(err) => {
		if (err) console.error('ghpages failed', err);
		else console.log('ghpages successfully deployed');
	}
);
