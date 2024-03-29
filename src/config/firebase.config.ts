import { registerAs } from '@nestjs/config';

export default registerAs(
    'firebase',
    (): Record<string, string | number | boolean | object> => ({
        notification: {
            projectId: process.env.FIREBASE_PROJECT_ID,
            privateKey: process.env.FIREBASE_PRIVATE_KEY,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        },
    }),
);
