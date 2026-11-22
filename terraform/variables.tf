variable "aws_region" {
  type        = string
  description = "AWS region for deployment"
  default     = "ap-south-1"
}

variable "app_name" {
  type        = string
  description = "Application name"
  default     = "hira-fertility-hospital"
}

variable "environment" {
  type        = string
  description = "Environment name"
  default     = "prod"
}

variable "container_port" {
  type        = number
  description = "Container port Next.js runs on"
  default     = 3000
}

variable "image_tag" {
  type        = string
  description = "Docker image tag to deploy"
  default     = "latest"
}
