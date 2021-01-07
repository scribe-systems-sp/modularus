export { SPage } from "./SPage"
export { SView } from "./SView"
export { SApi } from "./SApi"
import { UserContext as UC } from "./UserContext"
export type UserContext = UC;
import { Modularus as MRS } from "./Modularus"
export type Modularus = MRS;
export { ModularusComponent } from "./ModularusComponent"
export { ModularusModule } from "./ModularusModule"

export { PrivilegeExpression, PrivilegeValidationFunc } from './privilegeExpressions/privilegeExpression'
export { AND } from './privilegeExpressions/and'
export { OR } from './privilegeExpressions/or'
export { NOT } from './privilegeExpressions/not'
export { FUNC, ValidationFunc } from './privilegeExpressions/func'