import { Request, Response } from "express";
class UserService {
  public async hello(req: Request, res: Response): Promise<Response> {
    return res.json({message: 'Hello World'});
  }
}
export default new UserService();
