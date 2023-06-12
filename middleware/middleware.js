function auth(req, res, next) {
    const { token } = req.body;
  
    if (!token || token === "" || token === undefined) {
      return res.json({error : "Token is required"});
    }
  
    if (token === "12345") {
      next();
    }
  }
  
  module.exports = auth;
  