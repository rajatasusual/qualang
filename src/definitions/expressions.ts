import * as CONST from "./expression_enums"

export interface Expression {
    LogicType: CONST.LogicType
}

export interface OrgHierarchyUnitsExpression extends Expression {
    Description: string
    LogicType: CONST.LogicType
    Operator: CONST.OrgHierarchyUnitsOperator
    OrgHierarchyID: string
    Type: string
    UnitID: string
    UnitName: string
}

export interface RelationshipExpression extends Expression {
    LogicType: CONST.LogicType
    Description: string
    LeftOperand: string
    Operator: CONST.RelationshipOperator
    RightOperand: string
    Type: string
}

export interface QuotaExpression extends Expression {
    LogicType: CONST.LogicType
    Description: string
    LeftOperand: string
    Operator: CONST.QuotaOperator
    QuotaID: string
    QuotaName: string
    QuotaType: string
    SubQuotaID: string
    Type: string
}

export interface QuestionExpression extends Expression {
    LogicType: CONST.LogicType
    ChoiceLocator: string
    LeftOperand: string
    Operator: CONST.QuestionOperator
    QuestionID: string
    QuestionIDFromLocator: string
    Type: string
}

export interface PanelDataExpression extends Expression {
    Description: string
    LeftOperand: string
    LogicType: CONST.LogicType
    Operator: CONST.PanelDataOperator
    RightOperand: string
    Type: string
}

export interface GeoIPExpression extends Expression {
    LogicType: CONST.LogicType
    Description: string
    LeftOperand: CONST.GeoIPLeftOperand
    Operator: CONST.GeoIPOperator
    RightOperand: string
    Type: string
}

export interface OrgHierarchyMetadata {
    Description: string
    Field: string
    LogicType: CONST.LogicType
    Operator: string
    OrgHierarchyDef: OrgHierarchyDef
    OrgHierarchyID: string
    Type: string
    Value: string
}

export interface OrgHierarchyDef {
    Fields: Fields
    ID: string
    Type: string
}

export interface Fields {
    Division: Division
    TeamLead: TeamLead
}

export interface Division {
    [key: string]: string
}

export interface TeamLead {
    [key: string]: string
}

export interface LoopAndMergeExpression extends Expression {
    LogicType: CONST.LogicType
    Description: string
    LeftOperand: string
    Operator: CONST.LoopAndMergeOperator
    RightOperand: string
    Type: string
}

export interface EvaluatorMetadataExpression extends Expression {
    LogicType: CONST.LogicType
    Description: string
    LeftOperand: string
    Operator: CONST.EvaluatorMetadataOperator
    PersonMeta: string
    RightOperand: string
    SameAsSubjectRightOperand: string
    Type: string
}

export interface EmbeddedDataExpression extends Expression {
    LogicType: CONST.LogicType
    Description: string
    Operator: CONST.EmbeddedDataOperator
    LeftOperand: string
    RightOperand: string
    Type: string
}

export interface DeviceTypeExpression extends Expression {
    LogicType: CONST.LogicType
    Description: string
    LeftOperand: CONST.DeviceTypeLeftOperand
    Operator: string
    Type: string
}
