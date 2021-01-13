import { TestBed } from "@angular/core/testing";
import { Observable } from 'rxjs';
import { GetAllArticlesUsecase } from './get-all-articles.usecase';

describe('GetAllArticlesUsecase', () => {
  let service: GetAllArticlesUsecase;

  beforeEach(async () => {
    // const fake = {
    //   createArticle: (article: CreerArticleCommandDto) => new Observable<void>(obs => { obs.next(); })
    // };

    await TestBed.configureTestingModule({
      providers: [
        // {provide: ArticleRepository, useValue: fake}
      ]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(GetAllArticlesUsecase);
  });

  it('Doit etre créé', () => {
    expect(service).toBeTruthy();
  });

  it('La methode execute doit etre définie', () => {
    expect(service.execute).toBeTruthy();
  });
});
