package com.automation.api;

import io.restassured.RestAssured;
import io.restassured.response.Response;

public class AuthApi extends BaseApi {

    public Response login(String username, String password) {
        return RestAssured.given()
                .auth().preemptive().basic(username, password)
                .when().post("/login");
    }

    public Response unauthorizedAccess() {
        return RestAssured.given()
                .when().get("/unauthorized");
    }
}