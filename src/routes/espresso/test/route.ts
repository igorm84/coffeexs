export const GET = (req: Req, res: Res) => {
  return res.status(200).json({
    message: "Testing espresso machine",
  });
};
