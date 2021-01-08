import { PrivilegeExpression, PrivilegeValidationFunc } from './privilegeExpression'

export class ORClass implements PrivilegeExpression{
    private expressions: PrivilegeExpression[] | string[]

    constructor(...expressions: PrivilegeExpression[] | string[]) {
        this.expressions = expressions
    }
    
    excecute(validationFunc: PrivilegeValidationFunc): boolean{
        let result = false
        for(const expression of this.expressions) {
            result = result || validationFunc(expression)
        }
        return result
    }
}

export function OR(...expressions: PrivilegeExpression[] | string[]): ORClass { return new ORClass(...expressions)}