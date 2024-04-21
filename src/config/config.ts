import * as dotenv from 'dotenv';
import IConfig from '../interface/Iconfig.interface';
dotenv.config();


const config: IConfig = {
  token: process.env.BOT_TOKEN || '',
};

export default config;
