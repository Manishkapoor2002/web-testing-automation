package com.automation.config;

import io.restassured.RestAssured;
import io.restassured.parsing.Parser;

public class RestAssuredConfig {
    public static void setup() {
        RestAssured.baseURI = "http://localhost:8080";
        RestAssured.defaultParser = Parser.JSON;
    }
}