import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {

  router: Router;
  
    configureRouter(config: RouterConfiguration, router: Router){
      config.title = 'assignment';
      config.options.pushState = true;
      config.options.root = '/';
      config.map([
        { route: '', moduleId: PLATFORM.moduleName('./view-models/home-page'),   title: 'HomePage' }
      ]);
  
      this.router = router;
    }
}
