function QuestionService($http, $q) {
    const service = this;

    service.getQuestions = () => {
        return $q(function(resolve, reject) {
            $http.get('/questions')
            .then( (response) => {
                console.log(response.data);
                resolve(response.data);
            })
            .catch( (err) => {
                console.error(err);
                reject(err);
            })
        })
    }
}

angular
.module('QuizApp')
.service('QuestionService', QuestionService);

console.log('in question service');