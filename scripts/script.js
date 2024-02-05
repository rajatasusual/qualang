//read reference.qsf as JSON
const fs = require('fs')
const path = require('path')

const reference = JSON.parse(fs.readFileSync(path.join(__dirname, 'reference.qsf'), 'utf8'));
let SurveyElements = [];
reference.SurveyElements.forEach(element => {
    if(element.Element != 'NT') {
        SurveyElements.push(element);
    }
});

reference.SurveyElements = SurveyElements;

fs.writeFileSync(path.join(__dirname, 'reference.qsf'), JSON.stringify(reference), 'utf8')