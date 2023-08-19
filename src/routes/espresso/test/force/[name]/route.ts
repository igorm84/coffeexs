export const GET = (req: Req, res: Res) => {
  const { name } = req.params;
  return res.status(200).json({
    message: "Forcing tests for espresso machine: " + name,
    params: req.params,
  });
};
