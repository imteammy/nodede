
exports.auth = async (req, res, next) => {
  console.log(req.headers);
  const { token } = req.body;

  if (!token || token === "" || token === undefined) {
    return res.json({error : "Token is required"});
  }

  if (token === "12345") {
    return next();
  }

}
