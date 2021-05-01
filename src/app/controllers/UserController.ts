import { Request, Response } from 'express';

import { MailQueue, UserQueue } from '../lib/Queue';

export class UserController {
  async store(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    await MailQueue.add({ user });

    await UserQueue.add({ user });

    return res.json(user);
  }
}
