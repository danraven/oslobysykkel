module.exports = api => {
    api.cache(() => process.env.NODE_ENV);

    return {
        presets: [
            ["@babel/preset-env", {
                targets: {
                    node: 'current',
                    browsers: '>1%'
                },
                modules: process.env.NODE_ENV === 'test' ? 'commonjs' : 'auto'
            }],
            "@babel/preset-react"
        ],
        plugins: [
            "babel-plugin-styled-components"
        ]
    };
};