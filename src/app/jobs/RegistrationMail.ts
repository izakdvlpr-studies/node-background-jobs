import { Mail } from '../../app/lib/Mail';

export const registrationMail = {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'Queue test <queue@queuetest.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá ${user.name}, bem-vindo ao sistema de fila da Rocketseat :D`,
    });
  },
};
