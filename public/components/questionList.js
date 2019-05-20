function QuestionList(QuestionService) {
    const ctrl = this;

    ctrl.getList = () => {
        QuestionService.getQuestions()
        .then( (data) => {
            ctrl.questions = data;
        })
        .catch( (err) => {
            console.log(err);
        })
    };

    ctrl.getList();
}

angular
.module('QuizApp')
.component('questionList', {
    controller: QuestionList,
    template: 
    `
        <div>
            <h2> Questions: </h2>
            <div ng-repeat="questionItem in $ctrl.questions">
                {{questionItem.question}}

                <div ng-show="showAnswer">
                    <p>{{questionItem.answer}}</p>

                    <button ng-click="showAnswer=false">
                        Hide Answer
                    </button>
                </div>
                
                <button ng-click="showAnswer=!showAnswer" ng-show="!showAnswer">
                    Show Answer
                </button>
            </div>
        </div>
    `
});