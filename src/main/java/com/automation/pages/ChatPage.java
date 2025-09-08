package com.automation.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ChatPage extends BasePage {
    private By sendMessageButton = By.id("sendMessage");
    private By messageInputField = By.id("messageInput");
    private By sendButton = By.id("sendButton");
    private By messageConfirmation = By.id("messageConfirmation");

    public ChatPage(WebDriver driver) {
        super(driver);
    }

    public void openChatWindow() {
        driver.findElement(sendMessageButton).click();
    }

    public void typeMessage(String message) {
        driver.findElement(messageInputField).sendKeys(message);
    }

    public void clickSend() {
        driver.findElement(sendButton).click();
    }

    public boolean isMessageDelivered() {
        return driver.findElement(messageConfirmation).isDisplayed();
    }
}