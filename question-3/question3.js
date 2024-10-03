const fs = require('fs');
const path = require('path');

function createLogFiles()
{
    const logDirectory = path.join(__dirname, 'log');
    fs.mkdirSync(logDirectory, { recursive: true });
    process.chdir(logDirectory);

    for (let fileCounter =0; fileCounter <= 9; fileCounter++) {
        let filename = 'log' + fileCounter + '.txt'
        let logtxt = filename + ' text'
        fs.writeFileSync(filename, logtxt, 'utf8', (err) => {
            if (err) {
                console.log('Error creating file ' + filename)
                return;
            }
        });
    }

    let allFilesInDirectory = fs.readdirSync(logDirectory);
    allFilesInDirectory.forEach((file) => {
        console.log(file);
      });
}

function removeLogFiles(){
    const logDirectory = path.join(__dirname, 'log');
    if (fs.existsSync(logDirectory)){
    process.chdir(logDirectory);
    let allFilesInDirectory = fs.readdirSync(logDirectory);
    allFilesInDirectory.forEach((file) => {
        console.log('delete files...' + file);
        fs.unlinkSync(file)
      });
    }
}
createLogFiles();
removeLogFiles();


