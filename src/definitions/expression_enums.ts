export enum LogicType {
    OrgHierarchyUnits,
    OrgHierarchyMetadata,
    Relationship,
    Quota,
    PanelData,
    LoopAndMerge
}

export enum OrgHierarchyUnitsOperator {
    EqualTo,
    NotEqualTo,
    Empty,
    NotEmpty,
    GreaterThan,
    GreaterThanOrEqual,
    LessThan,
    LessThanOrEqual,
    Contains,
    DoesNotContain,
    MatchesRegex,
    Is,
    IsNot,
    In,
    InOrBelow,
    SameAsSubject
}

export enum RelationshipOperator {
    EqualTo,
    NotEqualTo,
    Empty,
    NotEmpty,
    GreaterThan,
    GreaterThanOrEqual,
    LessThan,
    LessThanOrEqual,
    Contains,
    DoesNotContain,
    MatchesRegex,
    Is,
    IsNot,
    In,
    InOrBelow,
    SameAsSubject
}

export enum QuotaOperator {
    QuotaMet,
    QuotaNotMet,
    GreaterThan,
    GreaterThanOrEqual,
    LessThan,
    LessThanOrEqual,
    EqualTo,
    NotEqualTo
}


export enum QuestionOperator {
    Selected,
    NotSelected,
    EqualTo,
    NotEqualTo,
    Empty,
    NotEmpty,
    Displayed,
    NotDisplayed,
    GreaterThan,
    GreaterThanOrEqual,
    LessThan,
    LessThanOrEqual,
    Contains,
    DoesNotContain,
    MatchesRegex,
    IsNot,
    Uploaded,
    NotUploaded,
    PDF,
    Document,
    ClickedIn,
    NotClickedIn,
    Extensions,
    Graphic,
    Spreadsheet
}

export enum PanelDataOperator {
    EqualTo,
    NotEqualTo,
    Empty,
    NotEmpty,
    GreaterThan,
    GreaterThanOrEqual,
    LessThan,
    LessThanOrEqual,
    Contains,
    DoesNotContain,
    MatchesRegex,
    Is,
    IsNot,
    In,
    InOrBelow,
    SameAsSubject
}

export enum GeoIPLeftOperand {
    "loc://PostalCode",
    "loc://City",
    "loc://Region",
    "loc://AreaCode",
    "loc://CountryName",
    "loc://CountryCode",
    "LocationMap"
}

export enum GeoIPOperator {
    EqualTo,
    NotEqualTo,
    Empty,
    NotEmpty,
    GreaterThan,
    GreaterThanOrEqual,
    LessThan,
    LessThanOrEqual,
    Contains,
    DoesNotContain,
    MatchesRegex,
    Is,
    IsNot,
    In,
    InOrBelow,
    SameAsSubject
}

export enum LoopAndMergeOperator {
    EqualTo,
    NotEqualTo,
    Empty,
    NotEmpty,
    GreaterThan,
    GreaterThanOrEqual,
    LessThan,
    LessThanOrEqual,
    Contains,
    DoesNotContain,
    MatchesRegex,
    Is,
    IsNot,
    In,
    InOrBelow,
    SameAsSubject
}

export enum EvaluatorMetadataOperator {
    EqualTo,
    NotEqualTo,
    Empty,
    NotEmpty,
    GreaterThan,
    GreaterThanOrEqual,
    LessThan,
    LessThanOrEqual,
    Contains,
    DoesNotContain,
    MatchesRegex,
    Is,
    IsNot,
    In,
    InOrBelow,
    SameAsSubject
}

export enum EmbeddedDataOperator {
    EqualTo,
    NotEqualTo,
    Empty,
    NotEmpty,
    GreaterThan,
    GreaterThanOrEqual,
    LessThan,
    LessThanOrEqual,
    Contains,
    DoesNotContain,
    MatchesRegex,
    Is,
    IsNot,
    In,
    InOrBelow,
    SameAsSubject
}

export enum DeviceTypeLeftOperand {
    mobile,
    Mobile,
    blackberry,
    android,
    ipad,
    iphone,
    ipod,
    opera,
    palm,
    windows,
    generic
}