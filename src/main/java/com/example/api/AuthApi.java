package com.example.api;

import io.restassured.response.Response;

public class AuthApi extends BaseApi {

    public Response login(String username, String password) {
        return request
                .auth()
                .preemptive()
                .basic(username, password)
                .post("/login");
    }

    public Response getUnauthorized() {
        return request.get("/unauthorized");
    }
}
