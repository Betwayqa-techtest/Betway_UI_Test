package co.uk.bbc.stepdefs;

import co.uk.bbc.page.HomePage;
import co.uk.bbc.page.SportPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TeamsRecordList {

    HomePage homePage = new HomePage();
    SportPage sportPage = new SportPage();

    @Given("^I am on www\\.bbc\\.co\\.uk hopepage$")
    public void iAmOnWwwBbcCoUkHopepage() {
    }

    @And("^I click on sport tab header$")
    public void iClickOnSportTabHeader() {
        sportPage.clickOnSportHeaderTab();
    }

    @And("^I am on now sport webpage$")
    public void iAmOnNowSportWebpage() {
    }

    @When("^I click on Football tab$")
    public void iClickOnFootballTab() {
        sportPage.clickOnFootballTab();
    }

    @And("^I click on Score & Fixtures$")
    public void iClickOnScoreFixtures() {
        sportPage.clickOnScoresAndFixture();
    }

    @And("^I click on Today$")
    public void iClickOnToday() {
        sportPage.clickOnTodayDate();
    }

    @Then("^I should be able to see all team names with a match today$")
    public void iShouldBeAbleToSeeAllTeamNamesWithAMatchToday() {
    }

}
