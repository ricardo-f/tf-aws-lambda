exports.handler = async (event) => {
  let body = JSON.parse(event.body)
  const num1 = body.num1
  const num2 = body.num2
  const ops = body.ops
  const result = await lambdaCalc(num1, ops, num2)
  return result;
};

function lambdaCalc(num1, ops, num2) {
  if (ops === "sum") {
    const result = num1 + num2
    let response = {
      statusCode: 200,
      body: `the total of the ${ops} is ${result}`,
    }
    return response;
  }
  
  if (ops === "subtraction") {
    const result = num1 - num2
    let response = {
      statusCode: 200,
      body: `the total of the ${ops} is ${result}`,
    }
    return response;
  }

  if (ops === "multiplication") {
    const result = num1 * num2
    let response = {
      statusCode: 200,
      body: `the total of the ${ops} is ${result}`,
    }
    return response;
  }

  if (ops === "division") {
    if ( num2 === 0 ) {
      let response = {
        statusCode: 400,
        body: "num2 can't be 0",
      };
      return response;
    }
    const result = num1 / num2
    let response = {
      statusCode: 200,
      body: `the total of the ${ops} is ${result}`,
    }
    return response;
  }
}
