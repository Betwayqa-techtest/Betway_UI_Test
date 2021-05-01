package co.uk.bbc.stepdefs;

import co.uk.bbc.page.HomePage;
import co.uk.bbc.page.SearchPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchbarFunction {


    SearchPage searchPage = new SearchPage();

    @And("^I click on Search bar$")
    public void iClickOnSearchBar() {
        searchPage.clickOnSearchBar();
    }


    @And("^I am on search page$")
    public void iAmOnSearchPage() {
    }

    @When("^I enter \"([^\"]*)\" in the search bar$")
    public void iEnterInTheSearchBar(String article) {
        searchPage.enterText(article);
    }

    @And("^I click on the search icon button$")
    public void iClickOnTheSearchIconButton() {
        searchPage.clickOnSubmitButton();
    }

    @Then("^I should able to read all articles related 'sports'$")
    public void iShouldAbleToReadAllArticlesRelatedSports() {
    }
}
