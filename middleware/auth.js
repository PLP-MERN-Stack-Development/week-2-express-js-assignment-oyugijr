module.exports = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    
    // Verify token (e.g., using JWT)
    // For simplicity, we'll just check if it matches a hardcoded value
    if (token !== 'Bearer mysecrettoken') {
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
}
