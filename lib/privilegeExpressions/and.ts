import { PrivilegeExpression, PrivilegeValidationFunc } from './privilegeExpression'

export class AND implements PrivilegeExpression{
    private expressions: PrivilegeExpression[] | string[]

    constructor(...expressions: PrivilegeExpression[] | string[]) {
        this.expressions = expressions
    }
    
    async excecute(validationFunc: PrivilegeValidationFunc): Promise<boolean>{
        let result = true
        for(const expression of this.expressions) {
            if (typeof expression === 'string' || expression instanceof String) {
                result = result && validationFunc(<string>expression)
            } else {
                result = result && await (<PrivilegeExpression>expression).excecute(validationFunc)
            }
            if (!result) return false
        }
        return result
    }
}