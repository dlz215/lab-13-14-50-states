module.exports = {
    // Tells Vue dev server to send any API requests to address of Express server
    // If dev server is running, request will be prefaced with proxy value
    // Request '/api/states' will be prefaced with proxy value - 'http://127.0.0.1:3000/api/states'
    devServer: {
        proxy: 'http://127.0.0.1:3000'
    }
}