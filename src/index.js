import { cube } from "./math";
// import _ from "lodash";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

function component() {
  const element = document.createElement("pre");
  const divElement = document.createElement("div");
  const btn = document.createElement("button");
  const br = document.createElement("br");
  const hr = document.createElement("hr");

  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join(
    "\n\n"
  );
  btn.innerHTML = "Click me and look at the console!";
  divElement.innerHTML = join(["Hello", "webpack"], " ");
  divElement.appendChild(br);
  divElement.appendChild(hr);
  divElement.appendChild(btn);

  btn.onclick = e =>
    import(/* webpackChunkName: "print" */ "./print").then(module => {
      const print = module.default;

      print();
    });

  return divElement;
}

document.body.appendChild(component());

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json => {
    console.log(
      "We retrieved some data! AND we're confident it will work on a variety of browser distributions."
    );
    console.log(json);
  })
  .catch(error =>
    console.error("Something went wrong when fetching this data: ", error)
  );
