import { TestBed } from "@angular/core/testing";
import { Observable } from 'rxjs';
import { <%= classify(name) %>Usecase } from './<%= dasherize(name) %>.usecase';

describe('<%= classify(name) %>Usecase', () => {
  let service: <%= classify(name) %>Usecase;

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
    service = TestBed.inject(<%= classify(name) %>Usecase);
  });

  it('Doit etre créé', () => {
    expect(service).toBeTruthy();
  });

  it('La methode execute doit etre définie', () => {
    expect(service.execute).toBeTruthy();
  });
});
