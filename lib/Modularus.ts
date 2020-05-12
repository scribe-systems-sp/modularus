import { ModularusModule } from "./ModularusModule";

export interface Modularus {
    externals: any 
    baseURL: string
    loadModule(module: ModularusModule): boolean
    loadModules(): Promise<boolean>
    addExternal(externalDependency: any): boolean
}