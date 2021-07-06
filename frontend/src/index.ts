
var count = 0;

function dispatchCalc() {
    const cols = (document.getElementsByName('cols')[0] as HTMLInputElement).value
    const rows = (document.getElementsByName('rows')[0] as HTMLInputElement).value
    const maxarea = (document.getElementsByName('maxarea')[0] as HTMLInputElement).value
    console.log("pressed =1 ");

    let xhttp = new XMLHttpRequest();

    xhttp.addEventListener('load',() => { generate_vis(xhttp.responseText); });
    xhttp.addEventListener('error', () => error(this.responseText) ) ;
    xhttp.open("GET",`/calculate/${rows}/${cols}/${maxarea}`);
    xhttp.send();
}

function error(t: String) {
    console.log("error");
    generate_vis(t);
}

function generate_vis(data?: String)  {
    document.getElementById('vis').innerHTML = `
        ${data}<p>
        Here would be a good place to add a visualiztion of the results.
        <P> Button Pressed ${count} times so far.
    `;
    count += 1;
}
function ready(fn: any) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
function setup() {
    document.getElementById('button').addEventListener('click',dispatchCalc);
    generate_vis();
}
ready(setup);
