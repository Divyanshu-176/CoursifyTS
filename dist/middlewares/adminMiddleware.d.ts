import type { Request, Response, NextFunction } from 'express';
interface AuthenticatedRequest extends Request {
    adminId?: string;
}
export declare function adminMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export {};
//# sourceMappingURL=adminMiddleware.d.ts.map