import _ from 'lodash';
import * as utilities from './utilities';
import Lion from './utilities';

console.log(utilities.universityName);
console.log(utilities.niJou(100));
console.log(Lion.say());

const component = () => {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!!'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

document.body.appendChild(component());