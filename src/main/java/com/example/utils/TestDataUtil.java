package com.example.utils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class TestDataUtil {

    public static String getTestData(String key) {
        try {
            String content = new String(Files.readAllBytes(Paths.get("src/test/resources/testdata.json")));
            // Parse JSON and return value for the key
            // Assuming JSON is a simple key-value pair
            return content;
        } catch (IOException e) {
            Logger.logError("Error reading test data file: " + e.getMessage());
            return null;
        }
    }
}
