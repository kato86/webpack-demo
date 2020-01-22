import _ from "lodash";
import "./style.css";
import Photo from "./markus-spiske-qjnAnF0jIGk-unsplash.jpg";
import Data from "./data.xml";

function component() {
  const element = document.createElement("div");
  const myPhoto = new Image();

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  myPhoto.src = Photo;

  element.appendChild(myPhoto);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
