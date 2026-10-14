"use strict";

/**
 * Калькулятор стоимости заказа.
 * Считает произведение цены выбранного товара и введённого количества.
 */

window.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("order-form");
    const productSelect = document.getElementById("product");
    const quantityInput = document.getElementById("quantity");
    const resultBlock = document.getElementById("result");
    const errorBlock = document.getElementById("error");

    /**
     * Обработчик отправки формы.
     * @param {Event} event
     */
    function calculate(event) {
        event.preventDefault();

        // Сброс предыдущих сообщений
        resultBlock.textContent = "";
        errorBlock.textContent = "";

        const rawQuantity = quantityInput.value.trim();

        // Проверка: только целое неотрицательное число
        const regex = /^\d+$/;
        if (!regex.test(rawQuantity)) {
            errorBlock.textContent = "Ошибка: введите целое неотрицательное число.";
            return;
        }

        const quantity = parseInt(rawQuantity, 10);
        const price = parseInt(productSelect.value, 10);

        if (quantity === 0) {
            errorBlock.textContent = "Ошибка: количество должно быть больше нуля.";
            return;
        }

        const total = price * quantity;

        resultBlock.textContent =
            "Стоимость заказа: " + total + " ₽ ("
            + quantity + " × " + price + " ₽)";
    }

    form.addEventListener("submit", calculate);
});