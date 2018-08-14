pipeline {
    stages {
        stage('Build') { 
             docker.image("backstopjs/backstopjs").withRun('test')
        }
    }
}