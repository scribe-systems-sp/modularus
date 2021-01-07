export type PrivilegeValidationFunc = (value: string) => boolean;

export abstract class PrivilegeExpression {
  abstract excecute(validationFunc: PrivilegeValidationFunc): boolean;
}