import React, { useState } from "react";

export default function About() {

    const [style, setStyle] = useState({
        color: "black",
        backgroundColor: "white"
    })


const toggleColorMode = () => {
    if(style.backgroundColor === "white"){
        setStyle({
            color: "white",
            backgroundColor: "black",
            border: "2px solid white"
        })
    }
    else{
        setStyle({
            color: "black",
            backgroundColor: "white",
            border: "solid white"
        })
    }
    }


  return (
    <div className="container" style={style}>
      <div classname="accordion" id="accordionPanelsStayOpenExample">
        <div classname="accordion-item">
          <h2 classname="accordion-header" id="panelsStayOpen-headingOne">
            <button style={style}
              classname="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            classname="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div classname="accordion-body" style={style}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div classname="accordion-item">
          <h2 classname="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              classname="accordion-button collapsed" style={style}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            classname="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div classname="accordion-body" style={style}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div classname="accordion-item">
          <h2 classname="accordion-header" id="panelsStayOpen-headingThree">
            <button
              classname="accordion-button collapsed" style={style}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            classname="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div classname="accordion-body" style={style}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

        <div className="container">
            <button type="button" onClick={toggleColorMode} className="btn btn-primary my-3">Enable Dark Mode</button>
        </div>

    </div>
  );
}
