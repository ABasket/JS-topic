function test1(fruit,quantiyt) {
    const redfruits = ['apple','strawberry','cherry','cranberries']; 

    if(fruit) {

        if(redfruits.includes(fruit)) {

            console.log('red');

            if(quantiyt>10) {

                console.log('big');

            }
        }
    } else {
        throw new Error('No fruit');
    }
}

//test1(null); // error: No fruits
test1('apple'); // print: red
test1('apple', 20); // print: red, big quantity

// 尽早return 无效条件

function test2(fruit,quantity) {

    const redfruits = ['apple','strawberry','cherry','cranberries']; 
    
    if(!fruit) {

        throw new Error('No fruit');
        
    }

    if(redfruits.includes(fruit)) {

        console.log('red');

        if(quantity>0) {

            console.log('big');

        }

    }

}