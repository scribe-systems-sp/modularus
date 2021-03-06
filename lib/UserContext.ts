import { PrivilegeExpression } from './privilegeExpressions/privilegeExpression'

export interface UserContext {
    privileges: Array<String>
    name: String
    additionalInformations: Map<String, any>
    token: String

    addPrivilege(privilege: String): void
    putInformation(key: String, value: any): void
    hasPrivilege(privilege: string | PrivilegeExpression): boolean
}
