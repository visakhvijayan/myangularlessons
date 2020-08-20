# AngularJS SANDBOX

> This is created for me to learn Angular JS

## About Angular

1. Full featured JS framework created and maintained by Google
2. Why use Angular
   - Organized front-end structure (Components , modules, services)
   - Powerfull and full featured
   - All in one solution (Routing, HTTP, RxJS, etc)
   - Build powerful SPA(Single Page Applications) apps
   - MVC - Model , View , Control design pattern
   - Typescript
   - Fantastic CLI

## The Angular Way

1. Uses Typescript for static types (variables, funcitons, params)
2. Component based
3. Uses _Services_ to share data/functionality between components
4. Concepts of _modules_ (root module, forms module, http module, etc)
5. Uses RxJS _observables_ (basically data streams) for async operations
6. Steep learning curve relative to other frameworks

Prerequest : Need node js installed.(bz need npm package manager)

`npm install -g @angular/cli` to install Angular JS

`ng new <Project Name>` (It will create folder and generate all core angular files, also create routing modules , stylesheet etc.)

`cd <Project Name>` and `code .` to open the project in vs code

`ng serve --open` to run the dev server which provided by angular cli, `--open` for opening app in the browser

`ng generate component <folder>/<component_name>` to add new component , we can also sepcify the folder also. Best way to create a folder with name component.
ex: `ng generate component component/Todos` will create a new component and it will create a new folder called component and inside that it will add new component with name todo.
you can check it under the app folder.

### Reference

> [Angular JS crash course](https://www.youtube.com/watch?v=Fdf5aTYRW0E&t=3758s)

> [Readme Help](https://medium.com/@saumya.ranjan/how-to-write-a-readme-md-file-markdown-file-20cb7cbcd6f)
