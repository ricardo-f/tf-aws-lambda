# tf-aws-lambda

## Objective:
- Be able to use URL endpoint to call a AWS Lambda instead of a API Gateway or ALB
## The brief how:
- With Terraform to deploy the Lambda with the URL endpoint.
- The function is a badly written javascript file that allow you to do the 4 basic math operation (+, -, *, /) through POST requests with the following payload:
```json
{"num1":1,"ops":"sum","num2":1}
```
- The response will be something like:
```
the total of the sum is 2
```
## How?
- The terraform files have the objective of: 
  - Zip the src file through the "data resource"
  - Create the AWS Lambda with the zip file as source code origin
  - Configure the URL endpoint
  - Expose the URL with the url output
- With the end of "terraform apply", grab the url
- You will be able to do the 4 basic math operation (+, -, *, /) through POST requests
- The valid value for the "ops" key are:
  - "sum"
    ```json
    {"num1":1,"ops":"sum","num2":1}
    ```
  - "subtraction"
    ```json
    {"num1":5,"ops":"subtraction","num2":2}
    ```
  - "multiplication"
    ```json
    {"num1":5,"ops":"multiplication","num2":2}
    ```
  - "division"
    ```json
    {"num1":10,"ops":"division","num2":2}
    ```
- The payloads above are userful if you use Postman, for cURL you can use the bellow commands:
  - "sum"
    ```shell
    curl 'yourUrlNotMine' \
      -H 'Content-Type: application/json' \
      -d '{"num1": 1, "ops": "sum", "num2": 1 }'
    ```
  - "subtraction"
    ```shell
    curl 'yourUrlNotMine' \
      -H 'Content-Type: application/json' \
      -d '{"num1": 5, "ops": "subtraction", "num2": 2 }'
    ```
  - "multiplication"
    ```shell
    curl 'yourUrlNotMine' \
      -H 'Content-Type: application/json' \
      -d '{"num1": 5, "ops": "multiplication", "num2": 2 }'
    ```
  - "division"
    ```shell
    curl 'yourUrlNotMine' \
      -H 'Content-Type: application/json' \
      -d '{"num1": 10, "ops": "division", "num2": 2 }'
    ```
## Why?

- Personal project.
- Learn more about the used tools.
- Share knowledge (that's why is public).

## Wanna help or test it?
- Create a new branch
- Open a PR to the main branch. **Direct commits to main are not allowed.**
### Extra Docs and ref:
- [Built-in HTTPS Endpoints for Single-Function Microservices](https://aws.amazon.com/pt/blogs/aws/announcing-aws-lambda-function-urls-built-in-https-endpoints-for-single-function-microservices/)
