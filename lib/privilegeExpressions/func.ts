import { PrivilegeExpression, PrivilegeValidationFunc } from './privilegeExpression'

export type ValidationFunc = (value: string | PrivilegeExpression) => Promise<boolean>;

export class FUNC implements PrivilegeExpression{
    private validationFunc: ValidationFunc
    private expressions: PrivilegeExpression | string

    constructor(expressions: PrivilegeExpression | string, validationFunc: ValidationFunc) {
        this.validationFunc = validationFunc
        this.expressions = expressions
    }
    
    async excecute(): Promise<boolean>{
        return await this.validationFunc(this.expressions)
    }
}