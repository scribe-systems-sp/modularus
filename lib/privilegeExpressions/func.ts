import { PrivilegeExpression, PrivilegeValidationFunc } from './privilegeExpression'

export type ValidationFunc = (value: string | PrivilegeExpression) => boolean;

export class FUNCClass implements PrivilegeExpression{
    private validationFunc: ValidationFunc
    private expressions: PrivilegeExpression | string

    constructor(expressions: PrivilegeExpression | string, validationFunc: ValidationFunc) {
        this.validationFunc = validationFunc
        this.expressions = expressions
    }
    
    excecute(): boolean{
        return this.validationFunc(this.expressions)
    }
}

export function FUNC(expressions: PrivilegeExpression | string, validationFunc: ValidationFunc): FUNCClass { return new FUNCClass(expressions, validationFunc) }