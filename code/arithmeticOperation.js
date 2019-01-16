module.exports.function = function arithmeticOperation (leftOperand, rightOperand, operator) {
  var result = 0;
  var name = '';
  
  operator = String(operator);
  
  if(operator === "plus"){
    name = "더하기";
    result = leftOperand + rightOperand;
  }else if(operator === "subtract"){
    name = "빼기";
    result = leftOperand - rightOperand;
  }else if(operator === "multiplication"){
    name = "곱하기";
    result = leftOperand * rightOperand;
  }else if(operator === "division"){
    name = "나누기";
    result = leftOperand / rightOperand;
  }
  
  
  return {
    operator: name,
    result: result
  };
}
