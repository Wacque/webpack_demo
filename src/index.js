

function component() {
  var element = document.createElement('pre');
  // Lodash, now imported by this script
  return import( /* webpackChunkName: "lodash" */ 'lodash').then(_ => {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;

  }).catch(error => 'An error occurred while loading the component');
}

function active() {
  component().then(component => {
    console.log(component);
    document.body.appendChild(component);
  })
}
function button() {
  var button = document.createElement("button");
  button.innerHTML = 'click';

  button.onclick = active;

  document.body.appendChild(button);
}
button();