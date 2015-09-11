import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {MigrationMap} from './components/migration-map/migration-map';
import {NamesList} from './services/NameList';

@Component({
  selector: 'app',
  viewBindings: [NamesList]
})
@RouteConfig([
  { path: '/', component: Home, as: 'home' },
  { path: '/about', component: About, as: 'about' },
  { path: '/migrate', component:MigrationMap, as: 'migrate'}
])
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [RouterOutlet, RouterLink]
})
class App {}

bootstrap(App, [routerInjectables]);