const baseResponse = <T = unknown>(data: T, code?: number, success = true, msg?: string) => ({
  code: code ?? 0,
  success,
  msg: msg ?? 'success',
  data,
});
export default baseResponse;
