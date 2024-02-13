

function fetchEgg(chicken) {
return Promise.resolve(`${chicken} => 🥚`);
}
// new Promise 대신 심플하게 만드는 방법. static 함수를 이용, resolve를 호출하는 방법.


function fryEgg(egg) {
return Promise.resolve(`${egg} => 🍳`);
}


function getChicken() {
return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
//return Promise.resolve(`🪴 => 🐓`);
}

// 체이닝 - 프로미스가 리턴되기 때문에 가능
getChicken()
.catch(() => '🐔')
.then(fetchEgg)       //chicken => return fetchEgg(chicken); 의 생략 버전
.then(fryEgg)
.then(console.log);

getChicken().catch((err) => console.log(err))