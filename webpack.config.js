var path = require('path');

module.export = {
    context: path.resolve(__dirname,'src/'),
    entry:{
        main: './6enentHandling/eventApp.js'
        page1: './7userView/app.js',
    },
    devtool:'sourcemaps',
    cache: true,
    output: {
        path:__dirname,
        filename: '/src/out/myapp/js/react/[name].bundle.js'
    },
    mode:'none',
    module: {
        rules: [ {
            test: /\.js?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ '@babel/preset-env', '@babel/preset-react' ]
                }
            }
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        } ]
    }
}