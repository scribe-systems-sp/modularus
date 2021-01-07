import { PrivilegeExpression } from './privilegeExpressions/privilegeExpression'

export class SPage {
    icon: string
    neededPrivileges: Array<String | PrivilegeExpression>
    translationKey: string
    priority: number
    routeKey: string // must be unique
    layoutComponentName: string
    
    constructor(icon: string, translationKey: string, routeKey: string, priority: number, privileges: Array<String | PrivilegeExpression>, layoutComponentName: string = "MainLayout") {
        this.icon = icon
        this.translationKey = translationKey
        this.priority = priority
        this.neededPrivileges  = privileges
        this.routeKey = routeKey
        this.layoutComponentName = layoutComponentName
    }
}
