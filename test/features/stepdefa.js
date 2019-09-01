const { Given, And, When, Then } = require("cucumber")
const { Builder, By, Key, until } = require("selenium-webdriver")
let driver = new Builder().forBrowser("firefox").build()

Given('a que me encuetro en el formulario cuyo dominio es {string}', function (string) {
    driver.get(`${string}`)
});

Given('ingreso el nombre de la entidad a la cual se le debe {string}', function (string) {
    driver.findElement(By.id("input-entidad")).sendKeys(`${string}`);
});

When('selecciono como tipo de deuda, deuda con monto definido', function () {
    driver.findElement(By.id("input-tipoDeuda")).click()
    driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[2]/div/select/option[2]")).click()
});

Then('se habilita la entrada de ingresar monto total', function () {
    console.log('nice');
});

Then('ingreso el monto total {string}', function (string) {
    // driver.findElement(By.id("input-monto")).sendKeys(`${string}`)
    driver.wait(until.elementLocated(By.id("input-monto")), 10000).sendKeys(`${string}`)
});

Then('ingreso el valor de las cuotas {string}', function (string) {
    driver.findElement(By.id("input-cuota")).sendKeys(`${string}`)
});

Then('ingreso el dia de cada mes a pagar {string}', function (string) {
    driver.findElement(By.id("input-fechaPago")).sendKeys(`${string}`)
});

When('envio el formulario', function () {
    //driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/button")).click()
    driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div/div[2]/div/form/button")), 10000).click()
});

Then('se se visualiza la deuda en la apgina principal', function() {
    // driver.get(`${string}`)
    console.log("chupelo");
    
});