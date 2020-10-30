import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoginService } from 'src/service/login.service';
import { loginAction, LoginActionTypes } from '../actions/login.action';


@Injectable()
export class LoginEffects {
  // login$ = createEffect(() => this.actions$.pipe(
  //   ofType(LoginActionTypes.Login),
  //   mergeMap(
  //     () => this.loginService.login()
  //       .pipe(
  //         map(isLogin => (loginAction({ isLogin }))),
  //         catchError(() => EMPTY)
  //       )
  //   )
  // ));

  constructor(
    private actions$: Actions,
    private loginService: LoginService
  ) { }
}