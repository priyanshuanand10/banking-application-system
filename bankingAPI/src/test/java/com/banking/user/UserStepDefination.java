package com.banking.user;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class UserStepDefination {

	WebDriver driver = null;
	WebDriverWait wait = null;
	Actions action = null;

	@SuppressWarnings("deprecation")

	@Given("Chrome browser should open and user navigates to idfc user login page")
	public void chrome_browser_should_open_and_user_navigates_to_idfc_user_login_page() {
		System.setProperty("webdriver.chrome.driver", "./Driver/chromedriver.exe");
		driver = new ChromeDriver();
		wait = new WebDriverWait(driver, Duration.ofSeconds(10));
		action = new Actions(driver);

		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		driver.get("http://localhost:3002/");

	}

	@Given("user gives correct credentials")
	public void user_gives_correct_credentials() {

		driver.findElement(By.id("accountnumber")).sendKeys("147258369147");
		driver.findElement(By.id("password")).sendKeys("test1");
		driver.findElement(By.xpath("//button[contains(text(),'Sign In')]")).click();
	}

	@Given("User Withdraw Some Money")
	public void user_withdraw_some_money() {
		driver.findElement(By.xpath("//a[contains(text(),'Withdraw')]")).click();
		driver.findElement(By.xpath("//input[@id='name']")).sendKeys("2000");
		driver.findElement(By.xpath("//button[contains(text(),'withdraw')]")).click();

	}

	@Given("User Deposites Some money")
	public void user_deposites_some_money() {
		driver.findElement(By.xpath("//div/a[contains(text(),'Deposite')]")).click();
		driver.findElement(By.xpath("//input[@id='name']")).sendKeys("1000");
		driver.findElement(By.xpath("//button[contains(text(),'Deposite')]")).click();
	}

	@Given("User Clicks on Transiction History")
	public void user_clicks_on_transiction_history() {
driver.findElement(By.xpath("//a[contains(text(),'Transiction History')]")).click();
	}

	@Then("User Can See change in the balance")
	public void user_can_see_change_in_the_balance() {

	}

}
