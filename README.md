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

### Archiving the app

To test the app using tools like Appium and Cucumber, you need to build an
archive. You can either use a pre-built archive from the
[Releases](https://github.com/nareshbhatia/react-native-xcui-testing/releases)
page or follow the steps to create your own:

-   Run `yarn ios:release` from the command line.
-   At the end of the output there will be a line indicating the location of the
    archive, e.g.
    /Users/narbhati/Library/Developer/Xcode/DerivedData/.../ReactNativeTesting.app.
    Note that ReactNativeTesting.app is a directory, not a file. This is the
    archive that bundles all the files needed to run the app on a simulator.
-   Copy the ReactNativeTesting.app directory to the desired location for
    testing.
