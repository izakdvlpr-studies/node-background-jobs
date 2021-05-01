declare namespace NodeJS {
  interface ProcessEnv {
    // Node
    NODE_ENV: 'production' | 'development';
    
    // MailTrap
    MAIL_HOST: string;
    MAIL_PORT: number;
    MAIL_USER: string;
    MAIL_PASS: string;
    
    // Redis
    REDIS_HOST: string;
    REDIS_PORT: number;
  }
}