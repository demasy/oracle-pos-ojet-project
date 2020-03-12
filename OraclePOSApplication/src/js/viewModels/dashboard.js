/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(
  [
    'accUtils'
    , 'ojs/ojcore'
    , 'knockout'
    , 'jquery'
    , 'ojs/ojknockout'
    , 'ojs/ojformlayout'
    , 'ojs/ojinputtext'
    , 'ojs/ojdatetimepicker'
    , 'ojs/ojselectcombobox'
    , 'ojs/ojselectsingle'
    // , 'ojs/ojbootstrap'
    // , 'ojs/ojarraydataprovider'
  ]
  ,
  function (
    accUtils
    , oj
    , ko
    , $
    // , Bootstrap
    // , ArrayDataProvider
  ) {

    function DashboardViewModel() {

      var self = this;

      self.countryCode = ko.observable("EG");

      // var countries = [
      //   { value: 'IE', label: 'Internet Explorer' },
      //   { value: 'FF', label: 'Firefox' },
      //   { value: 'CH', label: 'Chrome' },
      //   { value: 'OP', label: 'Opera' },
      //   { value: 'SA', label: 'Safari' }
      // ];

      // self.countriesList = new ArrayDataProvider(countries, { keyAttributes: 'value' });


      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function () {
        accUtils.announce('Dashboard page loaded.', 'assertive');
        document.title = "Dashboard";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function () {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function () {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return DashboardViewModel;
  }
);
