import { PrivilegeExpression, PrivilegeValidationFunc } from './privilegeExpression'

export class NOTClass implements PrivilegeExpression{
    private expressions: PrivilegeExpression | string

    constructor(expressions: PrivilegeExpression | string) {
        this.expressions = expressions
    }
    
    excecute(validationFunc: PrivilegeValidationFunc): boolean{
        if (typeof this.expressions === 'string' || this.expressions instanceof String) {
            return ! validationFunc(<string>this.expressions)
        } else {
            return ! (<PrivilegeExpression>this.expressions).excecute(validationFunc)
        }
    }
}

export function NOT(expressions: PrivilegeExpression | string): NOTClass { return new NOTClass(expressions) }