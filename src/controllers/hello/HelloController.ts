import { BaseController } from "@/controllers";
class HelloController extends BaseController {
  public async hello(req: Req, res: Res) {
    return res.status(200).json({
      message: "Hello World!",
    });
  }
}

export default new HelloController();
