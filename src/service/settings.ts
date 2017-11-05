export class SettingsService {
  private altBackgroud = false;
  changeBackground(result: boolean) {
    this.altBackgroud = result;
  }
  checkBackgroud() {
   return this.altBackgroud;
  }
}
