import { NotfoundViewModule } from './notfound-view.module';

describe('NotfoundViewModule', () => {
  let notfoundViewModule: NotfoundViewModule;

  beforeEach(() => {
    notfoundViewModule = new NotfoundViewModule();
  });

  it('should create an instance', () => {
    expect(notfoundViewModule).toBeTruthy();
  });
});
