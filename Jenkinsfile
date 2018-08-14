pipeline {
    agent {
        docker {
            image 'backstopjs/backstopjs' 
        }
    }
    stages {
        stage('Test') { 
            steps {
                sh 'backstopjs test' 
            }
        }
    }
}