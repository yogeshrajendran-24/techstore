provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0c02fb55956c7d316" # Amazon Linux (update if needed)
  instance_type = "t3.micro"
  key_name      = "techstore-key"

  user_data = <<-EOF
              #!/bin/bash
              sudo yum update -y
              sudo amazon-linux-extras install docker -y
              systemctl start docker
              systemctl enable docker
              sudo usermod -aG docker ec2-user
              EOF

  tags = {
    Name = "techstore"
  }
}