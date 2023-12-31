const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your First Name'],
        lowercase: true
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your Last Name'],
        lowercase: true
    },
    email: {
        type: String,
        required: [true, 'Please enter an Email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid Email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a Password'],
        minlength: [6, 'Minimum password length is 6 characters']
    },
    position: {
        type: String,
        required: true,
        lowercase: true
    },
});

//Run function after info saved to db
userSchema.post('save', function(doc, next) {
    next();
})

//Run function before info is saved to db
userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

//Method to login user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });

    if(user) {
        const auth = await bcrypt.compare(password, user.password)
        if(auth) {
            return user;
        }
        throw Error('Password does not match');
    }
    throw Error('Email does not exist');
}

const auth = mongoose.connection.useDb('auth');

const UserInfo = auth.model('user', userSchema);

module.exports = UserInfo;