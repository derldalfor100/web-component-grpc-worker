# WebComponentGrpcWorker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## DIY

Run `ng new web-component-grpc-worker --createApplication=false --interactive=false`

cd web-component-grpc-worker

code .

ng g application app --style=scss --routing=false

ng generate web-worker app

npm i ts-protoc-gen --save-dev

npm i google-protobuf @types/google-protobuf @improbable-eng/grpc-web --save-dev

create a valid proto file in projects/src/proto/definitions

protoc --plugin="protoc-gen-ts="$(pwd)"\node_modules\.bin\protoc-gen-ts.cmd" --js_out="import_style=commonjs,binary:./projects/app/src/proto/services" --ts_out="service=grpc-web:./projects/app/src/proto/services" -I ./projects/app/src/proto/definitions projects/app/src/proto/definitions/*.proto

ng g component greeter

ng add @angular/elements

ng add ngx-build-plus@12.2.0

ng serve -o

ng build --output-hashing none --single-bundle true