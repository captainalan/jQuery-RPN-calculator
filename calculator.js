$(document).ready(function() {
  
  var current_input = [];
  var calculator = new MathSolver

  var RESULT_MSG = "Enter an expression and then press the '=' button (or hit ENTER on your keyboard) to calculate result";
  var INPUT_MSG  = "Example: 1 1 +";

  $('#display').text(INPUT_MSG);
  $('#result').text(RESULT_MSG);

  function refreshDisplay() {
    current_input !== "" 
      ? $('#display').text(current_input.join('')) 
      : $('#display').text("No input yet.");
  }

  function pushSymbol(x) {
    current_input.push(x);
    refreshDisplay();
  }

  function popSymbol() {
    current_input.pop();
    refreshDisplay();
  }

  function evalResult() {
    if (current_input.length > 0)
      $('#result').text(calculator.solvePostfix(current_input.join('')));
    refreshDisplay();
  } 

  function clear(){
    current_input = [];
    refreshDisplay();
    $('#display').text(INPUT_MSG);
    $('#result').text(RESULT_MSG);
  }

  /* Number buttons */
  $('.number').on("click", function() {
    pushSymbol($(this).attr("value"))
  });
  
  /* Operators */
  $('.operator').on("click", function() {
    pushSymbol($(this).attr("value"))
  });

  /* Other buttons */
  $('#button-equal').on("click", function() {
    evalResult();
  });

  $('#button-space').on("click", function() {
    pushSymbol(' ');
  });

  $('#button-clear').on("click", function() {
    clear();
  });


  /* Keyboard Control */
  var validKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','^', ' ']
  $(document).keyup(function(event) {

    var isValid;
    (validKeys.indexOf(event.key) !== -1) ? isValid = true : isValid = false;

    if (event.key === 'Enter') {
      evalResult();
    } else if (event.key === "Backspace" || event.key === "Delete") {
      popSymbol();
    } else if (isValid) {
      pushSymbol(event.key);
    } else if (event.key === 'c') {
      clear(); // Do nothing for invalid keyboard input
    }
  });


  function MathSolver() {
    this.solvePostfix = function(postfix) {
      var resultStack = []; // Store a list of tokens 
      postfix = postfix.split(" ");
      for(var i = 0; i < postfix.length; i++) {
        if(postfix[i].isNumeric()){
          resultStack.push(postfix[i]);
        } else {
          var a = resultStack.pop();
          var b = resultStack.pop();
          switch(postfix[i]){
            case "+":
              resultStack.push(parseInt(a) + parseInt(b));
              break;
            case "-":
              resultStack.push(parseInt(a) - parseInt(b));
              break;
            case "*":
              resultStack.push(parseInt(a) * parseInt(b));
              break;
            case "/":
              resultStack.push(parseInt(a) / parseInt(b));
              break;
            case "^":
              resultStack.push(Math.pow(parseInt(b), parseInt(a)));
              break;
          }
        }
      }
      if(resultStack.length > 1) {
        return "error";
      } else {
        return resultStack.pop();
      }
    }
  }

});

String.prototype.isNumeric = function() {
  return !isNaN(parseFloat(this)) && isFinite(this);
}
