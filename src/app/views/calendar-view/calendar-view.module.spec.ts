import { CalendarViewModule } from './calendar-view.module';

describe('CalendarViewModule', () => {
  let calendarViewModule: CalendarViewModule;

  beforeEach(() => {
    calendarViewModule = new CalendarViewModule();
  });

  it('should create an instance', () => {
    expect(calendarViewModule).toBeTruthy();
  });
});
