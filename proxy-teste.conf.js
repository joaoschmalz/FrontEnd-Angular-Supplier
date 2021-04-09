const PROXY_CONFIG = [
	{
        context: [
            "/api/rest/"
        ],
        target: "http://localhost:8080/api/rest/",
        secure: false,
        changeOrigin: true,
        logLevel: "debug",
        autoRewrite: true,
    }
]

module.exports = PROXY_CONFIG;