package com.tradingwebsite.tests;

import com.tradingwebsite.pages.LoginPage;
import org.testng.annotations.Test;
import io.qameta.allure.Description;
import io.qameta.allure.Feature;
import io.qameta.allure.Story;

public class LoginTest extends BaseTest {

    @Test
    @Feature("Login")
    @Story("Verify user can log in with valid credentials")
    @Description("Test Description: Verify that user can log in with valid credentials")
    public void testValidLogin() {
        LoginPage loginPage = new LoginPage(getDriver());
        loginPage.enterUsername("validUser");
        loginPage.enterPassword("validPassword");
        loginPage.clickLoginButton();
        // Add assertions to verify successful login
    }
}
