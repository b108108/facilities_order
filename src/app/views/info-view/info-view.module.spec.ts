import { InfoViewModule } from './info-view.module';

describe('InfoViewModule', () => {
  let infoViewModule: InfoViewModule;

  beforeEach(() => {
    infoViewModule = new InfoViewModule();
  });

  it('should create an instance', () => {
    expect(infoViewModule).toBeTruthy();
  });
});
