const jsonData = require('./jsonData.js');
const createResume = require('./resume.js');

try {
    const args = process.argv.slice(2);
//https://raw.githubusercontent.com/itsspyner/resume-generator/main/resume/resumeInfo.json
let jsonPath = args[0];
let outputPath = args[1];

if (jsonPath.includes('https') || jsonPath.includes('http')) {
    jsonData.urlLinkInfo(jsonPath);
} else {
    jsonData.pathResumeInfo(jsonPath);
}

if (typeof(outputPath) == 'undefined' || !outputPath.includes('.pdf')) {
    throw 'Please provide a genuene directory with the pdf file and .pdf extension';
}

createResume.resume('realInfo.json',outputPath);
} catch (error) {
    console.log(error);
}

