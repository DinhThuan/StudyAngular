import { UiFeaturesModule } from './ui-features.module';

describe('UiFeaturesModule', () => {
  let uiFeaturesModule: UiFeaturesModule;

  beforeEach(() => {
    uiFeaturesModule = new UiFeaturesModule();
  });

  it('should create an instance', () => {
    expect(uiFeaturesModule).toBeTruthy();
  });
});
