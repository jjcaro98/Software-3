Feature: Registrar una deuda
    yo como usuario quiero registrar una deuda para enumerar cada detalle de 
    cada una de ellas y llevar su control adecuado

    Scenario: El usuario registra los datos necesarios en el formulario
    Given a que me encuetro en el formulario cuyo dominio es "http://localhost:3000/registrarDeuda"
    And ingreso el nombre de la entidad a la cual se le debe "CorAutos"
    When selecciono como tipo de deuda, deuda con monto definido
    Then se habilita la entrada de ingresar monto total
    And ingreso el monto total "50000000"
    And ingreso el valor de las cuotas "250000"
    And ingreso el dia de cada mes a pagar "03"

    When envio el formulario
    Then se se visualiza la deuda en la apgina principal