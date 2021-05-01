import express from 'express';

import { createBullBoard } from 'bull-board';
import { BullAdapter } from 'bull-board/bullAdapter';

import { UserController } from './app/controllers/UserController';

import { MailQueue, UserQueue } from './app/lib/Queue';

const app = express();

const { router } = createBullBoard([
  new BullAdapter(MailQueue),
  new BullAdapter(UserQueue),
]);

const userController = new UserController();

app.use(express.json());

app.post('/users', userController.store);

app.use('/admin/queues', router);

app.listen(3333, () => console.log('Server running'));
