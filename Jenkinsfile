pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building crop planing project from git '
            }
        }
        stage('Test') {
            steps {
                echo 'Testing crop planing project'
            }
        }
    
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t crop-price-website .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    docker stop crop-price-container || true
                    docker rm crop-price-container || true
                    docker run -d -p 80:80 --name crop-price-container crop-price-website
                '''
            }
        }
    }
  post
  {
    always
    {
      emailext body:'Jenkins crop planing pipeline run sucessfully', subject:'pipeline status', to:'pujac3030@gmail.com'
    }
  }
}
