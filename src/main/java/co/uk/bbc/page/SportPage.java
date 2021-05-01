package co.uk.bbc.page;

import co.uk.bbc.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class SportPage extends Utility {

    private static final Logger log = LogManager.getLogger(SportPage.class.getName());

    @FindBy (linkText = "Sport")
    WebElement _sportHeaderTab;

    @FindBy (linkText = "Football")
    WebElement _footballTab;

    @FindBy (xpath = "//a[contains(text(),'Scores & Fixtures')]")
    WebElement _scoresAndFixtureTab;

    @FindBy (xpath = "//span[contains(text(),'TODAY')]")
    WebElement _clickOnTodayDate;


    // click on sport Header tab
    public void clickOnSportHeaderTab(){
        clickOnElement(_sportHeaderTab);
    }

    // click on Football tab
    public void clickOnFootballTab(){
        clickOnElement(_footballTab);
    }

    // click on Score & Fixture tab
    public void clickOnScoresAndFixture(){
        clickOnElement(_scoresAndFixtureTab);
    }

    // click on Today date and get the team data from it
    public void clickOnTodayDate(){
        clickOnElement(_clickOnTodayDate);

        List<WebElement> elements = driver.findElements(By.xpath("//span[@class='gs-u-display-none gs-u-display-block@m qa-full-team-name sp-c-fixture__team-name-trunc']"));

        for(WebElement element: elements)
        {
            System.out.println(element.getText());
        }
    }
}
