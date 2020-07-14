export class SPage {
    icon: string
    neededPrivileges: Array<String>
    translationKey: string
    priority: number
    routeKey: string // must be unique
    layoutComponentName: string
    
    constructor(icon: string, translationKey: string, routeKey: string, priority: number, privileges: Array<String>, layoutComponentName: string = "MainLayout") {
        this.icon = icon
        this.translationKey = translationKey
        this.priority = priority
        this.neededPrivileges  = privileges
        this.routeKey = routeKey
        this.layoutComponentName = layoutComponentName
    }


}
