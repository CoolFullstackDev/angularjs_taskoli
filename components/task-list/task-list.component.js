function TaskListController(mainSvc, $scope, $rootScope) {

  $scope.tasks = mainSvc.getPosts();  
  $rootScope.arrayTasks = $scope.tasks;
  
  $scope.searchStr = "";

  // mainSvc.getPosts().then(function(response){
  //     $scope.posts = response.data;
  // })
}

app.component("taskList", {
  templateUrl: "components/task-list/task-list.html",
  controller: TaskListController
});


app.controller("taskListController", function(
  $rootScope,
  $scope,
  $timeout,
  $mdSidenav,
  $log,
  mainSvc
) {

  // // if user click task, get id from selected item
  // $scope.clickTaskItem = function(id){
  //   $rootScope.selIndex = id;
  // }


  $scope.toggleLeft = buildDelayedToggler("left");
  $scope.toggleRight = buildToggler("right");

  $scope.isOpenRight = function() {
    return $mdSidenav("right").isOpen();
  };
  /**
   * Supplies a function that will continue to operate until the
   * time is up.
   */
  function debounce(func, wait, context) {
    var timer;

    return function debounced() {
      var context = $scope,
        args = Array.prototype.slice.call(arguments);
      $timeout.cancel(timer);
      timer = $timeout(function() {
        timer = undefined;
        func.apply(context, args);
      }, wait || 10);
    };
  }

  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  function buildDelayedToggler(navID) {
    return debounce(function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID)
        .toggle()
        .then(function() {
          $log.debug("toggle " + navID + " is done");
        });
    }, 200);
  }

  function buildToggler(navID) {
    return function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID)
        .toggle()
        .then(function() {
          $log.debug("toggle " + navID + " is done");
        });
    };
  }

  
});

app.controller("LeftCtrl", function($scope, $timeout, $mdSidenav, $log, $rootScope) {
  $scope.close = function() {
    // Component lookup should always be available since we are not using `ng-if`
    $mdSidenav("left")
      .close()
      .then(function() {
        $log.debug("close LEFT is done");
      });
  };

  $scope.clickTaskItem = function(id){
    $rootScope.selIndex = id;
    $rootScope.showDetail = true;
    
    $mdSidenav("left")
      .close()
      .then(function() {
        $log.debug("close LEFT is done");
      });
  }
});
