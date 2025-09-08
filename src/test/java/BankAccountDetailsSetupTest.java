package com.tradingwebsite.tests;

import com.tradingwebsite.pages.BankAccountSetupPage;
import org.testng.annotations.Test;
import io.qameta.allure.Description;
import io.qameta.allure.Feature;
import io.qameta.allure.Story;

public class BankAccountDetailsSetupTest extends BaseTest {

    @Test
    @Feature("Bank Account Setup")
    @Story("Enter bank account details")
    @Description("Test Description: Verify that user can enter bank account details")
    public void testEnterBankAccountDetails() {
        BankAccountSetupPage bankAccountSetupPage = new BankAccountSetupPage(getDriver());
        bankAccountSetupPage.navigateToBankAccountSetupSection();
        // Add assertions to verify user can enter bank account details
    }

    @Test
    @Feature("Bank Account Setup")
    @Story("Submit valid bank account details")
    @Description("Test Description: Verify that valid bank account details are validated and saved")
    public void testSubmitValidBankAccountDetails() {
        BankAccountSetupPage bankAccountSetupPage = new BankAccountSetupPage(getDriver());
        bankAccountSetupPage.enterBankAccountDetails("validAccountDetails");
        bankAccountSetupPage.submitBankAccountDetails();
        // Add assertions to verify details are validated and saved
    }

    @Test
    @Feature("Bank Account Setup")
    @Story("Submit invalid bank account details")
    @Description("Test Description: Verify that error message is displayed for invalid bank account details")
    public void testSubmitInvalidBankAccountDetails() {
        BankAccountSetupPage bankAccountSetupPage = new BankAccountSetupPage(getDriver());
        bankAccountSetupPage.enterBankAccountDetails("invalidAccountDetails");
        bankAccountSetupPage.submitBankAccountDetails();
        // Add assertions to verify error message is displayed
    }

    @Test
    @Feature("Bank Account Setup")
    @Story("Use saved bank account details for withdrawal")
    @Description("Test Description: Verify that saved bank account details are used for withdrawal")
    public void testUseSavedBankAccountDetailsForWithdrawal() {
        BankAccountSetupPage bankAccountSetupPage = new BankAccountSetupPage(getDriver());
        bankAccountSetupPage.enterBankAccountDetails("validAccountDetails");
        bankAccountSetupPage.submitBankAccountDetails();
        bankAccountSetupPage.initiateWithdrawalRequest();
        // Add assertions to verify saved bank account details are used for withdrawal
    }
}
