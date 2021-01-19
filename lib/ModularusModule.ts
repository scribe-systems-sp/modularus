import { SPage } from "./SPage";
import { SView } from "./SView";
import { SApi } from "./SApi";
import { ModularusComponent } from "./ModularusComponent";
import { SGlobal } from "./SGlobal";

export abstract class ModularusModule {
    components?: Array<ModularusComponent>;
    apis?: Array<SApi>;
    pages?: Array<SPage>;
    views?: Array<SView>;
    globals?: Array<SGlobal>;
    translations?: any;
    context: any = {};
    daemonize: boolean = false
    
    abstract get version(): string;
    abstract get name(): string;
    get changeLog(): string { return "" }

    beforeLoad() {

    }

    afterLoad() {

    }
}