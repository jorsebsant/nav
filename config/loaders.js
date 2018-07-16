const path = require('path')

const jsxLoader = {
    test: /\.js$/,
    use: {
        loader: 'babel-loader',
        options: {
        compact: false,
        },
    },
}

const cssLoader = {
    test: /\.css$/,
    use: [
        'style-loader',
        {
        loader: 'css-loader'
        },
    ],
}

const stylusLoader = {
    test: /\.styl$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                outputPath: '../styles/',
                name: '[name].css',
            }
        },
        {
            loader: 'extract-loader'
        },
        {
            loader: 'css-loader',
        },
        {
            loader: 'stylus-loader',
            options: { sourceMap: true },
        },
    ],
}



module.exports = {
    stylusLoader,
    jsxLoader,
    cssLoader,
}