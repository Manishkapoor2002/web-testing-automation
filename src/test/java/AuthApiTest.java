package com.tradingwebsite.tests;

import com.tradingwebsite.api.AuthApi;
import io.qameta.allure.Description;
import io.qameta.allure.Feature;
import io.qameta.allure.Story;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class AuthApiTest {

    private AuthApi authApi;

    @BeforeClass
    public void setUp() {
        RestAssured.baseURI = "http://localhost:8080";
        authApi = new AuthApi();
    }

    @Test
    @Feature("Authorization")
    @Story("Verify unauthorized access returns 401")
    @Description("Test Description: Verify that unauthorized access returns 401 status code")
    public void testUnauthorizedAccess() {
        Response response = authApi.getUnauthorizedAccess();
        // Add assertions to verify response status code is 401
    }
}
