export const isEmpty = (input: any): boolean => {
  if (
    input === null ||
    input === undefined ||
    (typeof input === "string" && input.length === 0) ||
    (typeof input === "object" && Object.keys(input).length === 0)
  )
    return true;
  else return false;
};
