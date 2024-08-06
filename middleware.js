module.exports = (req, res, next) => {
    if (req.path.indexOf("/auth-header-required") === 0) {
        if (req.get("Authorization") !== "Bearer 123456") {
            res.status(401).send('Invalid Authorization header, try setting it to "Bearer 123456"')
            return
        }
    }

    if (req.path.indexOf("/client-ip") === 0) {
        if (req.method == 'POST') {
            const data = JSON.parse(JSON.stringify(req.body));
            res.json({ "client-ip": req.connection.remoteAddress, "version": data['version'] });
        }
        res.json({ "client-ip": req.connection.remoteAddress });
    }

    next()
}
