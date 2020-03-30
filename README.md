# React Native XCode UI Testing

A simple application to demonstrate React Native testing using Xcode UI Test
(XCUITest).

## Build Instructions

### Debug Build

```bash
yarn
cd ios
pod install
cd ..
yarn ios
```

### Test using XCUITest

-   Open the Xcode project by double-clicking on
    ios/ReactNativeTesting.xcworkspace.
-   In XCode, open the test file
    ios/ReactNativeXCUITests/ReactNativeXCUITests.swift. This file contains two
    tests.
-   Run both tests by clicking on the play arrow on line 11 ("class
    ReactNativeXCUITests: UITestCase {").

### Release Build

To test the app using tools like Appium and Cucumber, you need a release build
using your own certificates. Follow the steps to create your own release build:

-   In Xcode, open Project Navigator > Signing & Capabilities.
-   Fill the details for your certificate. Easiest is to select "Development"
    for Signing Certificate and let Xcode "Automatically manage signing" (check
    the checkbox).
-   Run `yarn ios:release` from the command line.
-   At the end of the output there will be a line indicating the location of the
    release archive, e.g.
    /Users/narbhati/Library/Developer/Xcode/DerivedData/.../ReactNativeTesting.app.
    Note that ReactNativeTesting.app is a directory, not a file. This is the
    archive that bundles all the files needed to run the app in release mode.
-   Copy the ReactNativeTesting.app directory to the desired location for
    testing.
