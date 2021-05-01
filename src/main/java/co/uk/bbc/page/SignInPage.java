package co.uk.bbc.page;

import co.uk.bbc.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SignInPage extends Utility {
    private static final Logger log = LogManager.getLogger(SearchPage.class.getName());

    @FindBy (linkText = "Sign in")
    WebElement _signInTab;

    @FindBy (id = "user-identifier-input")
    WebElement _userName;

    @FindBy (id = "password-input")
    WebElement _passwordIn;

    @FindBy (id = "submit-button")
    WebElement _signInButton;

    // click on sign in tab
    public void clickOnSignInTab(){
        clickOnElement(_signInTab);
    }

    // fill the text in username box
    public void enterUserName(String username){
        sendTextToElement(_userName, username);
    }

    // fill the text in password box
    public void enterPassword(String password){
        sendTextToElement(_passwordIn, password);
    }

    //click on th sign in button
    public void clickOnSignInButton(){
        clickOnElement(_signInButton);
    }
}
