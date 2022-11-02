output "url" {
  description = "the url for the $LATEST lambda version"
  value = aws_lambda_function_url.test_live.function_url
}