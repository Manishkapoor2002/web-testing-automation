package com.tradingwebsite.tests;

import com.tradingwebsite.pages.WithdrawalPage;
import org.testng.annotations.Test;
import io.qameta.allure.Description;
import io.qameta.allure.Feature;
import io.qameta.allure.Story;

public class WithdrawalNotificationTest extends BaseTest {

    @Test
    @Feature("Withdrawal Notification")
    @Story("Notification for successful submission")
    @Description("Test Description: Verify that notification is received for successful submission")
    public void testNotificationForSuccessfulSubmission() {
        WithdrawalPage withdrawalPage = new WithdrawalPage(getDriver());
        withdrawalPage.submitWithdrawalRequest();
        // Add assertions to verify notification is received
    }

    @Test
    @Feature("Withdrawal Notification")
    @Story("Notification for completed withdrawal request")
    @Description("Test Description: Verify that notification is received for completed withdrawal request")
    public void testNotificationForCompletedWithdrawalRequest() {
        WithdrawalPage withdrawalPage = new WithdrawalPage(getDriver());
        withdrawalPage.completeWithdrawalRequest();
        // Add assertions to verify notification is received
    }

    @Test
    @Feature("Withdrawal Notification")
    @Story("Notification for cancelled withdrawal request")
    @Description("Test Description: Verify that notification is received for cancelled withdrawal request")
    public void testNotificationForCancelledWithdrawalRequest() {
        WithdrawalPage withdrawalPage = new WithdrawalPage(getDriver());
        withdrawalPage.cancelWithdrawalRequest();
        // Add assertions to verify notification is received
    }

    @Test
    @Feature("Withdrawal Notification")
    @Story("Notification for issue with withdrawal request")
    @Description("Test Description: Verify that notification is received for issue with withdrawal request")
    public void testNotificationForIssueWithWithdrawalRequest() {
        WithdrawalPage withdrawalPage = new WithdrawalPage(getDriver());
        withdrawalPage.submitWithdrawalRequestWithIssue();
        // Add assertions to verify notification is received
    }
}
