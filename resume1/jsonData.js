const fs = require('fs');
function pathResumeInfo(url) {

    try {    
        const fileData = fs.readFileSync(url, 'utf-8');
        if (fileData == "") {
            throw "File is Empty";
        }
        console.log(fileData)
        const jsonData = JSON.parse(fileData);
        fs.writeFileSync('realInfo.json', JSON.stringify(jsonData, null, 2));  // Write the parsed JSON data to the file
    } catch (error) {
        console.log(error);
    }
}

function urlLinkInfo(url) {
    let settings = { method: "Get" };

    fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            fs.writeFileSync('realInfo.json', JSON.stringify(json, null, '\t'));
        });
}

module.exports = {pathResumeInfo, urlLinkInfo};