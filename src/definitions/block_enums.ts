export enum Condition {
    Selected,
    NotSelected,
    Displayed,
    NotDisplayed,
    GreaterThan,
    LessThan,
    GreaterThanOrEqual,
    LessThanOrEqual,
    EqualTo,
    NotEqualTo,
    Empty,
    NotEmpty,
    ClickedIn,
    NotClickedIn,
    Uploaded,
    NotUploaded,
    Contains,
    DoesNotContain,
    MatchesRegex
}

export enum BlockVisibility {
    Collapsed = "Collapsed",
    Expanded = "Expanded"
}

export enum RandomizeQuestions {
    false,
    RandomWithXPerPage,
    RandomWithOnlyX,
    Advanced
}

export enum Looping {
    None,
    Static,
    Question
}

export enum RandomizationOptions {
    None,
    Subset,
    All
}