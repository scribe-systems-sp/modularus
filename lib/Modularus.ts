import { ModularusModule } from "./ModularusModule";

export interface Modularus {
    externals: any 
    baseURL: string
    loadModule(module: ModularusModule): Promise<boolean>
    loadModules(): Promise<boolean>
    addExternal(externalDependency: any, name: string): boolean
}