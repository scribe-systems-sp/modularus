import { PrivilegeExpression, PrivilegeValidationFunc } from './privilegeExpression'

export class NOTClass implements PrivilegeExpression{
    private expressions: PrivilegeExpression | string

    constructor(expressions: PrivilegeExpression | string) {
        this.expressions = expressions
    }
    
    excecute(validationFunc: PrivilegeValidationFunc): boolean{
        return ! validationFunc(this.expressions)
    }
}

export function NOT(expressions: PrivilegeExpression | string): NOTClass { return new NOTClass(expressions) }