// 使用默认参数和解构

function test1(fruit,quantity) {
    if(!fruit) return;
    const q = quantity || 1 ;
    console.log(`We hava ${q} ${fruit}`)
}
test1('banana'); // We hava 1 banana
test1('apple',2); // We hava 2 apple


// 使用默认参数消除q变量

function test2(fruit,quantity=1) {
    if(!fruit) return;
    console.log(`We hava ${quantity} ${fruit}`);
}
test2('banana'); // We hava 1 banana
test2('apple',2); // We hava 2 apple


// 如果fruit是一个object会怎么样？我们能分配一个默认参数吗？

function test3(fruit) { 
    // 当值存在时打印 fruit 的值
    if (fruit && fruit.name)  {
      console.log (fruit.name);
    } else {
      console.log('unknown');
    }
  }
  
  test3(undefined); // unknown
  test3({ }); // unknown
  test3({ name: 'apple', color: 'red' }); // apple


  function test4({name}={}) {
      console.log(name || 'unknown');
  }

  test4(undefined); // unknown
  test4({ }); // unknown
  test4({ name: 'apple', color: 'red' }); // apple