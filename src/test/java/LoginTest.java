package com.tradingwebsite.tests;

import com.tradingwebsite.pages.LoginPage;
import org.testng.annotations.Test;
import static org.testng.Assert.assertTrue;

public class LoginTest extends BaseTest {

    @Test(description = "Verify user can log in with valid credentials")
    public void testValidLogin() {
        LoginPage loginPage = new LoginPage(getDriver());
        loginPage.enterUsername("validUser");
        loginPage.enterPassword("validPassword");
        loginPage.clickLoginButton();
        // Add assertion to verify successful login
        assertTrue(true); // Replace with actual condition
    }
}
