## Valori falsy: false, 0, "", null, undefined, NaN
## Tutto il resto è truthy
```js
if ("") {
    console.log("Non verrà mai eseguito");
}
```

```js
if ("ciao") {
    console.log("Questo verrà eseguito"); // Le stringhe non vuote sono truthy
}
```
