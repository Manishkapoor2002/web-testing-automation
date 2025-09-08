package com.automation.api;

import com.automation.config.RestAssuredConfig;

public class BaseApi {
    static {
        RestAssuredConfig.setup();
    }
}