import * as CONST from "./block_enums"

export class Block {
    BlockElements: BlockElement[][]
    Type: string
    SubType: string
    ID: string
    Description: string
    LibraryID: string
    ReferencedBlockID: string
    Options: Options
    MappedValues: Set<string>

    constructor() {
        this.Type = 'Standard'
        this.SubType = ''
        this.Options = new Options()
        this.BlockElements = [[]]
        this.ID = ''
        this.Description = ''
        this.LibraryID = ''
        this.ReferencedBlockID = ''

        this.MappedValues = new Set<string>();

    }

    set(string: string, value: any) {
        switch (string) {
            case 'ID':
                this.ID = value;
                this.MappedValues.add('ID');
        }
    }

}

export interface BlockElement {
    SkipLogic: SkipLogic
}

export interface SkipLogic {
    SkipLogicID: string
    ChoiceID: string
    ChoiceLocator: string
    Condition: CONST.Condition
    Description: string
    Locator: string
    QuestionID: string
    SkipToDescription: string
    SkipToDestination: string
}



export class Options {
    BlockLocking: boolean
    BlockPassword: string
    BlockVisiblity: CONST.BlockVisibility
    RandomizeQuestions: CONST.RandomizeQuestions
    Looping: CONST.Looping
    LoopingOptions: LoopingOptions
    Randomization: CONST.RandomizationOptions
    NextButton: string
    PreviousButton: string
    nextButtonLibraryID: string
    nextButtonMID: string
    previousButtonLibraryID: string
}

export interface LoopingOptions {
    ChoiceGroupLocator: string
    Locator: string
    QID: string
    Randomization: Randomization
    Static: Static
}

export interface Static {
    [key: string]: string;
}

export interface Property1 { }

export interface Property2 { }

export interface Randomization {
    Advanced: Advanced
    EvenPresentation: boolean
}

export interface Advanced {
    FixedOrder: any[]
    RandomizeAll: any[]
    RandomSubSet: any[]
    Undisplayed: any[]
}
