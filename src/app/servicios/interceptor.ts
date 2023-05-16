import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { TokenService } from "./token.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Interceptor {
    constructor (private tokenService: TokenService){}

    Interceptor(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>>{
        let interReq = req;
        const token = this.tokenService.getToken();
        if(token != null){
            interReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer' + token)
            });
        }
        return next.handle(interReq)
    }
}
export const InterceptorProvider = [{
    provider : HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true
}];