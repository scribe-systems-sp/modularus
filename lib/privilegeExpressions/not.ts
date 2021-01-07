import { PrivilegeExpression, PrivilegeValidationFunc } from './privilegeExpression'

export class NOT implements PrivilegeExpression{
    private expressions: PrivilegeExpression | string

    constructor(expressions: PrivilegeExpression | string) {
        this.expressions = expressions
    }
    
    async excecute(validationFunc: PrivilegeValidationFunc): Promise<boolean>{
        if (typeof this.expressions === 'string' || this.expressions instanceof String) {
            return ! validationFunc(<string>this.expressions)
        } else {
            return ! await (<PrivilegeExpression>this.expressions).excecute(validationFunc)
        }
    }
}