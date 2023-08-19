export const GET = (req: Req, res: Res) => {
  const { name, aroma, acidity } = req.params;
  return res.status(200).json({
    message:
      "Forcing tests for espresso machine: " +
      name +
      " considering aroma " +
      aroma +
      " and acidity " +
      acidity,
    params: req.params,
  });
};
