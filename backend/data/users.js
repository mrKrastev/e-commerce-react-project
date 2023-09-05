import bcrypt from 'bcryptjs';

const users = [
    {
     name: 'Admin User',
     email: 'admin@admin.com',
     password: bcrypt.hashSync('12345678', 10),
     isAdmin: true,
    },
    {
     name: 'John Smith',
     email: 'john.smith@email.com',
     password: bcrypt.hashSync('12345678', 10),
     isAdmin: false,
    },
    {
     name: 'Emma Stone',
     email: 'emma.stone@email.com',
     password: bcrypt.hashSync('12345678', 10),
     isAdmin: false,
    },
]

export default users;