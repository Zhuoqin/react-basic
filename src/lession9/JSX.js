import React from "react";

const student = {
    name: "John Doe",
    age: 15,
    address: {
        "street" : "123 main street",
        "city": "Ottawa",
        "postcalCode": "K1A A1A"
    },
    greeting: function(){
        return (this.name+ " says hi!");
    },
    date: new Date(),
    // gender: "male",
    phone: {
        areaCode: "613",
        number: "555-5555",
        bestTimeToCall: ["10-12", "14-16"]
    }
};

//direct render html
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);


ReactDOM.render(
    <div>
        <h1>{ student.name }</h1>
    </div>
    ,
    document.getElementById('root')
);

ReactDOM.render(
    <div>
        <h1>{ student.phone.bestTimeToCall.join("|") }</h1>
    </div>
    ,
    document.getElementById('root')
);

ReactDOM.render(
    <div>
        <h1>
            my name is {student.name}. my age is {student.age}<br/>
            {student.greeting()}
        </h1>
    </div>
    ,
    document.getElementById('root')
);

ReactDOM.render(
    <div>
        <h1>
            {student.age <= 19 && "cannot buy 🍺"}
        </h1>
    </div>
    ,
    document.getElementById('root')
);


ReactDOM.render(
    <div>
        <ul>
            Best Time To Call
            {student.phone.bestTimeToCall.map(item => <li>{item}</li>)}
        </ul>
    </div>
    ,
    document.getElementById('root')
);
