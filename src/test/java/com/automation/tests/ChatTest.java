package com.automation.tests;

import org.testng.annotations.Test;
import com.automation.pages.ChatPage;

public class ChatTest extends BaseTest {

    @Test
    public void verifyUserCanSendMessage() {
        ChatPage chatPage = new ChatPage(getDriver());
        chatPage.openChatWindow();
        chatPage.typeMessage("Hello, friend!");
        chatPage.clickSend();
        assert chatPage.isMessageDelivered();
    }
}