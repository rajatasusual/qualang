import * as CONST from "./block_enums"

export interface Block {
    BlockElements: BlockElement[][]
    Type: string
    SubType: string
    ID: string
    Description: string
    LibraryID: string
    ReferencedBlockID: string
    Options: Options
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



export interface Options {
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
