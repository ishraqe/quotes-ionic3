import { Component } from '@angular/core';
import {IonicPage, Toggle} from 'ionic-angular';
import {SettingsService} from '../../service/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  constructor(private settingsService: SettingsService) {
  }
  OnChange(toggle : Toggle) {
    this.settingsService.changeBackground(toggle.checked);
  }
  checkBackgroud() {
    return this.settingsService.checkBackgroud();
  }
}
