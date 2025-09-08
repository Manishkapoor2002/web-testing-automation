package com.tradingwebsite.api;

import io.restassured.RestAssured;
import io.restassured.response.Response;

public class AuthApi {

    public Response login(String username, String password) {
        return RestAssured.given()
                .baseUri("http://localhost:8080")
                .basePath("/api/auth/login")
                .contentType("application/json")
                .body("{\"username\": \"" + username + "\", \"password\": \"" + password + "\"}")
                .post();
    }
}
