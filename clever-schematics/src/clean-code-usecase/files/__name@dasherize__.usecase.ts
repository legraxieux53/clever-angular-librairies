import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usecase } from '../base/usecase';

export class <%= classify(name) %>Usecase implements Usecase<void, void> {

  constructor() {}

  execute(command: void): Observable<void> {
    // return this.repository.createArticle(command);
    return new Observable();
  }
}
