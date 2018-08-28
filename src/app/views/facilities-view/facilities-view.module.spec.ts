import { FacilitiesViewModule } from './facilities-view.module';

describe('FacilitiesViewModule', () => {
  let facilitiesViewModule: FacilitiesViewModule;

  beforeEach(() => {
    facilitiesViewModule = new FacilitiesViewModule();
  });

  it('should create an instance', () => {
    expect(facilitiesViewModule).toBeTruthy();
  });
});
