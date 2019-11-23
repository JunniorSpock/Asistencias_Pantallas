import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {UsuarioService} from '../servicios/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private injector:Injector) { }

intercept ( req, next){
  let usuarioService= this.injector.get(UsuarioService);
  let tokenizeRequest= req.clone({
    setHeaders: {
      Authorization: `xx-token-xx ${usuarioService.getToken()}`
    }
  })
  return next.handle(tokenizeRequest)
}

}
