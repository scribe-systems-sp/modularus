import { ModularusModule } from "./ModularusModule";

export interface Modularus {
    externals: any 
    baseURL: string
    loadModule(module: ModularusModule): boolean
    addExternal(externalDependency: any): boolean
}