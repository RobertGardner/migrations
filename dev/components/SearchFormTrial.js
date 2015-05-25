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
            templateUrl: 'templates/search-form-trial.html',
            directives: [forms_1.formDirectives]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, TodoStore_1.TodoStore])
    ], SearchForm);
    return SearchForm;
})();
exports.SearchForm = SearchForm;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoRm9ybVRyaWFsLnRzIl0sIm5hbWVzIjpbIlNlYXJjaEZvcm0iLCJTZWFyY2hGb3JtLmNvbnN0cnVjdG9yIiwiU2VhcmNoRm9ybS5hZGQiXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDs7Ozs7Ozs7Ozs7O0FBRTdELHlCQUF5QyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzdELHNCQUFzRixnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3ZHLDBCQUE4QixvQkFHOUIsQ0FBQyxDQUhpRDtBQUdsRDtJQWFFQSxvQkFBWUEsT0FBb0JBLEVBQUVBLFNBQW9CQTtRQUNwREMsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0E7UUFDM0JBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBO1lBQzFCQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxrQkFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDaENBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLGtCQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUNqQ0EsU0FBU0EsRUFBRUEsQ0FBQ0EsS0FBS0EsRUFBRUEsa0JBQVVBLENBQUNBLFFBQVFBLENBQUNBO1NBQ3hDQSxDQUFDQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUVERCx3QkFBR0EsR0FBSEE7UUFDRUUsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDaElBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO0lBQ2ZBLENBQUNBO0lBekJIRjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsYUFBYUE7WUFDdkJBLFdBQVdBLEVBQUVBLENBQUNBLG1CQUFXQSxDQUFDQTtTQUMzQkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsV0FBV0EsRUFBRUEsa0NBQWtDQTtZQUMvQ0EsVUFBVUEsRUFBRUEsQ0FBQ0Esc0JBQWNBLENBQUNBO1NBQzdCQSxDQUFDQTs7bUJBbUJEQTtJQUFEQSxpQkFBQ0E7QUFBREEsQ0ExQkEsQUEwQkNBLElBQUE7QUFqQlksa0JBQVUsYUFpQnRCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9TZWFyY2hGb3JtVHJpYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9hbmd1bGFyMi9hbmd1bGFyMi5kLnRzXCIgLz5cblxuaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgZm9ybURpcmVjdGl2ZXMsIENvbnRyb2xHcm91cCwgQ29udHJvbERpcmVjdGl2ZX0gZnJvbSAnYW5ndWxhcjIvZm9ybXMnO1xuaW1wb3J0IHtUb2RvU3RvcmUsIFRvRG99IGZyb20gJ3NlcnZpY2VzL1RvZG9TdG9yZSdcblxuLy8gQW5ub3RhdGlvbiBzZWN0aW9uXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWFyY2gtZm9ybScsXG4gIGFwcEluamVjdG9yOiBbRm9ybUJ1aWxkZXJdXG59KVxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9zZWFyY2gtZm9ybS10cmlhbC5odG1sJyxcbiAgZGlyZWN0aXZlczogW2Zvcm1EaXJlY3RpdmVzXVxufSlcbi8vIENvbXBvbmVudCBjb250cm9sbGVyXG5leHBvcnQgY2xhc3MgU2VhcmNoRm9ybSB7XG4gIHNlYXJjaDogQ29udHJvbEdyb3VwO1xuICB0b2RvU3RvcmU6IFRvZG9TdG9yZTtcbiAgXG4gIGNvbnN0cnVjdG9yKGJ1aWxkZXI6IEZvcm1CdWlsZGVyLCB0b2RvU3RvcmU6IFRvZG9TdG9yZSkge1xuICAgIHRoaXMudG9kb1N0b3JlID0gdG9kb1N0b3JlO1xuICAgIHRoaXMuc2VhcmNoID0gYnVpbGRlci5ncm91cCh7XG4gICAgICBwbGFjZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGRlY2FkZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGRpcmVjdGlvbjogWydvdXQnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG5cbiAgYWRkKCkge1xuICAgIHRoaXMudG9kb1N0b3JlLmFkZCh0aGlzLnNlYXJjaC5jb250cm9scy5wbGFjZS52YWx1ZSArIHRoaXMuc2VhcmNoLmNvbnRyb2xzLmRlY2FkZS52YWx1ZSArIHRoaXMuc2VhcmNoLmNvbnRyb2xzLmRpcmVjdGlvbi52YWx1ZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=