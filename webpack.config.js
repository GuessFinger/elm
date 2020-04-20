const path = require('path');

module.exports = {
    entry: {
        main: './main.js'
    },
    output: {
        filename: `[hash:8].js`,
        path: path.resolve(__dirname,'./dist')
    },
    module: {
        rules: []
    },
    plugins: [],
    mode: "development"
};