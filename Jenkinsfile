pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
  post
  {
    always
    {
      emailtext body:'Jenkins crop planing pipeline run sucessfully', subject:'pipeline status', to:'pujac3030@gmail.com'
    }
  }
}
