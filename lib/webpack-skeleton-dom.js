const HtmlWebpackPlugin = require('html-webpack-plugin');
class compilerTest {
	constructor({ skeletonHtml }) {
		this.skeletonHtml = skeletonHtml
	}
	apply (compiler) {
		compiler.hooks.compilation.tap('compilerSkeleton', (compilation) => {
			console.log('The compiler is starting a new compilation...');

			// Static Plugin interface |compilation |HOOK NAME | register listener
			HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tapAsync(
				'compilerSkeleton', // <-- Set a meaningful name here for stacktraces
				(data, cb) => {
					// 添加骨架屏
					data.html = data.html.replace(new RegExp('<div id="app"></div>'), this.skeletonHtml);
					cb(null, data);
				}
			);
		});
	}
}

module.exports = compilerTest;
