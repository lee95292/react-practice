var path =require('path')
module.exports={
    context:path.resolve(__dirname,'src'),
    entry:{
         eventapp:'./6eventHandling/eventApp.js',
         toggleapp:'./6eventHandling/toggle.js',
         userviewapp:'./7userView/app.js'
    },
    devtool:'sourcemap',
    cache:true,
    output:{
        path:__dirname,
        filename:'./src/main/webapp/js/react/[name].bundle.js'
    },
    module:{
        rules:[
            {            
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "jsx-loader"
                }
            }
        ]
    }
};