export const GET = (req: Req, res: Res) => {
  const { name, aroma } = req.params;
  return res.status(200).json({
    message:
      "Forcing tests for espresso machine: " +
      name +
      " considering aroma " +
      aroma,
    params: req.params,
  });
};
