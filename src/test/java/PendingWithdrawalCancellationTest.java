package com.tradingwebsite.tests;

import com.tradingwebsite.pages.WithdrawalHistoryPage;
import org.testng.annotations.Test;
import io.qameta.allure.Description;
import io.qameta.allure.Feature;
import io.qameta.allure.Story;

public class PendingWithdrawalCancellationTest extends BaseTest {

    @Test
    @Feature("Withdrawal Cancellation")
    @Story("View option to cancel pending withdrawal request")
    @Description("Test Description: Verify that option to cancel pending withdrawal request is displayed")
    public void testViewOptionToCancelPendingWithdrawalRequest() {
        WithdrawalHistoryPage withdrawalHistoryPage = new WithdrawalHistoryPage(getDriver());
        withdrawalHistoryPage.selectPendingWithdrawalRequest("pendingRequestId");
        // Add assertions to verify option to cancel request is displayed
    }

    @Test
    @Feature("Withdrawal Cancellation")
    @Story("Successful cancellation of pending withdrawal request")
    @Description("Test Description: Verify that status changes to 'Cancelled' after successful cancellation")
    public void testSuccessfulCancellationOfPendingWithdrawalRequest() {
        WithdrawalHistoryPage withdrawalHistoryPage = new WithdrawalHistoryPage(getDriver());
        withdrawalHistoryPage.cancelPendingWithdrawalRequest("pendingRequestId");
        // Add assertions to verify status changes to 'Cancelled'
    }

    @Test
    @Feature("Withdrawal Cancellation")
    @Story("Funds restoration after cancellation")
    @Description("Test Description: Verify that funds are restored to available balance after cancellation")
    public void testFundsRestorationAfterCancellation() {
        WithdrawalHistoryPage withdrawalHistoryPage = new WithdrawalHistoryPage(getDriver());
        withdrawalHistoryPage.cancelPendingWithdrawalRequest("pendingRequestId");
        // Add assertions to verify funds are restored to available balance
    }

    @Test
    @Feature("Withdrawal Cancellation")
    @Story("Attempt to cancel completed withdrawal request")
    @Description("Test Description: Verify that error message is displayed when trying to cancel completed withdrawal request")
    public void testAttemptToCancelCompletedWithdrawalRequest() {
        WithdrawalHistoryPage withdrawalHistoryPage = new WithdrawalHistoryPage(getDriver());
        withdrawalHistoryPage.cancelCompletedWithdrawalRequest("completedRequestId");
        // Add assertions to verify error message is displayed
    }
}
