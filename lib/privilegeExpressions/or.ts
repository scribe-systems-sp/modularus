import { PrivilegeExpression, PrivilegeValidationFunc } from './privilegeExpression'

export class ORClass implements PrivilegeExpression{
    private expressions: PrivilegeExpression[] | string[]

    constructor(...expressions: PrivilegeExpression[] | string[]) {
        this.expressions = expressions
    }
    
    excecute(validationFunc: PrivilegeValidationFunc): boolean{
        let result = false
        for(const expression of this.expressions) {
            if (typeof expression === 'string' || expression instanceof String) {
                result = result || validationFunc(<string>expression)
            } else {
                result = result || (<PrivilegeExpression>expression).excecute(validationFunc)
            }
            if (result) return true
        }
        return result
    }
}

export function OR(...expressions: PrivilegeExpression[] | string[]): ORClass { return new ORClass(...expressions)}