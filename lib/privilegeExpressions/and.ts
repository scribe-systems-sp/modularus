import { PrivilegeExpression, PrivilegeValidationFunc } from './privilegeExpression'

export class ANDClass implements PrivilegeExpression{
    private expressions: PrivilegeExpression[] | string[]

    constructor(...expressions: PrivilegeExpression[] | string[]) {
        this.expressions = expressions
    }
    
    excecute(validationFunc: PrivilegeValidationFunc): boolean{
        let result = true
        for(const expression of this.expressions) {
            if (typeof expression === 'string' || expression instanceof String) {
                result = result && validationFunc(<string>expression)
            } else {
                result = result && (<PrivilegeExpression>expression).excecute(validationFunc)
            }
            if (!result) return false
        }
        return result
    }
}

export function AND(...expressions: PrivilegeExpression[] | string[]): ANDClass { return new ANDClass(...expressions) }