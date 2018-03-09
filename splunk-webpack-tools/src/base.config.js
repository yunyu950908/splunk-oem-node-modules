import path from 'path';

const DEBUG = process.env.NODE_ENV !== 'production';

export default {
    node: {
        __filename: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [DEBUG ? 'babel-loader?cacheDirectory' : 'babel-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    DEBUG ? 'splunk-postcss-loader?debug' : 'splunk-postcss-loader',
                ],
            },
            {
                test: /\.txt$/,
                use: ['raw-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
                            limit: 100000,
                        },
                    },
                ],
            },
            {
                test: /\.(eot|ttf|wav|mp3)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
                        },
                    },
                ],
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },
    resolveLoader: {
        modules: [
            'node_modules',
            // Ensure loaders can still be resolved when this package is symlinked
            path.join(__dirname, '../node_modules'),
        ],
    },

    cache: DEBUG,

    output: {
        filename: DEBUG ? '[name].js?[chunkhash]' : '[name].[chunkhash].js',
        chunkFilename: DEBUG ? '[name].[id].js?[chunkhash]' : '[name].[id].[chunkhash].js',
    },
};
