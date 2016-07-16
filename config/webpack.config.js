const webpack = require('webpack');
module.exports = {
        entry:'./src/js/jsx.js',
        output:{
            path:'./dist/js',
            filename:'app.bundle.js'
        },
        module:{
            loaders:[
                {
                    test:/\.jsx?$/,
                    exclude:/node_modules/,
                    loader:"babel",
                    query:{
                        presets:['es2015'],
                        plugins:[["transform-react-jsx"]]
                    }
                },
                {
                    test:/\.css$/,
                    loader:'style!css'
                },
                {
                    test: /\.scss$/,
                    loader: 'style!css!sass'
                }
            ]
        },
        resolve: {
            root: [process.cwd() + '/src', process.cwd() + '/node_modules'],
            alias: {},
            extensions: ['', '.js', '.css', '.scss', '.ejs', '.png', '.jpg']
        },
        plugins: [
            new webpack.BannerPlugin('This file is created by LuoXia')
        ]
};
