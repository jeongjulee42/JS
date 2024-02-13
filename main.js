function getBanana(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('🍌');
        }, 1000)
    })
}

function getApple() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('🍎');
        }, 3000);
    });
}

function getOrange() {
    return Promise.reject(new Error('no orange'));
}

Promise.allSettled([getBanana(), getApple(), getOrange()]).then((fruit) => console.log(fruit))