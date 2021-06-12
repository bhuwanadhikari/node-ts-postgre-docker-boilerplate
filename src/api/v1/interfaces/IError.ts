export interface IErrors {
  [key: string]: string;
}
export interface IResponseError {
  success: boolean;
  errors: IErrors;
}
