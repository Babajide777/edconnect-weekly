const DataModel = require('./data_model');

class User {
    constructor(id, firstname, lastname, email, password, matricNumber, program, graduationYear) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.matricNumber = matricNumber;
        this.program = program;
        this.graduationYear = graduationYear;

    }

    getFullName() {

        return `${this.firstname} ${this.lastname}`

    }
}

class Users extends DataModel {
    authenticate(email, password) {

        // This should return true if the email and password combination is valid and false otherwise

        let valUser = this.data.find(item => item.email === email && item.password === password);


        return (valUser ? true : false);

    }

    getByEmail(email) {

        // This should return the User object with the specified email address if such a user is found
        // This should return null if no user with the specified email address is found

        let user = this.data.find(obj => {
            return obj.email === email;
        });

        return (user ? user : null);

    }

    getByMatricNumber(matricNumber) {

        // This should return the User object with the specified matric number if such a user is found
        // This should return null if no user with the specified matric number is found

        let user = this.data.find(item => {
            return item.matricNumber === matricNumber;
        });

        return (user ? user : null);

    }

    validate(obj) {

        // Validate that the none of the provided properties are empty
        // Validate that no user in the data array already has the specified email address
        // Validate that no user in the data array already has the specified matric number
        // Validate that the password is at least 7 characters in length
        // The method should return true if all of the tests pass and false otherwise

        let value = true

        for (const prop in obj) {
            if (obj[prop] === undefined || obj[prop] === null) {
                value = false;
            }
        }

        let valEmail = this.data.find(item => item.email === obj.email);
        let valMatric = this.data.find(item => item.matricNumber === obj.matricNumber);

        let passCheck = obj.password.length >= 7 ? true : false;

        return ((passCheck && valEmail && valMatric && value) ? true : false);


    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
};