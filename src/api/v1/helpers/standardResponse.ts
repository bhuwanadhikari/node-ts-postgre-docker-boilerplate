export default (payload: string, success?: boolean, message?: string) => {
  return {
    success: success === false ? false : true,
    message: message || "",
    payload: payload,
  };
};
