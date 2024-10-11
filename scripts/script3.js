const classicFunction = function() {
    console.log(this);
    
}

const arrowFunction = () => console.log(this);

const classicFunctionBind = classicFunction.bind(this)

const me = {
    neme: "John",
    presentClassic: classicFunction,
    presentArrow: arrowFunction,
    presentClassicBind: classicFunctionBind
}

me.presentClassic();
me.presentArrow();
me.presentClassicBind();