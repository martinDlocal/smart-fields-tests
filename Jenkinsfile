pipeline {
    stages {
        stage('Build') { 
            steps {
                sh 'docker run --rm -v $(pwd):/src backstopjs/backstopjs test'
            }
        }
    }
}