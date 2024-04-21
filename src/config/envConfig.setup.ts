import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
type EnvVariableTypes = {
  [key: string]: 'string' | 'number' | 'boolean';
};

const envVariableTypes: EnvVariableTypes = {
  BOT_TOKEN: 'string',

  // Add more variables and their types as needed
};
export const envSetup = () => {
  const envVariables = Object.keys(envVariableTypes);

  envVariables.forEach(envVariable => {
    if (!process.env[envVariable]) {
      throw new Error(`Environment variable ${envVariable} is not set`);
    }

    const expectedType = envVariableTypes[envVariable];
    const envValue = process.env[envVariable];

    if (typeof envValue !== expectedType) {
      throw new Error(`Environment variable ${envVariable} is not of type ${expectedType}`);
    }
  });
};

