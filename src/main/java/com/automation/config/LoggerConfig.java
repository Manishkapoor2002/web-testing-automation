package com.automation.config;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class LoggerConfig {
    private static final Logger logger = LogManager.getLogger(LoggerConfig.class);

    public static Logger getLogger() {
        return logger;
    }
}