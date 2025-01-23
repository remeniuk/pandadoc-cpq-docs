# References to Sections and Line items. Specific reference: [Current item]

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
    src="https://www.loom.com/embed/1fda4fd5f15448ce893a7929b638975e?sid=d810019f-d447-46a8-9249-08cc98d91470"
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

## 1. Using Aliases for Sections and Line Items

### Example: Setting the First Section Total in the Grand Total

You can refer to specific sections in your quote using aliases. For example, to set the first section total in the grand total:

1. **Create an Alias for a Section in WHEN clause:**
   Build a condition to find a section by name, such as `products`. Assign the result to an alias:
   If multiple sections share the same name, the alias will include all matching sections.

2. **Refer to a Specific Section in THEN clause:**
   Use indexing to select the first section from the alias and reference its total:
    ![referencing_alias_section_1.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Frules%2Freferencing_alias_section_1.png)

3. **Save and Run the Rule:**
   Verify that the grand total’s first section total reflects the value from the selected section.
   ![referencing_alias_section_1_result.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Frules%2Freferencing_alias_section_1_result.png)

### Note:
- Aliases simplify working with grouped data like sections or line items.
- Indexing lets you pick specific elements when aliases contain multiple items.

---

## 2. Referencing Each Line Item with [Current Item] During Iteration

### Example: Custom Calculation for Line Items
1. **Filter Line Items in WHEN clause:**
   Use conditions to filter line items, such as selecting only items with a price greater than zero:

2. **Apply Custom Calculations in THEN clause:**
   Sum the prices of the line item and quantity using [Current Item] reference to update each line item individually during iteration
    ```
    Custom total = [Current item.Price] * [Current item.Quantity]
    ```
   ![referencing_current_item.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Frules%2Freferencing_current_item.png)

### Example Scenario:
- Line items with prices `$10` and `$234`.
- Quantities `1` and `2`.
- The custom total for each line item is calculated, summed, and stored in the Custom total field.
![referencing_current_item_result.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Frules%2Freferencing_current_item_result.png)

---
## 3. Referencing to all elements from the filtered section

### Example: You need to calculate custom section total for the specific section
1. **Create a custom field in the section footer**
    ```
    First section total
    ```
2. **Create rule where filter specific sections line items in the THEN clause**
    Use conditions to filter specific section line items, such as selecting section by its name and only items from that section with a price greater than zero:
3. **Apply Custom Calculations in THEN clause:**
    ```
    First section total = SUM([Alias.Line items 1.All element.Custom total(line item)])
    ```
   ![references_to_all_the_line_items.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Frules%2Freferences_to_all_the_line_items.png)
   
### Example Scenario:
- Line items with Custom total `$100` and `$2340`.
- The First section total is calculated, summed as `$100 + $2340`
    ![first_section_tota_calculation_result.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Frules%2Ffirst_section_tota_calculation_result.png)

:::tip
- **References:**
  - Use aliases for sections or line items to organize data.
  - Apply indexing to target specific elements within aliases.
- **Filtering:**
  - Apply conditions to narrow down the data (e.g., `Price > 0`).
- **Calculations:**
  - Use arithmetic operations (`+`, `*`, etc.) and aggregation functions (`SUM`, `AVG`, etc.).
- **Iteration:**
  - Leverage `[Current item]` reference to update elements one at a time during iteration.
:::

This structured approach enables you to create advanced custom calculations and dynamically update values in your quotes, improving flexibility and efficiency.
