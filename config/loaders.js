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
        loader: 'css-loader',
        },
    ],
}

const stylusLoader = {
    test: /\.s?tyl$/,
    use: [
        'style-loader',
        {
        loader: 'css-loader',
        },
        'stylus-loader',
    ],
}

module.exports = {
    stylusLoader,
    jsxLoader,
    cssLoader,
}