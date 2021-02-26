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

        let sta1 = true;;

        for (const item in obj) {
            if (obj[item] === undefined) {
                sta1 = false;
            }
        }


        let arrayAuthors = obj.find(item => {
            item.authors.isArray();
        });

        let arrayTags = obj.find(item => {
            item.tags.isArray();
        });

        if (sta1 && arrayAuthors && arrayTags) {
            return true;

        }

        return false;

    }
}


// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    Project,
    Projects
};