 const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/mail');
const Userschema = new mongoose.Schema({
  name1: String,
  name2: String,
  email: { type: String, unique: true },
  word1: String,
});
const User = mongoose.model('User',Userschema);
app.post('/name', (req, res) => {
const { name1, name2 } = req.body;
 res.json({ status: 'ok' });
});
app.post('/mail', async (req, res) => {
  const { email } = req.body;
  res.status(200).json({ message: "Email received" });
});
app.post('/password', async (req, res) => {
  const { name1, name2, email, word1 } = req.body;
  try {
    const existuser = await User.findOne({ email });
    if (existuser) {
      return res.json({ status: 'error', error: 'Email already registered' });
    }

    const hash = await bcrypt.hash(word1, 10);
    await User.create({ name1, name2, email, word1: hash });

    res.json({ status: 'ok', message: 'User Registered Successfully' });
  } catch (err) {
    res.json({ status: 'error', error: 'Registration failed!' });
  }
});
app.post('/home', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ status: 'ok', name1: user.name1 });
    } else {
      return res.json({ status: 'error', error: 'User not found' });
    }
  } catch (err) {
    res.json({ status: 'error', error: 'Server error' });
  }
});
app.post('/login/loginword', async (req,res) => {
     const {email,loginpassword} = req.body;
     const user = await User.findOne({ email });
     if(!user){
        return res.json({status:'error',error:'User not found'});
     }
     const isPasswordValid = await bcrypt.compare(loginpassword,user.word1);
     if(isPasswordValid){
        return res.json({status:'ok',message:'Login successful'});
     }
     else
     return res.json({status:'error',message:'Invalid password'});
});
app.listen(5000, () => console.log(' Server running on port 5000'));