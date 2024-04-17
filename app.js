const parent = React.createElement("div", {id:"parent"},[
    React.createElement("child1",{id:"child1"},
                                    [React.createElement("h1", {}, "Im an h1 tag"),React.createElement("h2", {}, "Im an h2 tag")]),React.createElement("child2",{id:"child2"},
                                    [React.createElement("h1", {}, "Im an h1 tag"),React.createElement("h2", {}, "Im an h2 tag")])
])


    console.log(parent)

   const root = ReactDOM.createRoot(document.getElementById("root"));

   root.render(parent);
