import { registerAs } from '@nestjs/config';

export default registerAs(
    'push',
    (): Record<string, string | number | boolean | object> => ({
        firebase: {
            projectId: process.env.PROJECT_ID,
            privateKey: process.env.PRIVATE_KEY,
            clientEmail: process.env.CLIENT_EMAIL,
        },
    }),
);
