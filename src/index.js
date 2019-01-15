import {cube} from './math';
console.log('-------------------------------------------------')
console.log(process.env.NODE_ENV)
console.log('-------------------------------------------------')
if(process.env.NODE_ENV !== 'production') {
  console.log('-------------------------------------------------')
  console.log('dev modes');
}
function component() {
  var element = document.createElement('pre');
  // Lodash, now imported by this script
  element.innerHTML = [
    'hello webpack',
    '5 cubed is equal to ' + cube(5)
  ]
  return element;
}

document.body.appendChild(component());