import * as fs from 'fs';
import * as path from 'path';

import Dictionary from './engine/dictionary';

const stack: any[] = [];

export const parse = async (surveyFile: string) => {
    const surveyText = fs.readFileSync(path.join(__dirname, surveyFile), {
        encoding: 'utf-8',
    });
    validateSurvey(surveyText);
    console.log('------------------------');
    if (stack.length > 0) {
        console.error('Stack not empty: ' + stack);
    }
}

const validateSurvey = (surveyText: string) => {
    let lineNumber: number = 0;
    stack.length = 0;
    
    surveyText.split('\n').forEach(line => {
        lineNumber++;
        try {
            analyse(line);
        } catch (error) {
            console.error(`Error on line ${lineNumber}: ${error}`);
        }
    });

    return surveyText;
}

const analyse = (line: string) => {
    let captureObject: Boolean = false;
    let captureProperty: Boolean = false;
    let propertyName: string = '';
    let capturePropertyValue: Boolean = false;

    line.split(' ').forEach(word => {
        word = word.trim();
        if (word === '') {
            return;
        }

        const wordType = Dictionary.has(word);
        
        if(captureObject) {
            if(wordType === 'Object') {
                stack.push(Dictionary.load(word));
                captureObject = false;
            } else {
                throw `expected object but received: ${word}`;
            }
        } else {
            if (wordType === 'Token') {
                word = word.toLocaleLowerCase();
                if (word === 'end') {
                    const obj = stack.pop();
                    obj.MappedValues.forEach((value: string | number) => {
                        console.log(`${obj.constructor.name}.${value} : ${obj[value]}`);
                    })
                } else if (word === 'create') {
                    captureObject = true;
                } else {
                    captureProperty = true;
                }
            } else {
                if (captureProperty) {
                    if (stack[stack.length - 1][word] == undefined) {
                        throw `unknown property: ${word} for object: ${stack[stack.length - 1].constructor.name}`;
                    } else {
                        propertyName = word;
                        captureProperty = false;
                        capturePropertyValue = true;
                    }
                } else if (capturePropertyValue) {
                    stack[stack.length - 1].set(propertyName, word);
                    capturePropertyValue = false;
                }
            }
        }
    });
}