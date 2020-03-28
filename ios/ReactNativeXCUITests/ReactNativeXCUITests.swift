//
//  ReactNativeXCUITests.swift
//  ReactNativeXCUITests
//
//  Created by Naresh Bhatia on 3/25/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import XCTest

class ReactNativeXCUITests: UITestCase {

    func testSlidersControlColor() {
        // Set sliders to #000000
        // Note: This is a bit of a contrived test, because toNormalizedSliderPosition()
        // does not produce deterministic results for values other than #000000.
        app.sliders["slider-red"].adjust(toNormalizedSliderPosition: 0)
        app.sliders["slider-green"].adjust(toNormalizedSliderPosition: 0)
        app.sliders["slider-blue"].adjust(toNormalizedSliderPosition: 0)
      
        // Verify that the label says #000000
        XCTAssertTrue(app.staticTexts["color-value-text"].label == "#000000")
    }
  
    func testTabNavigator() {
        // Tap on WebView tab
        app.buttons["bottom-tab-bar-webview"].tap()
      
        // Wait for WebView to load
        // sleep(5)
        // print(app.debugDescription)

        // Verify that the WebView is showing the google home page
        // by testing the existance of the "IMAGES" link
        let imagesLink = app.links["IMAGES"]
        waitForElementToAppear(imagesLink)
        XCTAssert(imagesLink.exists)
    }

//    func testLaunchPerformance() {
//        if #available(macOS 10.15, iOS 13.0, tvOS 13.0, *) {
//            // This measures how long it takes to launch your application.
//            measure(metrics: [XCTOSSignpostMetric.applicationLaunch]) {
//                XCUIApplication().launch()
//            }
//        }
//    }
}
