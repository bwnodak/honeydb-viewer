module.exports = (req, res, next) => {
  const headerSecret = req.headers['Authorization'] === `Bearer ${process.env.API_SECRET}`;
  const qsSecret = req.query.authorization === process.env.API_SECRET;

  if (headerSecret || qsSecret) {
    next();
  } else {
    res.status(401);
    res.json({
      data: null,
      success: false
    });
  }
};
