import { Block } from "./block"

import { Question } from "./question"

import * as CONST from "./survey_enums"

export class Survey {
    QuestionCount: string
    SurveyOptions: SurveyOptions
    SurveyID: string
    SurveyName: string
    SurveyStatus: string
    LastModified: string
    BrandID: string
    OwnerID: string
    DivisionID: string
    LastAccessed: any
    CreatorID: string
    LastActivated: any
    Questions: Questions
    Blocks: Blocks
    ResponseSets: ResponseSets
    SurveyFlow: SurveyFlow
    Scoring: Scoring
    ProjectInfo: ProjectInfo
    BrandBaseURL: string
    MappedValues: Set<string>

    constructor() {
        this.QuestionCount = '0'
        this.SurveyOptions = new SurveyOptions()
        this.SurveyID = ''
        this.SurveyName = ''
        this.SurveyStatus = ''
        this.LastModified = ''
        this.BrandID = ''
        this.OwnerID = ''
        this.DivisionID = ''
        this.LastAccessed = ''
        this.CreatorID = ''
        this.LastActivated = ''
        this.Questions = new Questions()
        this.Blocks = new Blocks()
        this.ResponseSets = new ResponseSets()
        this.SurveyFlow = new SurveyFlow()
        this.Scoring = new Scoring()
        this.ProjectInfo = new ProjectInfo()
        this.BrandBaseURL = ''

        this.MappedValues = new Set<string>();
    }

    set(string: string, value: any) {
        switch (string) {
            case 'SurveyName':
                this.SurveyName = value;
                this.MappedValues.add('SurveyName');
        }
    }

}

export class SurveyOptions {
    BackButton: boolean
    SaveAndContinue: string
    AnonymizeResponse: CONST.YesNo
    Autofocus: boolean
    Autoadvance: boolean
    AutoadvancePages: boolean
    AvailableLanguages: CONST.SurveyLanguage[]
    SurveyProtection: CONST.SurveyProtection
    BallotBoxStuffingPrevention: boolean
    BallotBoxStuffingPreventionBehavior: CONST.BallotBoxStuffingPreventionBehavior
    BallotBoxStuffingPreventionMessage: string
    BallotBoxStuffingPreventionMessageLibrary: string
    BallotBoxStuffingPreventionURL: string
    CollectGeoLocation: boolean
    CustomStyles: string
    EmailThankYou: boolean
    EOSMessage: string
    EOSRedirectURL: string
    ExternalCSS: string
    headerMid: string
    Header: string
    footerMid: string
    Footer: string
    InactiveSurvey: string
    InactiveMessage: string
    InactiveMessageLibrary: string
    NoIndex: CONST.YesNo
    nextButtonMid: string
    previousButtonMid: string
    PageTransition: CONST.PageTransition
    SurveyExpiration: string
    SurveyTermination: CONST.SurveyTermination
    ProgressBarDisplay: CONST.ProgressBarDisplay
    PartialData: CONST.PartialData
    PartialDataCloseAfter: CONST.PartialDataCloseAfter
    Password: string
    PasswordProtection: CONST.YesNo
    ValidationMessage: string
    PreviousButton: string
    NextButton: string
    QuestionsPerPage: number
    RecaptchaV3: boolean
    RefererCheck: CONST.YesNo
    RefererURL: string
    ResponseSummary: CONST.YesNo
    SecureResponseFiles: boolean
    SkinLibrary: string
    SkinType: string
    Skin: Skin
    NewScoring: number
    SurveyLanguage: CONST.SurveyLanguage
    SurveyTitle: string
    ThankYouEmailMessage: string
    ValidateMessage: boolean
    ThankYouEmailMessageLibrary: string
    SurveyMetaDescription: string
    ActiveResponseSet: string
    SurveyStartDate: Date
    SurveyExpirationDate: Date
    SurveyCreationDate: string

    constructor() {
        this.ActiveResponseSet = ''
        this.SurveyStartDate = new Date()
        this.SurveyExpirationDate = new Date()
        this.SurveyCreationDate = ''
        this.SurveyTermination = CONST.SurveyTermination.DefaultMessage
        this.SurveyLanguage = CONST.SurveyLanguage.EN
        this.CustomStyles = ''
        this.SecureResponseFiles = false
    }
}



export class Skin {
    brandingId: any
    templateId: string
    overrides: any
}

export class Questions {
    [key: string]: Question
}

export class Blocks {
    [key: string]: Block
}

export class BlockElement {
    Type: string
    QuestionID: string
}

export class ResponseSets {
    RS_9StC05LnuKmpcI5: string
}

export class SurveyFlow {
    Flow: Flow[]
    Properties: Properties
    FlowID: string
    Type: CONST.SurveyFlowType
}



export class Flow {
    ID: string
    Type: string
    FlowID: string
}

export class Properties {
    Count: number
}

export class Scoring {
    ScoringCategories: any[]
    ScoringCategoryGroups: any[]
    ScoringSummaryCategory: any
    ScoringSummaryAfterQuestions: number
    ScoringSummaryAfterSurvey: number
    DefaultScoringCategory: any
    AutoScoringCategory: any
}

export class ProjectInfo {
    SurveyID: string
    ProjectCategory: string
    ProjectType: any
    CompositionType: any
    ContentBundle: any
}
