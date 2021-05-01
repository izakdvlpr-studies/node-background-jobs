import nodemailer from 'nodemailer';

import { mailConfig } from '@config/mail';

export const Mail = nodemailer.createTransport(mailConfig);
