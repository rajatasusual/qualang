import { Survey } from "./definitions/survey";
import * as fs from 'fs';
import * as path from 'path';

export const parse = async (surveyFile: string) => {
    const surveyText = fs.readFileSync(path.join(__dirname, surveyFile), {
        encoding: 'utf-8',
    });
    const survey = getSurvey(surveyText);
    return survey;
}

const getSurvey = (surveyText: string) => {
    surveyText.split('\n').forEach(line => {
        console.log(line)
    });

    return surveyText;
}

parse('survey.qualang')

