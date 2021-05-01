import Queue from 'bull';

import { redisConfig } from '@config/redis';

import { registrationMail, userReport } from '../jobs';

const queueConfig = {
  redis: redisConfig,
};

export const MailQueue = new Queue(registrationMail.key, queueConfig);

export const UserQueue = new Queue(userReport.key, {
  ...queueConfig,
  defaultJobOptions: userReport.options,
});
