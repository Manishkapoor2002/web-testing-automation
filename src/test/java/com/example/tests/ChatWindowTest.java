package com.example.tests;

import com.example.pages.ChatWindowPage;
import org.testng.annotations.Test;

public class ChatWindowTest extends BaseTest {

    @Test
    public void testSendMessage() {
        ChatWindowPage chatWindowPage = new ChatWindowPage(driver);
        chatWindowPage.openChatWindow();
        chatWindowPage.sendMessage("Hello, World!");
        // Add assertions to verify message sent
    }

    @Test
    public void testMessageStatus() {
        ChatWindowPage chatWindowPage = new ChatWindowPage(driver);
        chatWindowPage.openChatWindow();
        chatWindowPage.sendMessage("Hello, World!");
        String status = chatWindowPage.getMessageStatus();
        // Add assertions to verify message status
    }
}
