function test1(color) {
    // 使用条件语句来寻找对应颜色的水果
    switch (color) {
      case 'red':
        return ['apple', 'strawberry'];
      case 'yellow':
        return ['banana', 'pineapple'];
      case 'purple':
        return ['grape', 'plum'];
      default:
        return [];
    }
  }

console.log(test1(null)); // []
console.log(test1('yellow')); // ['banana', 'pineapple']

const fruitColor1 = {
    red: ['apple', 'strawberry'],
    yellow: ['banana', 'pineapple'],
    purple: ['grape', 'plum']
}

function test2(color){
    return fruitColor1[color] || [];
}

console.log(test2(null)); // []
console.log(test2('yellow')); // ['banana', 'pineapple']

// Map实现

const fruitColor2 = new Map()
    .set('red',['apple', 'strawberry'])
    .set('yellow',['banana', 'pineapple'],)
    .set('purple',['grape', 'plum'])


function test3(color) {
    return fruitColor2.get(color) || [];
}

console.log(test3(null)); // []
console.log(test3('yellow')); // ['banana', 'pineapple']


// filter

const fruits = [
    { name: 'apple', color: 'red' }, 
    { name: 'strawberry', color: 'red' }, 
    { name: 'banana', color: 'yellow' }, 
    { name: 'pineapple', color: 'yellow' }, 
    { name: 'grape', color: 'purple' }, 
    { name: 'plum', color: 'purple' }
];

function test4(color) {
  return fruits.filter(f => f.color == color);
}
console.log(test4(null)); // []
console.log(test4('yellow')); // [ { name: 'banana', color: 'yellow' },{ name: 'pineapple', color: 'yellow' } ]