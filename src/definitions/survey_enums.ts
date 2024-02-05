export enum SurveyTermination {
    DefaultMessage,
    DisplayMessage,
    DisplayResult,
    ResponseSummary,
    Redirect,
    null
}

export enum PartialData {
    "No",
    "+1 hour",
    "+4 hour",
    "+1 day",
    "+2 days",
    "+3 days",
    "+1 week",
    "+2 weeks",
    "+1 month",
    "+3 months",
    "+6 months",
    "+1 year"
}

export enum PartialDataCloseAfter {
    LastActivity,
    SurveyStart
}

export enum SurveyProtection {
    PublicSurvey,
    ByInvitation,
    PasswordProtected
}

export enum PageTransition {
    None,
    Slide,
    Fade,
    Flip,
    Barrel
}

export enum ProgressBarDisplay {
    None,
    Text,
    NoText,
    VerboseText
}

export enum BallotBoxStuffingPreventionBehavior {
    default,
    DefaultMessage,
    DisplayMessage,
    Redirect,
    Continue,
    null
}

export enum YesNo {
    "Yes" = "Yes",
    "No" = "No"
}

export enum SurveyLanguage {
    AR,
    ASM,
    "AZ-AZ",
    BEL,
    BG,
    BN,
    BS,
    CA,
    CEB,
    CH,
    CS,
    CY,
    DA,
    DE,
    EL,
    EN_GB,
    "EN-US",
    EN,
    EO,
    "ES-ES",
    ES,
    ET,
    FA,
    FI,
    "FR-CA",
    FR,
    GU,
    HE,
    "HE-ZA",
    HI,
    HIL,
    HR,
    HU,
    HYE,
    ID,
    ISL,
    IT,
    JA,
    KAN,
    KAT,
    KAZ,
    KM,
    KO,
    LT,
    LV,
    MAL,
    MAR,
    MK,
    MN,
    MS,
    MY,
    NL,
    NO,
    ORI,
    "PA-IN",
    PL,
    "PT-BR",
    PT,
    RO,
    RU,
    SIN,
    SK,
    SL,
    SQI,
    "SR-ME",
    SR,
    SV,
    SW,
    TA,
    TEL,
    TGL,
    TH,
    TR,
    UK,
    UR,
    VI,
    "ZH-S",
    "ZH-T"
}

export enum SurveyFlowType {
    Authenticator,
    Block,
    BlockRandomizer,
    Branch,
    Conjoint,
    EmbeddedData,
    EndSurvey,
    Group,
    QuotaCheck,
    ReferenceSurvey,
    Root,
    Standard,
    SupplementalData,
    TableOfContents,
    WebService
}

