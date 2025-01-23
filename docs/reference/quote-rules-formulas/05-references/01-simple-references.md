# Referencing Quote totals and Data fields (Quote variables)

## Introduction

Almost every time, you may encounter a situation where you need to introduce custom calculations in your quote. This requires referencing various values within the quote, such as:

- Section values
- Line item values
- Grand total
- Data fields
- Quote variables

This document explains how to reference these values and perform custom calculations step-by-step.

---

## How to Use References in the Rule Builder

When you want to perform a custom calculation, assign data, or apply mathematical operations to data in a quote, you will need to use references. Simply open a text box and type the `=` sign. Our UI will then display all possible references and formulas that you can use. This feature ensures that you can easily find and use the correct fields or calculations for your requirements.

<div 
  style={{
    position: "relative", 
    paddingBottom: "56.25%", 
    height: "0", 
    overflow: "hidden"
  }}
>
  <iframe 
    src="https://www.loom.com/embed/c5e34b0bab634c7c8949d5390ad3d379?sid=65348aa2-db2e-4b63-a370-6f17ff339284"
    frameBorder="0"
    allowFullScreen
    style={{
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%"
    }}
  ></iframe>
</div>
---

## 1. Referencing Quote Variables

### Example: Updating a Quote Variable with Grand Total

Let's say you want to update a quote variable named `product` with the value of the grand total.

1. Identify the field to reference within the grand total.
   
   Example:
   ```
   Grand total -> Total
   ```

2. Assign the value of the grand total to the `product` variable.
   ```
   product = Grand total.Total
   ```
   ![refer_to_grand_total.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Frules%2Frefer_to_grand_total.png)

3. Save the changes and verify the result.

**Use Case:**
- You may need to pass the `product` variable to your document and use it as a dynamic variable within the document.

### Verifying Example
- **Initial Total:** `$200`
- **Updated Total:** `$2,440`

You can apply calculations to this value. For instance, multiply the total by the total quantity:
```
product = [Grand total.Total] * [Grand total.Quantity]
```
![refer_to_grand_total_mul_by_quoantity.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Frules%2Frefer_to_grand_total_mul_by_quoantity.png)

#### Result:
- **Total Quantity:** `20`
- **Total:** `$2,440`
- **Calculation result** `48800`
    ![refer_to_grand_total_mul_by_quoantity_result.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Frules%2Frefer_to_grand_total_mul_by_quoantity_result.png)
---

## 2. Using Data Fields and Variables

### Example: Creating and Formatting a New Data Field

1. **Create a New Data Field:**
   ```
   formatted
   ```

2. **Update the `formatted` Field:**
   Use a text function to apply formatting to a referenced data field.

   Example:
   ```
   formatted = TEXT([Data field.product], "$#,##0.00")
   ```

   - **First Argument:** Reference to the `product` field.
   - **Second Argument:** Desired format (e.g., dollar format).
   ![formula_and_data_field.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Frules%2Fformula_and_data_field.png)

### Result
The `product` field value is formatted as a dollar value, making it easier to present in documents.
    ![formula_and_data_field_result.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Frules%2Fformula_and_data_field_result.png)

---

## 3. Summary of Operations

- **References:**
  - Use references like `[Grand total.Total]` or `[Data field.{data field name}]` to fetch values.
- **Calculations:**
  - Apply mathematical operations (e.g., multiplication, addition) directly.
- **Formatting:**
  - Use functions like `TEXT` to apply formatting to numeric values.

This approach allows you to customize your quotes and dynamically update values, enhancing usability and efficiency.
