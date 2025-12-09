const blacklist = new Map<string, number>();

/**
 * Add a jti to blacklist until expiration (exp is epoch seconds)
 */
export function addToBlacklist(jti: string, exp: number) {
  const expiresAt = exp * 1000; // convert to ms
  const ttl = expiresAt - Date.now();
  blacklist.set(jti, exp);
  if (ttl > 0) {
    setTimeout(() => {
      blacklist.delete(jti);
    }, ttl);
  } else {
    // already expired, remove immediately
    blacklist.delete(jti);
  }
}

export function isBlacklisted(jti: string) {
  return blacklist.has(jti);
}

export default {
  addToBlacklist,
  isBlacklisted,
};
