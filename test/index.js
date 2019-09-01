const {Builder, By, Key, until} = require("selenium-webdriver")


async function test(){
    let driver = await new Builder().forBrowser("firefox").build()
    //const actions = driver.actions()
    await driver.get("http://localhost:3000/registrarDeuda")
    await driver.findElement(By.id("input-entidad")).sendKeys("HomeCenter")

    await driver.findElement(By.id("input-tipoDeuda")).click()
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[2]/div/select/option[2]")).click()
    
    await driver.findElement(By.id("input-monto")).sendKeys("3000000")
    await driver.findElement(By.id("input-cuota")).sendKeys("100000")
    await driver.findElement(By.id("input-fechaPago")).sendKeys("03")

    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/button")).click()

    await driver.get("http://localhost:3000/")
}

test()