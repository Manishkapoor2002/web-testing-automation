package com.automation.tests;

import io.restassured.response.Response;
import org.testng.annotations.Test;
import com.automation.api.AuthApi;

public class AuthApiTest extends BaseTest {

    @Test
    public void verifyUnauthorizedAccessReturns401() {
        AuthApi authApi = new AuthApi();
        Response response = authApi.unauthorizedAccess();
        assert response.getStatusCode() == 401;
    }
}