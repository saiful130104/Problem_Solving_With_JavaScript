// Problem Links: https://www.codewars.com/kata/523a86aa4230ebb5420001e1
// You should write a function that will return return an array of all the anagrams of a given string or an empty array if there are none

function anagrams(word, words) {
    word = word.toLowerCase().split("").sort().join("")
    let newWords = []
    for(let nWord of words){
      let tmp = nWord
      if(nWord.toLowerCase().split("").sort().join("") == word){
        newWords.push(tmp)
      }
        
    }
    return newWords
  }