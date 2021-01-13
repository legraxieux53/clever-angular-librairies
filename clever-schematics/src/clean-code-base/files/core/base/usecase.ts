import { Observable } from 'rxjs';

export interface Usecase<C, T> {
  execute(command: C): Observable<T>;
}
