resource "aws_lambda_function" "calculator" {
  filename         = "lambda_function.zip"
  function_name    = "calculator"
  role             = aws_iam_role.calculator.arn
  handler          = "index.handler"
  source_code_hash = data.archive_file.lambda_zip.output_base64sha256
  runtime          = "nodejs16.x"
}

resource "aws_lambda_function_url" "calculator_live" {
  function_name      = aws_lambda_function.calculator.function_name
  authorization_type = "NONE"

  cors {
    allow_origins  = ["*"]
    allow_methods  = ["*"]
    allow_headers  = ["date", "keep-alive"]
    expose_headers = ["keep-alive", "date"]
    max_age        = 86400
  }
}
