export type PrivilegeValidationFunc = (value: string | PrivilegeExpression) => boolean;

export abstract class PrivilegeExpression {
  abstract excecute(validationFunc: PrivilegeValidationFunc): boolean;
}