const PubSub = require('../helpers/pub_sub.js');

class ResultView{

  bindEvents(){
    PubSub.subscribe('WordCounter:result-calculated', (event) => {
      const numberOfWords = event.detail;
      console.log('in result view', numberOfWords);
      this.displayResult(numberOfWords);
    })

  }

displayResult(result){
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `You entered ${result} words.`
}


}



module.exports = ResultView;
