db.getSiblingDB('interns')
db.createUser({
    user: 'intern_db_admin',
    pwd: 'admin',
    roles: [
        {
            role: 'dbOwner',
            db: 'interns'
        }
    ],
    mechanisms: ['SCRAM-SHA-256']
})
