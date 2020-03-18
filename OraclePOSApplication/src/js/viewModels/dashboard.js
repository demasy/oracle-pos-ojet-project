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
    , 'ojs/ojbootstrap'
    , 'ojs/ojarraydataprovider'
    , 'ojs/ojknockout'
    , 'ojs/ojformlayout'
    , 'ojs/ojinputtext'
    , 'ojs/ojdatetimepicker'
    , 'ojs/ojselectcombobox'
    , 'ojs/ojselectsingle'
    , 'ojs/ojradioset'
    , 'ojs/ojaccordion'
    , 'ojs/ojswitch'
    , 'ojs/ojavatar'
    , 'ojs/ojtable'

  ]
  ,
  function (
    accUtils, oj, ko, $, Bootstrap, ArrayDataProvider
  ) {

    function DashboardViewModel() {

      var self = this;

      self.countryCode = ko.observable("EG");
      self.selectedCountryValue = ko.observable('EG');
      var countries = [
        { value: 'EG', label: 'Egypt' },
        { value: 'SA', label: 'Saudi Arabia' },
        { value: 'US', label: 'United States' }
      ];

      self.countriesData = new ArrayDataProvider(countries, { keyAttributes: 'value' });

      self.testValue = ko.observable();
      self.countryXValue = ko.observable();

      self.buttonClick = ko.observable();


      var storeArray = [
        {
          StoreId: 1,
          StoreCountry: 'EG',
          StoreShortName: 'ASEG',
          StoreName: 'Apply Store - Egypt',
          StoreDescription: 'Apply Store Egypt',
          StoreEnabledFlag: 'Yes',
          StoreStartDate: '13/11/1986',
          StoreEndDate: ''
        },
        {
          StoreId: 2,
          StoreCountry: 'UAE',
          StoreShortName: 'ASUEA',
          StoreName: 'Apply Store - Emirates',
          StoreDescription: 'Apply Store Emirates',
          StoreEnabledFlag: 'Yes',
          StoreStartDate: '13/11/1986',
          StoreEndDate: ''
        },
        {
          StoreId: 3,
          StoreCountry: 'SA',
          StoreShortName: 'ASSA',
          StoreName: 'Apply Store - Saudi Arabia',
          StoreDescription: 'Apply Store Saudi Arabia',
          StoreEnabledFlag: 'Yes',
          StoreStartDate: '13/11/1986',
          StoreEndDate: ''
        },
        {
          StoreId: 4,
          StoreCountry: 'JO',
          StoreShortName: 'ASJO',
          StoreName: 'Apply Store - Jordan',
          StoreDescription: 'Apply Store Jordan',
          StoreEnabledFlag: 'Yes',
          StoreStartDate: '13/11/1986',
          StoreEndDate: ''
        }, {
          StoreId: 5,
          StoreCountry: 'IQ',
          StoreShortName: 'ASIQ',
          StoreName: 'Apply Store - Iraq',
          StoreDescription: 'Apply Store Iraq',
          StoreEnabledFlag: 'Yes',
          StoreStartDate: '13/11/1986',
          StoreEndDate: ''
        },
        {
          StoreId: 6,
          StoreCountry: 'KW',
          StoreShortName: 'ASKKW',
          StoreName: 'Apply Store - Kuwait',
          StoreDescription: 'Apply Store Kuwait',
          StoreEnabledFlag: 'Yes',
          StoreStartDate: '13/11/1986',
          StoreEndDate: '01-OCT-16'
        }
      ]
      self.dataprovider = new ArrayDataProvider(storeArray, { keyAttributes: 'StoreId' });







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
