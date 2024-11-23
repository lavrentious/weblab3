import form from "./form";
import graph from "./graph";

function onInit() {
  form.init(() => {});

  console.log('initializing graph'); 
  graph.init((x, y, r) => {
    console.log(`received coords (${x}, ${y}) with radius ${r}`);
    graph.addPoint(x, y, r, "red");
    window.location.replace(`./controller?x=${x}&y=${y}&r=${r}`);
  });
}

onInit();