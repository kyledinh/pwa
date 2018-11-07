## Install/Create/Serve Angular CLI

* `npm install -g @angular/cli`
* `ng new angular-app`
* `cd angular-app`
* `ng serve`

Create New Component

* `ng g component components/new_comp`

Adding

* `npm install --save @angular/material @angular/cdk @angular/animations`
* `ng add @angular/material`

## Generate a Service
* `ng g s dataService`

## Styling by component

Each class can be boolean to appear or not
```
<h1 [class.gray]="isDisabled">Home</h1>

<h1 [ngClass]="{
  'gray': isDisabled,
  'white': !isDiabled,
}">Home</h1>

<h1 [style.color]="isDisabled ? '#333' : '#fff'">Home</h1>

[ngStyle]="{
  'color': isDisabled ? 'grey' : 'white',
  'font-size' : isDisabled ? '1em' : '1.2em',
 }"
```


## References

* https://swapi.co/api/
* https://regres.in/api/users
