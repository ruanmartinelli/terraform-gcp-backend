terraform {
  backend "gcs" {
    bucket = "terraform-gcp-backend-tfstate"
    prefix = "env/development"
  }
}

# terraform {
#   backend "local" {}
# }