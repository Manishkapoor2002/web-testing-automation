package com.tradingwebsite.tests;

import com.tradingwebsite.pages.WithdrawalHistoryPage;
import org.testng.annotations.Test;
import io.qameta.allure.Description;
import io.qameta.allure.Feature;
import io.qameta.allure.Story;

public class WithdrawalStatusTest extends BaseTest {

    @Test
    @Feature("Withdrawal Status")
    @Story("View list of withdrawal requests")
    @Description("Test Description: Verify that list of all withdrawal requests is displayed")
    public void testViewListOfWithdrawalRequests() {
        WithdrawalHistoryPage withdrawalHistoryPage = new WithdrawalHistoryPage(getDriver());
        withdrawalHistoryPage.navigateToWithdrawalHistorySection();
        // Add assertions to verify list of withdrawal requests is displayed
    }

    @Test
    @Feature("Withdrawal Status")
    @Story("View details of a specific withdrawal request")
    @Description("Test Description: Verify that detailed information of a specific withdrawal request is displayed")
    public void testViewDetailsOfSpecificWithdrawalRequest() {
        WithdrawalHistoryPage withdrawalHistoryPage = new WithdrawalHistoryPage(getDriver());
        withdrawalHistoryPage.selectWithdrawalRequest("requestId");
        // Add assertions to verify detailed information is displayed
    }

    @Test
    @Feature("Withdrawal Status")
    @Story("View status of pending withdrawal request")
    @Description("Test Description: Verify that status of pending withdrawal request is displayed as 'Pending'")
    public void testViewStatusOfPendingWithdrawalRequest() {
        WithdrawalHistoryPage withdrawalHistoryPage = new WithdrawalHistoryPage(getDriver());
        withdrawalHistoryPage.viewWithdrawalRequestDetails("pendingRequestId");
        // Add assertions to verify status is displayed as 'Pending'
    }

    @Test
    @Feature("Withdrawal Status")
    @Story("View status of completed withdrawal request")
    @Description("Test Description: Verify that status of completed withdrawal request is displayed as 'Completed'")
    public void testViewStatusOfCompletedWithdrawalRequest() {
        WithdrawalHistoryPage withdrawalHistoryPage = new WithdrawalHistoryPage(getDriver());
        withdrawalHistoryPage.viewWithdrawalRequestDetails("completedRequestId");
        // Add assertions to verify status is displayed as 'Completed'
    }
}
