import { Component, inject } from '@angular/core';
import { IAppState } from './app.state';

//redux
import { Store } from '@ngrx/store';
import * as uiActions from './redux/actions/ui.actions';
import { Subscription } from 'rxjs';
import { StorageService } from './services/storage.service';
import { EThemeMode } from './interfaces/theme.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell-velzon';

  private _uirx$?: Subscription;

  private _store = inject<Store<IAppState>>( Store<IAppState> );
  private _st = inject( StorageService );

  ngOnInit(): void {

    const screenWidth = document.documentElement.clientWidth;

    const themeMode = this._st.getItem('themeMode') ?? EThemeMode.light;

    this._store.dispatch( uiActions.onResizeScreen( { screenWidth } ) );


    this.onChangeThemeMode( themeMode == EThemeMode.dark ? EThemeMode.dark : EThemeMode.light );

    document.documentElement.setAttribute('data-layout', 'vertical');
    document.documentElement.setAttribute('data-topbar', 'light');
    document.documentElement.setAttribute('data-sidebar', 'dark');
    document.documentElement.setAttribute('data-layout-style', 'default');
    document.documentElement.setAttribute('data-layout-mode', 'light');
    document.documentElement.setAttribute('data-layout-width', 'fluid');
    document.documentElement.setAttribute('data-layout-position', 'fixed');
    document.documentElement.setAttribute('data-sidebar-image', 'none');
    document.documentElement.setAttribute('data-preloader', 'disable');
    document.documentElement.setAttribute('data-sidebar-size', 'sm');


    this.onListenResizeScreen();
    this.onListenUiRx();
  }

  onListenResizeScreen() {
    window.addEventListener('resize' , () => {

      const screenWidth = document.documentElement.clientWidth;

      if ( screenWidth <= 767) {
        document.documentElement.setAttribute('data-sidebar-size', '');
      }
      else if (screenWidth <= 1024) {
        document.documentElement.setAttribute('data-sidebar-size', 'sm');
      }
      else if (screenWidth >= 1024) {
        document.documentElement.setAttribute('data-sidebar-size', 'lg');
      }
    });
  }

  onListenUiRx() {

    this._uirx$ = this._store.select('ui')
    .subscribe( (state) => {

      const currentSIdebarSize = document.documentElement.getAttribute("data-sidebar-size");
      var windowSize = document.documentElement.clientWidth;

      if (windowSize > 767)
        document.querySelector(".hamburger-icon")?.classList.toggle("open");

      //For collapse vertical menu
      if (document.documentElement.getAttribute("data-layout") === "vertical") {
        if (windowSize < 1025 && windowSize >= 767) {

          document.body.classList.remove("vertical-sidebar-enable");

          currentSIdebarSize == "sm" ?
            document.documentElement.setAttribute("data-sidebar-size", "") :
            document.documentElement.setAttribute("data-sidebar-size", "sm");
        } else if (windowSize > 1025) {

          console.log('if (windowSize > 1025)');

          document.body.classList.remove("vertical-sidebar-enable");

          (currentSIdebarSize == null || currentSIdebarSize == "lg") ?
            document.documentElement.setAttribute("data-sidebar-size", "sm") :
            document.documentElement.setAttribute("data-sidebar-size", "lg");

        } else if (windowSize < 767) {
          document.body.classList.add("vertical-sidebar-enable");
          document.documentElement.setAttribute("data-sidebar-size", "lg");
        }
      }



    });

  }

  onChangeThemeMode( themeMode: EThemeMode ) {
    switch (themeMode) {
      case 'light':
        document.body.setAttribute('data-layout-mode', "light");
        document.body.setAttribute('data-sidebar', "light");

        break;
      case 'dark':
        document.body.setAttribute('data-layout-mode', "dark");
        document.body.setAttribute('data-sidebar', "dark");
        break;
      default:
        document.body.setAttribute('data-layout-mode', "light");
        break;
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._uirx$?.unsubscribe();
  }

}
