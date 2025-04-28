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
                script {
                    docker.build('crop-price-website')
                }
            }
        }
        stage('Run Tests') {
            steps {
                 echo 'Test successfull '
            }
        }
        stage('Deploy') {
            steps {
                script {
                    docker.image('crop-price-website').run('-d -p 80:80')
                }
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
