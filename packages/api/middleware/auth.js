module.exports = (req, res, next) => {
  const authHeader =
    req.headers["authorization"] || req.headers["Authorization"];
  const headerSecret =
    authHeader === `Bearer ${process.env.REACT_APP_API_SECRET}`;
  const qsSecret = req.query.authorization === process.env.REACT_APP_API_SECRET;

  if (headerSecret || qsSecret) {
    next();
  } else {
    res.status(401);
    res.json({
      data: null,
      success: false,
    });
  }
};
