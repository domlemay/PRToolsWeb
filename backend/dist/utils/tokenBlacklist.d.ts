/**
 * Add a jti to blacklist until expiration (exp is epoch seconds)
 */
export declare function addToBlacklist(jti: string, exp: number): void;
export declare function isBlacklisted(jti: string): boolean;
declare const _default: {
    addToBlacklist: typeof addToBlacklist;
    isBlacklisted: typeof isBlacklisted;
};
export default _default;
//# sourceMappingURL=tokenBlacklist.d.ts.map