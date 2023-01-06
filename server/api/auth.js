// auth.js
const router = require('express').Router()
const bcrypt = require('bcrypt')
const fs = require('fs')

const findUserByUsername = (username) => {
    const users = JSON.parse(fs.readFileSync('users.json'))[0]

    const user = users.find((usr) => usr.username === username)
    console.log(`RESULT: ${user}`)
    return user
}

router.post('/login', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    const { username, password } = req.body
    const user = findUserByUsername(username)
    if (!user) {
        console.log('Invalid name creds')
        return res.status(401).send('Invalid username or password')
    }

    // Naive implementation for demo purposes
    console.log(password + 'Invalid creds' + user.password)
    if (user.password === password) {
        res.cookie('user', user.id, { httpOnly: true })
        console.log('SUcess!!!!!!!')
        res.json(user)
    } else {
        console.log('Invalid pass creds')
        res.status(401).send('Invalid credentials Provided')
    }

    // bcrypt.compare(password, user.password, (err, result) => {
    //   if (err || !result) {
    //     return res.status(401).send('Invalid username or password');
    //   }
    //   res.cookie('user', user.id, {httpOnly: true});
    //   res.json(user);
    // });
})

router.post('/register', (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).send('Username and password are required')
    }
    const users = JSON.parse(fs.readFileSync('users.json'))
    if (findUserByUsername(username)) {
        return res.status(400).send('Username already exists')
    }
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).send('Error hashing password')
        }
        const newUser = {
            id: users.length + 1,
            username,
            password: hash,
        }
        users.push(newUser)
        fs.writeFileSync('users.json', JSON.stringify(users))
        res.json(newUser)
    })
})

module.exports = router
