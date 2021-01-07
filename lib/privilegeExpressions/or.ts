import { PrivilegeExpression, PrivilegeValidationFunc } from './privilegeExpression'

export class OR implements PrivilegeExpression{
    private expressions: PrivilegeExpression[] | string[]

    constructor(...expressions: PrivilegeExpression[] | string[]) {
        this.expressions = expressions
    }
    
    async excecute(validationFunc: PrivilegeValidationFunc): Promise<boolean>{
        let result = false
        for(const expression of this.expressions) {
            if (typeof expression === 'string' || expression instanceof String) {
                result = result || validationFunc(<string>expression)
            } else {
                result = result || await (<PrivilegeExpression>expression).excecute(validationFunc)
            }
            if (result) return true
        }
        return result
    }
}