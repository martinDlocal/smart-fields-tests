pipeline {
    agent {
        docker {
            image 'backstopjs/backstopjs' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install -g backstopjs' 
            }
        }
        stage('Test') { 
            steps {
                sh 'backstopjs test' 
            }
        }
    }
}