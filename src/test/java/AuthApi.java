package com.tradingwebsite.api;

import io.restassured.RestAssured;
import io.restassured.response.Response;

public class AuthApi {

    public Response login(String username, String password) {
        return RestAssured.given()
                .auth().preemptive().basic(username, password)
                .when()
                .post("http://localhost:8080/api/login");
    }

    public Response getUnauthorizedAccess() {
        return RestAssured.given()
                .when()
                .get("http://localhost:8080/api/protected");
    }
}
