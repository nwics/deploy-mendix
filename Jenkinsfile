pipeline {
  agent any
  environment {
    DOCKER_IMAGE = 'nabilwics/med_app:1.0'
    KUBECONFIG = 'C:/Users/ACER/.kube/config'
  
  }
  stages {
    stage('Build Docker Image') {
      steps {
        script {
          bat 'docker build -t %DOCKER_IMAGE% -f docker-mendix-buildpack-6.0.0/Dockerfile .'
        }
      }
    }

    stage('Push to DockerHub') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'dockerhub-credentials',  
          usernameVariable: 'DOCKER_USER',         
          passwordVariable: 'DOCKER_PASS'          
        )]) {
          bat 'echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin'
          bat 'docker push %DOCKER_IMAGE%'
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        bat 'kubectl apply -f deployment/kubernetes/deployment.yaml'
      }
    }
  }
}