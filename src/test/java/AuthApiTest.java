package com.tradingwebsite.tests;

import com.tradingwebsite.api.AuthApi;
import io.restassured.response.Response;
import org.testng.annotations.Test;
import static org.testng.Assert.assertEquals;

public class AuthApiTest {

    @Test(description = "Verify unauthorized access returns 401")
    public void testUnauthorizedAccess() {
        AuthApi authApi = new AuthApi();
        Response response = authApi.login("invalidUser", "invalidPassword");
        assertEquals(response.getStatusCode(), 401);
    }
}
