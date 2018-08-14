pipeline {
    agent {
        docker {
            image 'backstopjs/backstopjs' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'test' 
            }
        }
    }
}