/**
 * [getToken 获取 localStorage token]
 * @return [string|null]
 */
export function getToken(): string|null {
  const token = window.localStorage.token;
  if (token && token !== 'null') {
    return token;
  }
  return null;
}

/**
 * [removeToken 删除 localStorage token]
 */
export function removeToken(): void {
  window.localStorage.removeItem('token');
}
