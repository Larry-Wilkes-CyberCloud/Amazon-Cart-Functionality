Amazon Cart Functionality Tests
Overview
This repository contains a series of automated test scripts developed using Playwright to validate the functionality of the shopping cart on Amazon's website. These tests ensure that the cart handles product additions, deletions, and updates accurately, providing a reliable shopping experience for users.

Test Cases
Test Case 1: Verify Cart is Empty
This test verifies that after adding an item to the cart and then removing it, the cart should be empty, confirming both the addition and deletion processes work as expected. The total price is checked to ensure it reflects the absence of items.
![alt text](<TestCase 1.jpg>)

Test Case 2: Add Product to Cart, Change Quantity, and Verify Total Price Updates
This test adds a product to the cart, changes the quantity of the product, and checks if the total price updates accordingly. It ensures that the cart correctly updates both the display and total calculation when the quantity of an item is changed.
![alt text](<TestCase 2.jpg>)

Test Case 3: Verify Cart Retention
This test checks the persistence of the cart's state upon page reload. By adding a product to the cart, navigating away, and then returning, it verifies that the cart retains the product and its price, simulating a user's return to the cart after a session interruption.
![alt text](<TestCase 3.jpg>)

Conclusion
These tests collectively ensure the robustness of Amazon's cart functionality, covering fundamental aspects of an e-commerce cart such as adding, removing, updating item quantities, and retaining the cart state across sessions. By automating these tests, we aim to detect and prevent issues that could impact user experience on Amazon's platform.
