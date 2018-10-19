function TaskDetailController ($scope, $rootScope) {
  
  $scope.taskDetail = $rootScope.arrayTasks[0];
  $rootScope.showDetail = true;
  $scope.showDetail = $rootScope.showDetail;

  $rootScope.$watch('selIndex', function(newValue, oldValue){
      if ($rootScope.selIndex != undefined){
        $scope.taskDetail = $rootScope.arrayTasks[$rootScope.selIndex];
        console.log($scope.taskDetail);
      } 
   }
  );

  $rootScope.$watch('showDetail', function(newValue, oldValue){
    if ($rootScope.showDetail != undefined){
      $scope.showDetail = $rootScope.showDetail;
    }
  });


  $scope.closeDetail = function(){
    $rootScope.showDetail = false;
  }

}

app.component("taskDetail", {
  templateUrl: "components/task-detail/task-detail.html",
  controller: TaskDetailController
});
