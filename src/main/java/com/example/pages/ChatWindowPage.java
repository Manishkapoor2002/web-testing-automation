package com.example.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ChatWindowPage extends BasePage {

    private By sendMessageButton = By.id("sendMessageButton");
    private By messageInputField = By.id("messageInput");
    private By messageStatus = By.id("messageStatus");

    public ChatWindowPage(WebDriver driver) {
        super(driver);
    }

    public void openChatWindow() {
        driver.findElement(sendMessageButton).click();
    }

    public void sendMessage(String message) {
        driver.findElement(messageInputField).sendKeys(message);
        driver.findElement(sendMessageButton).click();
    }

    public String getMessageStatus() {
        return driver.findElement(messageStatus).getText();
    }
}
