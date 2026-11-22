terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket         = "hira-fertility-tf-state-065133039232"
    key            = "prod/terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "hira-fertility-tf-locks"
    encrypt        = true
  }
}

provider "aws" {
  region = var.aws_region
}
