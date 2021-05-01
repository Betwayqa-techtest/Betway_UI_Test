package co.uk.bbc.stepdefs;

import co.uk.bbc.page.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignInFuctions {

    SignInPage signInPage = new SignInPage();

    @Given("^User am on www\\.bbc\\.co\\.uk hopepage$")
    public void userAmOnWwwBbcCoUkHopepage() {
    }

    @And("^User click on Sign in tab$")
    public void userClickOnSignInTab() {
        signInPage.clickOnSignInTab();
    }

    @And("^User am on Sign in page$")
    public void userAmOnSignInPage() {
    }

    @When("^User enter username as \"([^\"]*)\"$")
    public void userEnterUsernameAs(String username){
        signInPage.enterUserName(username);
    }

    @And("^User enter password as \"([^\"]*)\"$")
    public void userEnterPasswordAs(String password) {
       signInPage.enterPassword(password);
    }

    @And("^User click on Sign in button$")
    public void userClickOnSignInButton() {
        signInPage.clickOnSignInButton();
    }

    @Then("^Sign in should be unsuccessful$")
    public void signInShouldBeUnsuccessful() {
    }

}
