pipeline{
    agent any

    parameters{
        string(name: "SPEC", defaultValue: "cypress/e2e/**/**", description: "Ej: cypress/e2e/")
        choice(name: "BROWSER" ,choices: ['chrome','edge'], description:"Escoja un browser")
    }

/*
    options{
        ansiColor('xterm')
    }
*/
    stages{
        stage('Build'){
            steps{
                echo "Buiding application"
            }

        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}" 
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying the application"
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}