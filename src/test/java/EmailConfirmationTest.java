package com.tradingwebsite.tests;

import com.tradingwebsite.pages.WithdrawalPage;
import org.testng.annotations.Test;
import io.qameta.allure.Description;
import io.qameta.allure.Feature;
import io.qameta.allure.Story;

public class EmailConfirmationTest extends BaseTest {

    @Test
    @Feature("Email Confirmation")
    @Story("Email confirmation for successful submission")
    @Description("Test Description: Verify that email confirmation is received for successful submission")
    public void testEmailConfirmationForSuccessfulSubmission() {
        WithdrawalPage withdrawalPage = new WithdrawalPage(getDriver());
        withdrawalPage.submitWithdrawalRequest();
        // Add assertions to verify email confirmation is received
    }

    @Test
    @Feature("Email Confirmation")
    @Story("Email confirmation for completed withdrawal")
    @Description("Test Description: Verify that email confirmation is received for completed withdrawal")
    public void testEmailConfirmationForCompletedWithdrawal() {
        WithdrawalPage withdrawalPage = new WithdrawalPage(getDriver());
        withdrawalPage.completeWithdrawalRequest();
        // Add assertions to verify email confirmation is received
    }

    @Test
    @Feature("Email Confirmation")
    @Story("Email confirmation for cancelled withdrawal")
    @Description("Test Description: Verify that email confirmation is received for cancelled withdrawal")
    public void testEmailConfirmationForCancelledWithdrawal() {
        WithdrawalPage withdrawalPage = new WithdrawalPage(getDriver());
        withdrawalPage.cancelWithdrawalRequest();
        // Add assertions to verify email confirmation is received
    }

    @Test
    @Feature("Email Confirmation")
    @Story("Email notification for issue with withdrawal request")
    @Description("Test Description: Verify that email notification is received for issue with withdrawal request")
    public void testEmailNotificationForIssueWithWithdrawalRequest() {
        WithdrawalPage withdrawalPage = new WithdrawalPage(getDriver());
        withdrawalPage.submitWithdrawalRequestWithIssue();
        // Add assertions to verify email notification is received
    }
}
