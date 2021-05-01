package co.uk.bbc.page;

import co.uk.bbc.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SearchPage extends Utility {

    private static final Logger log = LogManager.getLogger(SearchPage.class.getName());

    @FindBy (linkText = "Search")
    WebElement _searchBar;

    @FindBy (id = "search-input")
    WebElement _SearchTheBBC;

    @FindBy (xpath = "//body/div[@id='root']/div[1]/main[1]/div[1]/form[1]/div[1]/div[1]/div[1]/button[1]")
    WebElement _submitButton;

    // click on search bar tab
    public void clickOnSearchBar(){
      clickOnElement(_searchBar);
    }

    // fill text in the search bar
    public void enterText(String article){
        sendTextToElement(_SearchTheBBC, article);
    }

    // click on submit button
    public void clickOnSubmitButton(){
        clickOnElement(_submitButton);
    }
}
