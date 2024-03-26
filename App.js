const heading = React.createElement("h1",{id: "heading"},"Hello world from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
    
const heading2 = React.createElement("h2",{},"hello");

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(heading2);

// nesting in react
const parent = React.createElement("div",{id: "parent"}, 
    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"h1 tag")
    )
);


const root3 = ReactDOM.createRoot(document.getElementById("root3"));

root3.render(parent);

const parent2 = React.createElement("div",{id: "parent"},[
    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"h1 tag")),

        React.createElement("div",{id:"child2"},
        React.createElement("h1",{},"child 2 h1 tag"))
    ]);

const root4 = ReactDOM.createRoot(document.getElementById('root4'))

root4.render(parent2);