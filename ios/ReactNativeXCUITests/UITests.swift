//
//  UITests.swift
//  ReactNativeXCUITests
//
//  Created by Naresh Bhatia on 3/26/20.
//  Copyright © 2020 Facebook. All rights reserved.
//
//  Based on https://github.com/joemasilotti/UI-Testing-Cheat-Sheet

import XCTest

class UITestCase: XCTestCase {
    let app = XCUIApplication()

    override func setUp() {
        super.setUp()
        continueAfterFailure = false
        app.launch()
    }

    override func tearDown() {
        super.tearDown()
        app.terminate()
    }

    func waitForElementToAppear(_ element: XCUIElement, file: String = #file, line: UInt = #line) {
        let existsPredicate = NSPredicate(format: "exists == true")
        expectation(for: existsPredicate, evaluatedWith: element, handler: nil)

        waitForExpectations(timeout: 5) { (error) -> Void in
            if (error != nil) {
                let message = "Failed to find \(element) after 5 seconds."
                self.recordFailure(withDescription: message, inFile: file, atLine: Int(line), expected: true)
            }
        }
    }
}
