import { BaseController } from "@/controllers";

class EspressoController extends BaseController {
  public async make(req: Req, res: Res) {
    return res.status(200).json({
      message: "Made some espresso for you!",
    });
  }
}

export default new EspressoController();
