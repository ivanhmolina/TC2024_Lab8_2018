angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

  .state('question1', {
    url: '/page1',
    templateUrl: 'templates/question1.html',
    controller: 'question1Ctrl'
  })

  .state('question2', {
    url: '/page2',
    params:{
      question1:null
    },
    templateUrl: 'templates/question2.html',
    controller: 'question2Ctrl'
  })

  .state('question3', {
    url: '/page3',
    params:{
      question1:null,
      question2:null
    },
    templateUrl: 'templates/question3.html',
    controller: 'question3Ctrl'
  })

  .state('question4', {
    url: '/page4',
    params:{
      question1:null,
      question2:null,
      question3:null
    },
    templateUrl: 'templates/question4.html',
    controller: 'question4Ctrl'
  })

  .state('answers', {
    url: '/page5',
    params:{
      question1:null,
      question2:null,
      question3:null,
      question4:null
    },
    templateUrl: 'templates/answers.html',
    controller: 'answersCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});