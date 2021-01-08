export { SPage } from "./SPage"
export { SView } from "./SView"
export { SApi } from "./SApi"
import { UserContext as UC } from "./UserContext"
export type UserContext = UC;
import { Modularus as MRS } from "./Modularus"
export type Modularus = MRS;
export { ModularusComponent } from "./ModularusComponent"
export { ModularusModule } from "./ModularusModule"

export { PrivilegeExpression } from './privilegeExpressions/privilegeExpression'
import { PrivilegeValidationFunc as PVF } from './privilegeExpressions/privilegeExpression'
export type PrivilegeValidationFunc = PVF;
export { AND } from './privilegeExpressions/and'
export { OR } from './privilegeExpressions/or'
export { NOT } from './privilegeExpressions/not'
export { FUNC } from './privilegeExpressions/func'
import { ValidationFunc as VF } from './privilegeExpressions/func'
export type ValidationFunc = VF;