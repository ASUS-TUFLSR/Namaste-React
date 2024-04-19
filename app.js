import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => ( 
    <h1 className="namaste" style={{color:"crimson"}} >Namaste React by JSX</h1>
)

//Adding two or more ReactComponet in one component or more is called componetComposition
const HeadingComponent = () => {
    return <>
    {Title()}
    <Title></Title>
    <Title/>
    <h1 className="namaste2" style={{color:"aqua"}} >Namaste React functional Component
    </h1>
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<HeadingComponent/>)