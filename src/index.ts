type keywords = {
  name: string;
};
const keywordsData: keywords[] = [
  { name: "action" },
  { name: "drama" },
  { name: "film" },
  { name: "funny" },
  { name: "study" },
  { name: "movie" },

];

const getArrayOfString = (dataset: keywords[], userData: string) => {
  const matrixArray: number[] = [];
  const userDataSets = userData.split(" ");
  dataset?.forEach((item) => {
    if (userDataSets.some(userKey => item.name.includes(userKey))) matrixArray.push(1);
    matrixArray.push(0);
  });
  return matrixArray;
};

const storeResultInput = getArrayOfString(keywordsData,"fun");
const storeResultInputSecond = getArrayOfString(keywordsData,"movie fun");

console.log(storeResultInput,storeResultInputSecond)


type cosinInput = number[];

const CosinCalculator = (one:cosinInput,two:cosinInput) => {
    let dotProduct = 0;
    let oneSq = 0;
    let twoSq = 0;
    for(let a= 0; a<one.length;a++) {
        dotProduct += one[a] * two[a];
        oneSq += (one[a]**2);
        twoSq += (two[a]**2);
    }
    console.log(dotProduct);
    console.log(oneSq);
    console.log(twoSq);
    const result = dotProduct / (Math.sqrt(oneSq) * Math.sqrt(twoSq))
    console.log(result)
    return result;
}
CosinCalculator(storeResultInput,storeResultInputSecond)