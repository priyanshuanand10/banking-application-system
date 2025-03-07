package com.banking;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class LoginStepClass {

	WebDriver driver = null;
	WebDriverWait wait = null;
	Actions action=null;
	@SuppressWarnings("deprecation")
	@Given("Open chrome browser")
	public void open_chrome_browser() {
		System.setProperty("webdriver.chrome.driver", "./Driver/chromedriver.exe");
		driver = new ChromeDriver();
		wait = new WebDriverWait(driver, Duration.ofSeconds(10));
		 action  = new Actions(driver);
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50,TimeUnit.SECONDS);
	
	}

	@Given("open banking app")
	public void open_banking_app() {
		driver.get("http://localhost:3000/");
	}

	@Given("give admin credentials")
	public void give_admin_credentials() {
	driver.findElement(By.id("uname")).sendKeys("admin1");
	driver.findElement(By.id("pass")).sendKeys("admin1");
	driver.findElement(By.xpath("//button[contains(text(),'Sign In')]")).click();
	}

	@Given("Click on Add User")
	public void click_on_add_user() {
		driver.findElement(By.xpath("//button[contains(text(),'Click Here To Get Started')]")).click();
		 driver.findElement(By.xpath("//ul//a[contains(text(),'Add User')]")).click();	 
	}

	@Given("Fill the Form and press send")
	public void fill_the_form_and_press_send() {
		driver.findElement(By.xpath("//input[@id='accnumber']")).sendKeys("147258369147");
		driver.findElement(By.xpath("//input[@id='fullnname']")).sendKeys("Ram Kumar");
		driver.findElement(By.xpath("//input[@id='age']")).sendKeys("19");
		driver.findElement(By.xpath("//input[@id='dob']")).sendKeys("14/03/2000");
		driver.findElement(By.xpath("//input[@id='balance']")).sendKeys("50000");
		driver.findElement(By.xpath("//input[@id='email']")).sendKeys("ram@gmail.com");
		driver.findElement(By.xpath("//input[@id='location']")).sendKeys("singh niwas");
		driver.findElement(By.xpath("//input[@id='city']")).sendKeys("bidar");
		driver.findElement(By.xpath("//input[@id='state']")).sendKeys("karnataka");
		driver.findElement(By.xpath("//input[@id='pin']")).sendKeys("585401");
		driver.findElement(By.xpath("//button[contains(text(),'Send')]")).click();
		
	}

	@Given("Admin should land on create password page")
	public void admin_should_land_on_create_password_page() {
	
	}

	@Given("Admin Creats the password for the user")
	public void admin_creats_the_password_for_the_user() {
		  driver.findElement(By.xpath("//input[@id='accoutnnumber']")).sendKeys("147258369147");
		  driver.findElement(By.xpath("//input[@id='pass1']")).sendKeys("test1");
		 
	}

	@Given("Click on create")
	public void click_on_create() {
		 driver.findElement(By.xpath("//button[contains(text(),'Send')]")).click();
	}

	@Then("User Should See the new user on Show Details of All User page")
	public void user_should_see_the_new_user_on_show_details_of_all_user_page() {
	
	}

}
