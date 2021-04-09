const router = require('express').Router();
const User = require('../models/User');

const { createToken, hashPassword, verifyPassword } = require('./util');

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    }).lean();

    if (!user) {
      return res.status(403).json({
        message: 'Wrong email or password.',
      });
    }

    const passwordValid = await verifyPassword(password, user.password);

    if (passwordValid) {
      const { password, ...rest } = user;
      const userInfo = Object.assign({}, { ...rest });

      const token = createToken(userInfo);

      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;

      res.json({
        message: 'Login successful!',
        token,
        userInfo,
        expiresAt,
      });
    } else {
      res.status(403).json({
        message: 'Wrong email or password.',
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Something went wrong.' });
  }
});

app.post('/signup', async (req, res) => {
  try {
    const { email } = req.body;

    const hashedPassword = await hashPassword(req.body.password);

    const userData = {
      email: email.toLowerCase(),
      password: hashedPassword,
    };

    const existingEmail = await User.findOne({
      email: userData.email,
    }).lean();

    if (existingEmail) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser = new User(userData);
    const savedUser = await newUser.save();

    if (savedUser) {
      const token = createToken(savedUser);
      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;

      const { email } = savedUser;

      const userInfo = { email };

      return res.json({
        message: 'User created!',
        token,
        userInfo,
        expiresAt,
      });
    } else {
      return res.status(400).json({
        message: 'There was a problem creating your account',
      });
    }
  } catch (err) {
    return res.status(400).json({
      message: 'There was a problem creating your account',
    });
  }
});
