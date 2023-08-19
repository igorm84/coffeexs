export const GET = (req: Req, res: Res) => {
  return res.status(200).json({
    message: "Tried to look for " + name,
    params: req.params,
  });
};
