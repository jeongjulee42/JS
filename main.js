const print = (num) => {console.log(num);};
const multi = (num) => {console.log(num * 2);};

const iterate = (max, action) => {
    for(let i = 0; i < max; i++){
        action(i);
    }
}
iterate(5,print);
iterate(5,multi);