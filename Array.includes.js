function test1(fruit) {
    if(fruit ==='apple' || fruit === 'strawberry'){
        console.log('red');
    }
}

//Array.includes (Array.includes)重写语句

function test2(fruit) {
    const redfruits = ['apple','strawberry','cherry','cranberries']; 

    if(redfruits.includes(fruit)) {
        console.log('red');
    }
}

test2('apple');