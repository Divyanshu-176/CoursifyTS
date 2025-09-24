import type { Request, Response, NextFunction } from 'express';
interface AuthenticatedRequest extends Request {
    userId?: string;
}
export declare function userMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export {};
//# sourceMappingURL=userMiddleware.d.ts.map