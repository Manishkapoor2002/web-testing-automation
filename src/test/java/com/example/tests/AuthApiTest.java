package com.example.tests;

import com.example.api.AuthApi;
import io.restassured.response.Response;
import org.testng.annotations.Test;

public class AuthApiTest {

    @Test
    public void testLogin() {
        AuthApi authApi = new AuthApi();
        Response response = authApi.login("validUser", "validPassword");
        // Add assertions to verify login success
    }

    @Test
    public void testUnauthorizedAccess() {
        AuthApi authApi = new AuthApi();
        Response response = authApi.getUnauthorized();
        // Add assertions to verify 401 status code
    }
}
