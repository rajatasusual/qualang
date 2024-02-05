export class Question {
    QuestionText: string
    DataExportTag: string
    QuestionType: string
    Selector: string
    SubSelector: string
    Configuration: Configuration
    QuestionDescription: string
    Choices: Choices
    ChoiceOrder: string[]
    Validation: Validation
    Language: any[]
    NextChoiceId: number
    NextAnswerId: number
    QuestionID: string
    QuestionText_Unsafe: string
}

export class Configuration {
    QuestionDescriptionOption: string
}

export class Choices {
    "": Choice
}

export class Choice {
    Display: string
}

export class Validation {
    Settings: Settings
}

export class Settings {
    ForceResponse: string
    ForceResponseType: string
    Type: string
}
