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
        stage('Deploy') {
            steps {
                echo 'Deploying the crop planing project from CI CD pipeline'
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
