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
/// <reference path="../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var SearchForm_1 = require('./components/SearchForm');
var MigrationMap_1 = require('./components/MigrationMap');
var TodoStore_1 = require('./services/TodoStore');
var MigrationApp = (function () {
    function MigrationApp() {
    }
    MigrationApp = __decorate([
        angular2_1.Component({
            selector: 'migration-app',
            appInjector: [TodoStore_1.TodoStore]
        }),
        angular2_1.View({
            templateUrl: './templates/migration-app.html',
            directives: [SearchForm_1.SearchForm, MigrationMap_1.MigrationMap]
        }), 
        __metadata('design:paramtypes', [])
    ], MigrationApp);
    return MigrationApp;
})();
angular2_1.bootstrap(MigrationApp);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1pZ3JhdGlvbkFwcC50cyJdLCJuYW1lcyI6WyJNaWdyYXRpb25BcHAiLCJNaWdyYXRpb25BcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFDQSwwREFEMEQ7QUFDMUQseUJBQXlDLG1CQUFtQixDQUFDLENBQUE7QUFFN0QsMkJBQXlCLHlCQUF5QixDQUFDLENBQUE7QUFDbkQsNkJBQTJCLDJCQUEyQixDQUFDLENBQUE7QUFDdkQsMEJBQXdCLHNCQUFzQixDQUFDLENBQUE7QUFFL0M7SUFTRUE7SUFDQUMsQ0FBQ0E7SUFWSEQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLGVBQWVBO1lBQ3pCQSxXQUFXQSxFQUFFQSxDQUFDQSxxQkFBU0EsQ0FBQ0E7U0FDekJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLGdDQUFnQ0E7WUFDN0NBLFVBQVVBLEVBQUVBLENBQUNBLHVCQUFVQSxFQUFFQSwyQkFBWUEsQ0FBQ0E7U0FDdkNBLENBQUNBOztxQkFJREE7SUFBREEsbUJBQUNBO0FBQURBLENBWEEsQUFXQ0EsSUFBQTtBQUVELG9CQUFTLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiTWlncmF0aW9uQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvYW5ndWxhcjIvYW5ndWxhcjIuZC50c1wiIC8+XG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5cbmltcG9ydCB7U2VhcmNoRm9ybX0gZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaEZvcm0nO1xuaW1wb3J0IHtNaWdyYXRpb25NYXB9IGZyb20gJy4vY29tcG9uZW50cy9NaWdyYXRpb25NYXAnO1xuaW1wb3J0IHtUb2RvU3RvcmV9IGZyb20gJy4vc2VydmljZXMvVG9kb1N0b3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWlncmF0aW9uLWFwcCcsXG4gIGFwcEluamVjdG9yOiBbVG9kb1N0b3JlXVxufSlcbkBWaWV3KHtcbiAgdGVtcGxhdGVVcmw6ICcuL3RlbXBsYXRlcy9taWdyYXRpb24tYXBwLmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbU2VhcmNoRm9ybSwgTWlncmF0aW9uTWFwXVxufSlcbmNsYXNzIE1pZ3JhdGlvbkFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG59XG5cbmJvb3RzdHJhcChNaWdyYXRpb25BcHApOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==