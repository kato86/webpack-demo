import _ from "lodash";
import "./style.css";
import Photo from "./markus-spiske-qjnAnF0jIGk-unsplash.jpg";

function component() {
  const element = document.createElement("div");
  const myPhoto = new Image();

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  myPhoto.src = Photo;

  element.appendChild(myPhoto);

  return element;
}

document.body.appendChild(component());
