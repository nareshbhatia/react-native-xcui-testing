# React Native XCode UI Testing

A simple application to demonstrate React Native testing using Xcode UI Test
(XCUITest).

## Build Instructions

### Running the app in a simulator

```bash
yarn
cd ios
pod install
cd ..
yarn ios
```

### Running XCUITest

-   Open the Xcode project by double-clicking on
    ios/ReactNativeTesting.xcworkspace.
-   In XCode, open the test file
    ios/ReactNativeXCUITests/ReactNativeXCUITests.swift. This file contains two
    tests.
-   Run both tests by clicking on the play arrow on line 11 ("class
    ReactNativeXCUITests: UITestCase {").
