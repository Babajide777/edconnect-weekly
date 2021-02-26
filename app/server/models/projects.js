const DataModel = require('./data_model');

class Project {
    constructor(id, name, abstract, authors, tags, createdBy) {
        this.id = id;
        this.name = name;
        this.abstract = abstract;
        this.authors = authors;
        this.tags = tags;
        this.createdBy = createdBy;

    }
}

class Projects extends DataModel {
    validate(obj) {
        // The authors and tags properties are arrays
        // Validate that the none of the provided properties are empty
        // The method should return true if all of the tests pass and false otherwise
        let sta1 = true;
        for (const item in obj) {
            if (obj[item] === undefined || obj[item] === null) {
                sta1 = false;
            }
        }

        let arrayAuthors = Array.isArray(obj.authors);
        let arrayTags = Array.isArray(obj.tags);

        if (arrayAuthors === true && arrayTags === true) {
            if (sta1 === true) {
                return true;
            }
        }
        return false;

        //return ((sta1 === false && arrayAuthors && arrayTags) ? true : false);
    }
}


// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    Project,
    Projects
};