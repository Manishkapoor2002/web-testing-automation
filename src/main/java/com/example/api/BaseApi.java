package com.example.api;

import io.restassured.RestAssured;
import io.restassured.specification.RequestSpecification;

public abstract class BaseApi {
    protected RequestSpecification request;

    public BaseApi() {
        RestAssured.baseURI = "http://localhost:8080";
        this.request = RestAssured.given();
    }

    // Common methods for all APIs
}
