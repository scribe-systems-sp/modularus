import { ModularusModule } from "./ModularusModule";

export interface Modularus {
    externals: any 
    baseURL: string
    moduleContexts: Map<String, any>

    loadModule(module: ModularusModule): Promise<boolean>
    loadModules(): Promise<boolean>
    addExternal(externalDependency: any, name: string): boolean
    registerModuleContext(moduleName: string, context: any): void
}