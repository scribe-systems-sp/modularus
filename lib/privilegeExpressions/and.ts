import { PrivilegeExpression, PrivilegeValidationFunc } from './privilegeExpression'

export class ANDClass implements PrivilegeExpression{
    private expressions: PrivilegeExpression[] | string[]

    constructor(...expressions: PrivilegeExpression[] | string[]) {
        this.expressions = expressions
    }
    
    excecute(validationFunc: PrivilegeValidationFunc): boolean{
        let result = true
        for(const expression of this.expressions) {
            result = result && validationFunc(expression)
            if (!result) return false
        }
        return result
    }
}

export function AND(...expressions: PrivilegeExpression[] | string[]): ANDClass { return new ANDClass(...expressions) }