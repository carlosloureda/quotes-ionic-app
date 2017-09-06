import { SettingsService } from './../../services/services';
import { Component } from '@angular/core';
import { Toggle, IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingsService: SettingsService) {
  }

  onToggle(toggle: Toggle) {
    console.log("the toggle for this view value is: ", toggle.checked);
    this.settingsService.setBackground(toggle.checked);
  }

  checkBackground() {
    console.log("isAltBackgrouind value: ", this.settingsService.isAltBackground());
    return this.settingsService.isAltBackground();
  }
}
