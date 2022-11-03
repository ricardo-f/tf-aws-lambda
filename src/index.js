exports.handler = async (event) => {
  let body = JSON.parse(event.body)
  const num1 = body.num1
  const num2 = body.num2
  const ops = body.ops
  const result = await lambdaCalc(num1, ops, num2)
  return result;
};

function lambdaCalc(num1, ops, num2) {
  let result
  
  switch (ops) {
    case 'sum':
      result = num1 + num2
      break;
    case 'subtraction':
      result = num1 - num2
      break;
    case 'multiplication':
      result = num1 * num2
      break;
    case 'division':
      result = num1 / num2
      break;
  }

  let response = {
    statusCode: 200,
    body: `the total of the ${ops} is ${result}`,
  }

  return response;
}
