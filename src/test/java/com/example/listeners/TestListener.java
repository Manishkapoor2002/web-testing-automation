package com.example.listeners;

import org.testng.ITestListener;
import org.testng.ITestResult;
import com.example.utils.Logger;

public class TestListener implements ITestListener {

    @Override
    public void onTestStart(ITestResult result) {
        Logger.logInfo("Test started: " + result.getName());
    }

    @Override
    public void onTestSuccess(ITestResult result) {
        Logger.logInfo("Test passed: " + result.getName());
    }

    @Override
    public void onTestFailure(ITestResult result) {
        Logger.logError("Test failed: " + result.getName());
    }

    // Other overridden methods
}
