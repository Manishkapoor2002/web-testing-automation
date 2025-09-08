package com.automation.tests;

import org.testng.annotations.Test;
import com.automation.pages.LoginPage;

public class LoginTest extends BaseTest {

    @Test
    public void verifyUserCanLoginWithValidCredentials() {
        LoginPage loginPage = new LoginPage(getDriver());
        loginPage.enterUsername("validUser");
        loginPage.enterPassword("validPassword");
        loginPage.clickLogin();
        // Add assertions to verify successful login
    }
}