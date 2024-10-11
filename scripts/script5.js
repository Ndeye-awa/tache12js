const myObject = {
    name: "John",
    age: 32,
    present:function() {
        console.log("hello");
        
    }
}

const {name, present} = myObject;

present();
