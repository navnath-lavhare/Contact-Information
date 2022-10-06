import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { SpinnerService } from './spinner.service';
import { empty, Observable, throwError } from 'rxjs';
import { map, catchError,finalize } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  httpReqStack: HttpRequest<any>[] = []

  constructor(private spinnerSvc: SpinnerService) { }

  removeStack(req: HttpRequest<any>){
    const reqIndex = this.httpReqStack.indexOf(req);
    if(reqIndex >= 0){
      this.httpReqStack.splice(reqIndex, 1);
    }
    this.spinnerSvc.isLoading.next(this.httpReqStack.length > 0);
  }
  addToStack(req: HttpRequest<any>){
    this.httpReqStack.push(req);
    this.spinnerSvc.isLoading.next(true);
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const updateReq = req.clone({withCredentials: true});
      let isHttpServiceCall = false;
      let customException = {};
      if(req.headers.get('customException')){
        isHttpServiceCall = true;
        if(req.headers.get('customException') != 'none'){
          req.headers.get('customException').split(',').forEach(s => customException[parseInt(s)] = true);

        }
        req.headers.delete('customException');
      }
      this.addToStack(updateReq);
      return next.handle(updateReq).pipe(
        map((event: HttpEvent<any>) => {
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          if(error instanceof HttpErrorResponse){
            if(error.status == 502){
              //stop app
              //isGatewaydown
            } else 
            if(isHttpServiceCall){
              if(customException[error.status]){
                //handling error by developer
                return throwError(error);
              } else {
                if(error.status == 401){
                  //this.handleUnauthonticate(error);
                } else {
                 //this.errorService.handleErrorSec(error, null, this.getMessage(error));
                }
              }

            }
          }
          return empty();
        }),
        finalize(() => {
          this.removeStack(updateReq);
        })
      )
  }
}
