import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';

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
  directives: [ROUTER_DIRECTIVES]
})
class App {}

bootstrap(App, [ROUTER_BINDINGS]);