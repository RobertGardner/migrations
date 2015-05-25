/// <reference path="../../typings/angular2/angular2.d.ts" />
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
var angular2_1 = require('angular2/angular2');
var forms_1 = require('angular2/forms');
var TodoStore_1 = require('services/TodoStore');
var SearchForm = (function () {
    function SearchForm(builder, todoStore) {
        this.todoStore = todoStore;
        this.search = builder.group({
            place: ['', forms_1.Validators.required],
            decade: ['', forms_1.Validators.required],
            direction: ['out', forms_1.Validators.required]
        });
    }
    SearchForm.prototype.add = function () {
        this.todoStore.add(this.search.controls.place.value + this.search.controls.decade.value + this.search.controls.direction.value);
        return false;
    };
    SearchForm = __decorate([
        angular2_1.Component({
            selector: 'search-form',
            appInjector: [forms_1.FormBuilder]
        }),
        angular2_1.View({
            templateUrl: 'templates/search-form.html',
            directives: [forms_1.formDirectives]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, TodoStore_1.TodoStore])
    ], SearchForm);
    return SearchForm;
})();
exports.SearchForm = SearchForm;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoRm9ybS50cyJdLCJuYW1lcyI6WyJTZWFyY2hGb3JtIiwiU2VhcmNoRm9ybS5jb25zdHJ1Y3RvciIsIlNlYXJjaEZvcm0uYWRkIl0sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7Ozs7Ozs7Ozs7OztBQUU3RCx5QkFBeUMsbUJBQW1CLENBQUMsQ0FBQTtBQUM3RCxzQkFBc0YsZ0JBQWdCLENBQUMsQ0FBQTtBQUN2RywwQkFBOEIsb0JBRzlCLENBQUMsQ0FIaUQ7QUFHbEQ7SUFhRUEsb0JBQVlBLE9BQW9CQSxFQUFFQSxTQUFvQkE7UUFDcERDLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBO1FBQzNCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQTtZQUMxQkEsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsa0JBQVVBLENBQUNBLFFBQVFBLENBQUNBO1lBQ2hDQSxNQUFNQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxrQkFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDakNBLFNBQVNBLEVBQUVBLENBQUNBLEtBQUtBLEVBQUVBLGtCQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtTQUN4Q0EsQ0FBQ0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFFREQsd0JBQUdBLEdBQUhBO1FBQ0VFLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ2hJQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQTtJQUNmQSxDQUFDQTtJQXpCSEY7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLGFBQWFBO1lBQ3ZCQSxXQUFXQSxFQUFFQSxDQUFDQSxtQkFBV0EsQ0FBQ0E7U0FDM0JBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLDRCQUE0QkE7WUFDekNBLFVBQVVBLEVBQUVBLENBQUNBLHNCQUFjQSxDQUFDQTtTQUM3QkEsQ0FBQ0E7O21CQW1CREE7SUFBREEsaUJBQUNBO0FBQURBLENBMUJBLEFBMEJDQSxJQUFBO0FBakJZLGtCQUFVLGFBaUJ0QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvU2VhcmNoRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2FuZ3VsYXIyL2FuZ3VsYXIyLmQudHNcIiAvPlxuXG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBmb3JtRGlyZWN0aXZlcywgQ29udHJvbEdyb3VwLCBDb250cm9sRGlyZWN0aXZlfSBmcm9tICdhbmd1bGFyMi9mb3Jtcyc7XG5pbXBvcnQge1RvZG9TdG9yZSwgVG9Eb30gZnJvbSAnc2VydmljZXMvVG9kb1N0b3JlJ1xuXG4vLyBBbm5vdGF0aW9uIHNlY3Rpb25cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlYXJjaC1mb3JtJyxcbiAgYXBwSW5qZWN0b3I6IFtGb3JtQnVpbGRlcl1cbn0pXG5AVmlldyh7XG4gIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3NlYXJjaC1mb3JtLmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbZm9ybURpcmVjdGl2ZXNdXG59KVxuLy8gQ29tcG9uZW50IGNvbnRyb2xsZXJcbmV4cG9ydCBjbGFzcyBTZWFyY2hGb3JtIHtcbiAgc2VhcmNoOiBDb250cm9sR3JvdXA7XG4gIHRvZG9TdG9yZTogVG9kb1N0b3JlO1xuICBcbiAgY29uc3RydWN0b3IoYnVpbGRlcjogRm9ybUJ1aWxkZXIsIHRvZG9TdG9yZTogVG9kb1N0b3JlKSB7XG4gICAgdGhpcy50b2RvU3RvcmUgPSB0b2RvU3RvcmU7XG4gICAgdGhpcy5zZWFyY2ggPSBidWlsZGVyLmdyb3VwKHtcbiAgICAgIHBsYWNlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZGVjYWRlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZGlyZWN0aW9uOiBbJ291dCcsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cblxuICBhZGQoKSB7XG4gICAgdGhpcy50b2RvU3RvcmUuYWRkKHRoaXMuc2VhcmNoLmNvbnRyb2xzLnBsYWNlLnZhbHVlICsgdGhpcy5zZWFyY2guY29udHJvbHMuZGVjYWRlLnZhbHVlICsgdGhpcy5zZWFyY2guY29udHJvbHMuZGlyZWN0aW9uLnZhbHVlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==