locals {
  env = "development"

  # Add the project id to `terraform.tfstate`
  project = var.project

  region   = "us-central1"
  location = "us-central"

  function_name        = "api-development"
  function_entry_point = "app"
}

provider "google" {
  project = local.project
  region  = local.region
}

module "function" {
  source      = "../../modules/function"
  project     = local.project
  name        = local.function_name
  entry_point = local.function_entry_point
}

module "database" {
  source  = "../../modules/database"
  project = local.project
  location  = local.location
}