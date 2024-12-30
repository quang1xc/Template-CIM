import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService} from '../services/auth.service';

export interface TokenInfo {
  id: string;
  user_level: number;
  sub: string;
  website: string;
}


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,) {}

  isLogin(): boolean {
    const token: string | null = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

  canActivate(): boolean {
    return this.isLogin();
  }
}
