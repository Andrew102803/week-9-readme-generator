const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            // if error it sends report
            if (err) {
                reject(err); 
                // return out of the function here to make sure the Promise doesn't execute the resolve() function
                return;
            }

            // resolve issue
            resolve({
                //messgae display
                ok: true,
                message: 'Congratulations your READMe file has been created!'
            });
        });
    });
};


module.exports = { writeFile };
