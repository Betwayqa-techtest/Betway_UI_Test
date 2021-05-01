package co.uk.bbc.basepage;


import co.uk.bbc.propertyreader.PropertyReader;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.PageFactory;

import java.util.concurrent.TimeUnit;

public class BasePage {

    public static WebDriver driver;

    // to open for different Browser ( config file )
    String baseUrl = PropertyReader.getInstance().getProperty("baseUrl");
    String projectPath = System.getProperty("user.dir");

    // set property log4j path
    public BasePage() {
        PageFactory.initElements(driver, this);
        PropertyConfigurator.configure(System.getProperty("user.dir")+"/src/test/java/resources/propertiesfile/log4j.properties");
    }

    // to set the all browsers Property with paths
    public void selectBrowser(String browser) {
        if (browser.equalsIgnoreCase("chrome")) {
            System.setProperty("webdriver.chrome.driver", projectPath+"\\drivers\\chromedriver.exe");
            driver = new ChromeDriver();
        } else if (browser.equalsIgnoreCase("firefox")) {
            System.setProperty("webdriver.gecko.driver", projectPath + "/drivers/geckodriver.exe");
            driver = new FirefoxDriver();
        } else if (browser.equalsIgnoreCase("ie")) {
            System.setProperty("webdriver.ie.driver", projectPath + "/drivers/IEDriverServer.exe");
            driver = new InternetExplorerDriver();
        } else {
            System.out.println("Wrong browser name");
        }

        // This is the window pages setup
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(Integer.parseInt(PropertyReader.getInstance().getProperty("implicitlyWait")), TimeUnit.SECONDS);
        driver.get(baseUrl);
        driver.manage().deleteAllCookies();
    }

     // to close browser after automation done
    public void closeBrowser(){
        if (driver != null){
            driver.quit();
        }
    }
}
