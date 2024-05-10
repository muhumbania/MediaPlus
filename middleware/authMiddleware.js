export const isAuthenticated = (req, res, next) => {
    const idToken = req.headers.authorization;
  
    if (!idToken) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    admin.auth().verifyIdToken(idToken)
      .then((decodedToken) => {
        req.user = decodedToken; // Attach user information to the request object
        next();
      })
      .catch((error) => {
        console.error('Error verifying token:', error);
        return res.status(401).json({ error: 'Unauthorized' });
      });
  };
  