function main1(index){
    console.log('main 1');
    console.log('my testing statement:');
    console.log(index > 5);
    console.log((index * 5) > 10);
    if (index > 5) {
       first(); 
    }
    else{
        second();
    }
    second();
    console.log('main 1');
    console.log('my testing statement:');
    console.log(index > 5);
    console.log((index * 5) > 10);
    console.log('main 1');
    console.log('my testing statement:');
    console.log(index > 5);
    console.log((index * 5) > 10);
    console.log('main 1');
    console.log('my testing statement:');
    console.log(index > 5);
    console.log((index * 5) > 10);
}

function first(){
    console.log('first');
    third();
}

function second(){
    console.log('second');
    fourth();
}

function third(){
    console.log('third');
    fourth();
}

function fourth(){
    console.log('fourth');
    
    try {
        var mynumber = 50;
        var myresult = mynumber / 0;
        throw 'my custom error';
    } catch (error) {
        console.error(error);

    }

    debugger;
}

main1(9);
// how your code got there ... 
