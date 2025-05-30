import { createHash } from './index.js';

export const generateMockUsers = async (numUsers) => {
    const users = [];
    const hashedPassword = await createHash('coder123');

    for (let i = 0; i < numUsers; i++) {
        users.push({
            _id: `mockUserId${i}_${Date.now()}`,
            first_name: `MockUser${i}`,
            last_name: `LastName${i}`,
            email: `mockuser${i}@example.com`,
            password: hashedPassword,
            role: i % 2 === 0 ? 'user' : 'admin',
            pets: []
        });
    }
    return users;
};