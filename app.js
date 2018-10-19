var app = angular.module('taskoli', ['ui.router', 'ngMaterial', 'ngMessages', 'ngMap']);

app.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('blue-grey')
        .warnPalette('purple')

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('new_task', {
            url: '/new_task',
            template: '<new-task></new-task>'
        })
        .state('browse_task', {
            url: '/',
            template: '<task-list></task-list>'
        })
})

app.controller('mainCtrl', function(mainSvc, $rootScope, $scope){
    
    $scope.showMenu = function(){
        
    }

});

app.service('mainSvc', function($http){

    this.getPosts = function(){

        // return $http.get('https://jsonplaceholder.typicode.com/posts');

        var data = [
            {
                "task_id": "1",
                "username": "Anne",
                "user_photo": "assets/img/user1.jpeg",
                "user_rating": 4,
                "title": "Some Pretty Long Task",
                "distance": "1km",
                "post_date": "10",
                "skills": ["mechanics", "quantum physics"],
                "equipments": ["driller"],
                "offers": 4,
                "price": 50,
                "payment": ['cash'],
                "status": "Completed",
                "position": "Victoria, TX 77901, USA",
                "task_start_day": "2018-10-15 19:00:00",
                "task_description": "This task is for rebuilding and constructing curent home",
                "image_url": ['assets/img/room1.jpeg', 'assets/img/room2.jpg', 'assets/img/room3.jpeg', 'assets/img/room4.jpg']
                
            },
            {
                "task_id": "2",
                "username": "Danny",
                "user_photo": "assets/img/user2.jpeg",
                "user_rating": 3,
                "title": "Need help to reconstruct",
                "distance": "1km",
                "post_date": "9",
                "skills": ["mathes", "physics"],
                "equipments": ["vldozer"],
                "offers": 5,
                "price": 50,
                "payment": ['paypal', 'stripe'],
                "status": "tasked",
                "position": "Columbia, TX 77901, USA",
                "task_start_day": "2018-10-19 09:20:00",
                "task_description": "Lorem ipusm his task is for rebuilding and constructing curent home",
                "image_url": ['assets/img/room1.jpeg', 'assets/img/room2.jpg', 'assets/img/room3.jpeg', 'assets/img/room4.jpg']
                
            },
            {
                "task_id": "13",
                "username": "Jane",
                "user_photo": "assets/img/user3.jpeg",
                "user_rating": 4.5,
                "title": "Repair garden",
                "distance": "1km",
                "post_date": "12",
                "skills": ["mechanics", "quantum physics"],
                "equipments": ["driller"],
                "offers": 1,
                "price": 50,
                "payment": ['cash', 'paypal'],
                "status": "open",
                "position": "New York, TX 77901, USA",
                "task_start_day": "2018-10-16 19:21:10",
                "task_description": "This task is for rebuilding and constructing curent home",
                "image_url": ['assets/img/room1.jpeg', 'assets/img/room2.jpg', 'assets/img/room3.jpeg', 'assets/img/room4.jpg']
                
            },
            {
                "task_id": "24",
                "username": "Polle",
                "user_photo": "assets/img/user4.jpeg",
                "user_rating": 2.3,
                "title": "Some Pretty Long Task",
                "distance": "1km",
                "post_date": "2",
                "skills": ["mathes", "physics"],
                "equipments": ["vldozer"],
                "offers": 2,
                "price": 50,
                "payment": ['cash', 'paypal', 'stripe'],
                "status": "open",
                "position": "Victoria, TX 77901, USA",
                "task_start_day": "2018-10-17 14:40:00",
                "task_description": "This task is for rebuilding and constructing curent home",
                "image_url": ['assets/img/room1.jpeg', 'assets/img/room2.jpg', 'assets/img/room3.jpeg', 'assets/img/room4.jpg']
                
            },
            {
                "task_id": "45",
                "username": "Richard",
                "user_photo": "assets/img/user5.jpeg",
                "user_rating": 3.9,
                "title": "Some Pretty Long Task",
                "distance": "1km",
                "post_date": "9",
                "skills": ["mechanics", "quantum physics"],
                "equipments": ["driller"],
                "offers": 7,
                "price": 50,
                "payment": ['cash', 'paypal', 'stripe'],
                "status": "open",
                "position": "Victoria, TX 77901, USA",
                "task_start_day": "2018-10-15 19:00:00",
                "task_description": "This task is for rebuilding and constructing curent home",
                "image_url": ['assets/img/room1.jpeg', 'assets/img/room2.jpg', 'assets/img/room3.jpeg', 'assets/img/room4.jpg']
                
            },
            {
                "task_id": "2",
                "username": "Danny",
                "user_photo": "assets/img/user2.jpeg",
                "user_rating": 3,
                "title": "Need help to reconstruct",
                "distance": "1km",
                "post_date": "6",
                "skills": ["biology", "mechanics"],
                "equipments": ["tractor"],
                "offers": 22,
                "price": 50,
                "payment": ['paypal', 'stripe'],
                "status": "tasked",
                "position": "Victoria, TX 77901, USA",
                "task_start_day": "2018-10-15 19:00:00",
                "task_description": "This task is for rebuilding and constructing curent home",
                "image_url": ['assets/img/room1.jpeg', 'assets/img/room2.jpg', 'assets/img/room3.jpeg', 'assets/img/room4.jpg']
                
            },
            {
                "task_id": "13",
                "username": "Jane",
                "user_photo": "assets/img/user3.jpeg",
                "user_rating": 4.5,
                "title": "Repair garden",
                "distance": "1km",
                "post_date": "15",
                "skills": ["mechanics", "quantum physics"],
                "equipments": ["driller"],
                "offers": 14,
                "price": 50,
                "payment": ['cash', 'paypal'],
                "status": "open",
                "position": "Victoria, TX 77901, USA",
                "task_start_day": "2018-10-15 19:00:00",
                "task_description": "This task is for rebuilding and constructing curent home",
                "image_url": ['assets/img/room1.jpeg', 'assets/img/room2.jpg', 'assets/img/room3.jpeg', 'assets/img/room4.jpg']
                
            }
        ];

        return data;

    };

})