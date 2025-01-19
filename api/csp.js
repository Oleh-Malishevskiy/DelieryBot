// api/csp.js

module.exports = (req, res) => {
    // Set Content-Security-Policy header
    res.setHeader('Content-Security-Policy', "script-src 'self' 'unsafe-inline' https://telegram.org");

    // Return a response (this can be a simple message or redirect, etc.)
    res.status(200).json({ message: 'CSP applied successfully' });
};