import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('am');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('am');
  }

  ngOnInit() {
  }

  public switchLang(lang) {
    this.translate.use(lang);
  }
}
