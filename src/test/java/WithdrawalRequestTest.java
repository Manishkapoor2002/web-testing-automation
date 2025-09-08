package com.tradingwebsite.tests;

import com.tradingwebsite.pages.WithdrawalPage;
import org.testng.annotations.Test;
import io.qameta.allure.Description;
import io.qameta.allure.Feature;
import io.qameta.allure.Story;

public class WithdrawalRequestTest extends BaseTest {

    @Test
    @Feature("Withdrawal")
    @Story("View available balance for withdrawal")
    @Description("Test Description: Verify that available balance for withdrawal is displayed")
    public void testViewAvailableBalance() {
        WithdrawalPage withdrawalPage = new WithdrawalPage(getDriver());
        withdrawalPage.navigateToWithdrawalSection();
        // Add assertions to verify available balance is displayed
    }

    @Test
    @Feature("Withdrawal")
    @Story("Submit valid withdrawal request")
    @Description("Test Description: Verify that valid withdrawal request is processed and confirmation message is displayed")
    public void testSubmitValidWithdrawalRequest() {
        WithdrawalPage withdrawalPage = new WithdrawalPage(getDriver());
        withdrawalPage.enterWithdrawalAmount("100");
        withdrawalPage.submitWithdrawalRequest();
        // Add assertions to verify confirmation message is displayed
    }

    @Test
    @Feature("Withdrawal")
    @Story("Submit withdrawal request with insufficient funds")
    @Description("Test Description: Verify that error message is displayed when withdrawal amount is greater than available balance")
    public void testSubmitWithdrawalRequestWithInsufficientFunds() {
        WithdrawalPage withdrawalPage = new WithdrawalPage(getDriver());
        withdrawalPage.enterWithdrawalAmount("1000");
        withdrawalPage.submitWithdrawalRequest();
        // Add assertions to verify error message is displayed
    }

    @Test
    @Feature("Withdrawal")
    @Story("Process successful withdrawal request")
    @Description("Test Description: Verify that funds are deducted from trading account balance after successful withdrawal request")
    public void testProcessSuccessfulWithdrawalRequest() {
        WithdrawalPage withdrawalPage = new WithdrawalPage(getDriver());
        withdrawalPage.submitWithdrawalRequest();
        // Add assertions to verify funds are deducted from trading account balance
    }
}
