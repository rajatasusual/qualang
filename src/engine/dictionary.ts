import { Survey } from "../definitions/survey"
import { Block } from "../definitions/block"

export const TOKENS = new Set<string>([
    "create",
    "set",
    "end"
])

export const OBJECTS = new Set<string>([
    "survey",
    "block"
])

export default class Dictionary {
    public static OBJECTS = OBJECTS
    public static TOKENS = TOKENS

    public static has(key: string) {
        key = key.toLowerCase();
        return Dictionary.OBJECTS.has(key)? "Object" : Dictionary.TOKENS.has(key)? "Token" : undefined;
    }

    public static load(key: string) {
        switch(key.toLocaleLowerCase()){
            case 'survey': return new Survey();
            case 'block': return new Block();
        }
    }
}