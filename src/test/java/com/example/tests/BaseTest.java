package com.example.tests;

import com.example.utils.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

public abstract class BaseTest {

    protected WebDriver driver;

    @BeforeMethod
    public void setUp() {
        driver = WebDriverManager.getDriver();
    }

    @AfterMethod
    public void tearDown() {
        WebDriverManager.quitDriver();
    }
}
