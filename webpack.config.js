const path = require('path');
let config = {
    entry: "./src/index.js",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude:'/node_modules/'
            }
        ]
    },
    devServer:{
        port: 3000,
        overlay:true
    }
};

module.exports = config;
