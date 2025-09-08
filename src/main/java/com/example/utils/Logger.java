package com.example.utils;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

public class Logger {
    private static final Logger logger = LoggerFactory.getLogger(Logger.class);

    public static void logInfo(String message) {
        logger.info(message);
    }

    public static void logError(String message) {
        logger.error(message);
    }

    // Other logging methods
}
