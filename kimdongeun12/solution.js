// 코딩테스트 연습 => 해시 => 전화번호 목록
function solution(phone_book) {
    phone_book.sort();
    for(let i = 0; i < phone_book.length; i++ ) {
        const x = phone_book[i];
        if(phone_book[i + 1]?.startsWith(x)) {
            return !phone_book[i + 1].startsWith(x)
        }
    }
    return true;
}
// 코딩테스트 연습 => 해시 => 의상
function solution(clothes) {
    const clothesType = clothes.reduce((acc , cur) => {
        acc[cur[1]] = (acc[cur[1]] || 0) + 1;
        return acc;
    }, {});
    const answer = Object.values(clothesType).reduce((acc , cur) => {
        return acc * (cur + 1);
    }, 1);
    return answer - 1;
}
function solution(clothes) {
    let answer = [];
    let typeClothes = [];
    let cntArr = [];
    for(var i=0 ; i < clothes.length; i++){
        typeClothes.push(clothes[i][1]);
    };
    
    typeClothes = Array.from(new Set(typeClothes));
    clothes.forEach((accr , idx) => { 
      cntArr[accr[1]] = (cntArr[accr[1]] || 0)+1; 
    });
    for(var i=0 ; i < typeClothes.length; i++){
        answer.push(cntArr[typeClothes[i]] + 1)
    };
    answer = answer.reduce((accr , curr) => accr * curr);
    answer = typeClothes.length === 1 ? clothes.length : answer - 1 ; 
    
    return answer;
}
// 코딩테스트 연습 => 해시 => 베스트앨범
function solution(genres, plays) {
    const answer = [];
    const arr = [];
    const kindObj = genres.reduce((acc , cur , idx) => {
        if(!acc[cur]) {
            acc[cur] = [{idx : idx , plays : plays[idx]}];  
        } else {
            const temp = [
                ...acc[cur],
                {idx : idx , plays : plays[idx]}
            ]
            acc[cur] = [...temp];
        }
        return acc;
    },{});
    for(let key in kindObj) {
        const albumArr = kindObj[key].sort((a , b) => {
            return a.plays > b.plays && -1;
        });
        const total = albumArr.reduce((acc , cur) => {
            acc = acc + cur.plays;
            return acc;
        }, 0);
        const cnt = kindObj[key].length <= 2 ? kindObj[key].length : 2
        const sliceArr = albumArr.slice(0 , cnt);
        arr.push([...sliceArr , total]);
    };
    const sortArr = arr.sort((a , b) => {
        return a[a.length - 1] > b[b.length - 1] && -1;
    });
    arr.forEach((firstEl) => {
        firstEl.forEach((secEl) => {
            if(isNaN(secEl)) answer.push(secEl.idx);
        });
    });
    return answer;
}