export class SView {
    icon: string
    neededPrivileges: Array<String>
    translationKey: string
    priority: number
    routeKey: string
    componentName: string
    parentKey: string
    
    constructor(icon: string, translationKey: string, routeKey: string, priority: number, privileges: Array<String>, componentName: string, parentKey: string) {
        this.icon = icon
        this.translationKey = translationKey
        this.priority = priority
        this.neededPrivileges  = privileges
        this.routeKey = routeKey
        this.componentName = componentName
        this.parentKey = parentKey
    }

}