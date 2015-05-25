if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var TodoStore_1 = require('../services/TodoStore');
var MigrationMap = (function () {
    function MigrationMap(todoStore) {
        this.todoStore = todoStore;
    }
    MigrationMap.prototype.toggleToDoState = function (todo) {
        todo.done = !todo.done;
    };
    MigrationMap = __decorate([
        angular2_1.Component({
            selector: 'migration-map',
        }),
        angular2_1.View({
            templateUrl: 'templates/migration-map.html',
            directives: [angular2_1.coreDirectives]
        }), 
        __metadata('design:paramtypes', [TodoStore_1.TodoStore])
    ], MigrationMap);
    return MigrationMap;
})();
exports.MigrationMap = MigrationMap;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWlncmF0aW9uTWFwLnRzIl0sIm5hbWVzIjpbIk1pZ3JhdGlvbk1hcCIsIk1pZ3JhdGlvbk1hcC5jb25zdHJ1Y3RvciIsIk1pZ3JhdGlvbk1hcC50b2dnbGVUb0RvU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFDQSw2REFENkQ7QUFDN0QseUJBQThDLG1CQUFtQixDQUFDLENBQUE7QUFFbEUsMEJBQThCLHVCQUU5QixDQUFDLENBRm9EO0FBRXJEO0lBVUVBLHNCQUFZQSxTQUFvQkE7UUFDOUJDLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBO0lBQzdCQSxDQUFDQTtJQUVERCxzQ0FBZUEsR0FBZkEsVUFBZ0JBLElBQVVBO1FBQ3hCRSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFoQkhGO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxlQUFlQTtTQUMxQkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsV0FBV0EsRUFBRUEsOEJBQThCQTtZQUMzQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EseUJBQWNBLENBQUNBO1NBQzdCQSxDQUFDQTs7cUJBV0RBO0lBQURBLG1CQUFDQTtBQUFEQSxDQWpCQSxBQWlCQ0EsSUFBQTtBQVZZLG9CQUFZLGVBVXhCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9NaWdyYXRpb25NYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9hbmd1bGFyMi9hbmd1bGFyMi5kLnRzXCIgLz5cbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBjb3JlRGlyZWN0aXZlc30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuXG5pbXBvcnQge1RvZG9TdG9yZSwgVG9Eb30gZnJvbSAnLi4vc2VydmljZXMvVG9kb1N0b3JlJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtaWdyYXRpb24tbWFwJyxcbn0pXG5AVmlldyh7XG4gIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL21pZ3JhdGlvbi1tYXAuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtjb3JlRGlyZWN0aXZlc11cbn0pXG5leHBvcnQgY2xhc3MgTWlncmF0aW9uTWFwIHtcbiAgdG9kb1N0b3JlOiBUb2RvU3RvcmU7XG4gIFxuICBjb25zdHJ1Y3Rvcih0b2RvU3RvcmU6IFRvZG9TdG9yZSkge1xuICAgIHRoaXMudG9kb1N0b3JlID0gdG9kb1N0b3JlO1xuICB9XG5cbiAgdG9nZ2xlVG9Eb1N0YXRlKHRvZG86IFRvRG8pIHtcbiAgICB0b2RvLmRvbmUgPSAhdG9kby5kb25lO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=