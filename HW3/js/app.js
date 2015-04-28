//app.js -- where the magic happens
var myApp = angular.module('myApp', ['ngRoute'])

//ng-route config (each section template)
.config(function ($routeProvider, $locationProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'default.html',
    })
    .when('/contact-info/:contact_index', {
      templateUrl: 'contact_info.html',
      controller: 'contactInfoCtrl'
    })
    .when('/add', {
      templateUrl: 'contact_form.html',
      controller: 'addContactCtrl'
    })
    .when('/edit/:contact_index', {
      templateUrl: 'contact_form.html',
      controller: 'editContactCtrl'
    })
    .otherwise({redirectTo: '/home'});
})

// nav controller
.controller('navCtrl', function ($scope) {
  $scope.nav = {
    navItems: ['home', 'add'],
    selectedIndex: 0,
    navClick: function ($index) {
      $scope.nav.selectedIndex = $index;
    }
  };
})

// home controller
.controller('homeCtrl', function ($scope, ContactService){
  $scope.contacts = ContactService.getContacts();

  $scope.removeContact = function (item) {
    var index = $scope.contacts.indexOf(item);
    $scope.contacts.splice(index, 1);
    $scope.removed = 'Contact successfully removed.';
  };

})

// contact info controller
.controller('contactInfoCtrl', function ($scope, $routeParams){
  var index = $routeParams.contact_index;
  $scope.currentContact = $scope.contacts[index];
})

// add contact controller
.controller('addContactCtrl', function ($scope, $location) {
  //needed to show the correct button on the contact form
  $scope.path = $location.path();

  $scope.addContact = function () {
    var contact = $scope.currentContact;
    contact.id = $scope.contacts.length;
    $scope.contacts.push(contact);
  };

})

// edit contact controller
.controller('editContactCtrl', function ($scope, $routeParams){
  $scope.index = $routeParams.contact_index;
  $scope.currentContact = $scope.contacts[$scope.index];
})

// directives
.directive('contact', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'contact.html'
  }
})

// services
.factory('ContactService', [function () {
  var factory = {};

  factory.getContacts = function () {
    return contactList;
  }

  // contact list (local, not stored in mongodb for this)
  var contactList = [
    {
        id: 0, 
        name: 'Luke Skywalker',
        homeaddress: '1234 Elm Ave',
        hometown: 'Blaine, Minnesota',
        invitestatus: 'Sent',
        wedstatus: 'Invite Sent Today'
    },
    {
        id: 1, 
        name: 'Yoda',
        homeaddress: '673 Falcon Rd',
        hometown: 'Chaska, Minnesota',
        invitestatus: 'Sent',
        wedstatus: 'Awaiting RSVP'
    },
    {   
        id: 2, 
        name: 'Obi-Wan Kanobi',
        homeaddress: 'PO Box 350',
        hometown: 'Hermantown, Minnesota',
        invitestatus: 'Not Sent',
        wedstatus: 'Finishing Save the Date'
    },
    {
        id: 3, 
        name: 'Darth Maul',
        homeaddress: '8921 Richmond St',
        hometown: 'Palo Alto, California',
        invitestatus: 'Not Sent',
        wedstatus: 'Have Not Started'
    },
];
  
  return factory;
}]);

