import type { ArgumentsHost } from '@nestjs/common';
import { BaseRpcExceptionFilter, RpcException } from '@nestjs/microservices';
import { Observable } from 'rxjs';
export declare class AllExceptionsFilter extends BaseRpcExceptionFilter {
    catch(exception: RpcException, host: ArgumentsHost): Observable<void>;
}
