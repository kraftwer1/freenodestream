module.exports = {
	entry: "./src/index.js",
	module: {
		loaders: [{
            test: /\.js$/,
            loader: "babel",
            exclude: /node_modules/,
            query: {
                presets: ["es2015", "react"]
            }
        }]
	}
};
