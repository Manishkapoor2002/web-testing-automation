package com.example.tests;

import com.example.pages.LoginPage;
import org.testng.annotations.Test;

public class LoginTest extends BaseTest {

    @Test
    public void testLogin() {
        LoginPage loginPage = new LoginPage(driver);
        loginPage.login("validUser", "validPassword");
        // Add assertions to verify login success
    }
}
