import { SPage as SP, SPage } from "./SPage"
import { SView as SV} from "./SView"
import { SApi as SA} from "./SApi"
import { UserContext as UC } from "./UserContext"
import { Modularus as MRS } from "./Modularus"
import { ModularusComponent as MC } from "./ModularusComponent"
import { ModularusModule as MM } from "./ModularusModule"
import { PrivilegeExpression as PE } from './privilegeExpressions/privilegeExpression'
import { PrivilegeValidationFunc as PVF } from './privilegeExpressions/privilegeExpression'
import { AND as _AND } from './privilegeExpressions/and'
import { OR as _OR } from './privilegeExpressions/or'
import { NOT as _NOT } from './privilegeExpressions/not'
import { FUNC as _FUNC } from './privilegeExpressions/func'
import { ValidationFunc as VF } from './privilegeExpressions/func'

// Requires for sharing between modules
namespace Modularus{
    export type SPage = SP;
    export type SView = SV;
    export type SApi = SA;
    export type UserContext = UC;
    export type Modularus = MRS;
    export type ModularusComponent = MC;
    export type ModularusModule = MM;
    export type PrivilegeExpression = PE;
    export type PrivilegeValidationFunc = PVF;
    export const AND = _AND;
    export const OR = _OR;
    export const NOT = _NOT;
    export const FUNC = _FUNC;
    export type ValidationFunc = VF;
}

export default Modularus