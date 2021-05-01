import { MailQueue, UserQueue } from './app/lib/Queue';

import { registrationMail, userReport } from './app/jobs';

MailQueue.process(registrationMail.handle);
UserQueue.process(userReport.handle);
