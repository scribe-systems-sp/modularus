import { SPage } from "./SPage";
import { SView } from "./SView";
import { SApi } from "./SApi";
import { ModularusComponent } from "./ModularusComponent";

export abstract class ModularusModule {
    components?: Array<ModularusComponent>;
    apis?: Array<SApi>;
    pages?: Array<SPage>;
    views?: Array<SView>;
    translations?: any;
    daemonize: boolean = false
    
    abstract get version(): string;
    abstract get name(): string;


    beforeLoad() {

    }

    afterLoad() {

    }

}