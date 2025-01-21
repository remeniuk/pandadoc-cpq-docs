# How Rules are Connected to the Quote and How to Build a Rule

In this guide, we will explore how rules interact with the Quote structure, and provide instructions on how to start building your rules.
<div 
  style={{
    position: "relative", 
    paddingBottom: "56.25%", 
    height: "0", 
    overflow: "hidden"
  }}
>
  <iframe 
    src="https://www.loom.com/embed/f06a0769d70d44d5a26dce1fd9c868ca?sid=50f2dc84-478b-4e08-92e7-8b6a1ebfe614"
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

## Overview of the Quote

The quote consists of multiple sections that hold various line items, totals, and other data. Here’s an outline of what a quote contains:

- **Sections**: Each section represents a distinct part of the quote, such as products, add-ons, and fees.
    ![sections_in_quote.png](..%2F..%2F..%2Fstatic%2Fimg%2Fquote%2Fsections_in_quote.png)
- **Columns**: Each section contains a set of columns (e.g., price, quantity, discount, etc.) and has its own set of totals.
    ![quote_section_columns.png](..%2F..%2F..%2Fstatic%2Fimg%2Fquote%2Fquote_section_columns.png)
- **Grand Total or Quote total**: This is the total of all sections combined, which may include calculated values such as total price, subtotal, total discounts, etc.
    ![grand_total_or_quote_total.png](..%2F..%2F..%2Fstatic%2Fimg%2Fquote%2Fgrand_total_or_quote_total.png)
- **Data Fields or Quote variables**: These are fields that allow you to pass data between steps in a workflow or temporarily store values for calculations.
    ![quote_data_fields.png](..%2F..%2F..%2Fstatic%2Fimg%2Fquote%2Fquote_data_fields.png)

## Sections in the Quote

Each section in the quote has:

- **Name**: Name is a section identifier
- **Columns**: Specific attributes related to the quote item (e.g., price, quantity, etc.).
- **Line items** Each section contains a set of products from your catalog or newly created products
- **Footers/Section Totals**: These are totals specific to the section and can either be default or custom.
    ![section_details.png](..%2F..%2F..%2Fstatic%2Fimg%2Fquote%2Fsection_details.png)


### Example Sections
For example, we may have the following sections:

- **Products Section**: Includes columns like price, quantity, discount, total.
- **Add-ons Section**: Contains columns like price, quantity, and custom columns.
- **Fee Section**: Contains specific fees, taxes, or additional charges.

You can also create custom fields to add to these sections.

## Rules Structure

### WHEN Clause

In the **WHEN** part of the rule, we filter data based on certain conditions. You can filter by:

- Sections (e.g., filtering sections like "products").
- Line items within a section (e.g., filtering based on quantity, price, etc.).
- Data fields (e.g., filtering based on custom fields you defined).
    ![WHEN_clause_filter_by.png](..%2F..%2F..%2Fstatic%2Fimg%2Frules%2FWHEN_clause_filter_by.png)

### THEN Clause

In the **THEN** part of the rule, actions are performed on the filtered data. For example:

- You can update the section totals or line items that meet the filtering criteria.
- You can modify values, such as setting the price to 100 or updating the quantity for certain line items.
    ![THEN_clause_actions.png](..%2F..%2F..%2Fstatic%2Fimg%2Frules%2FTHEN_clause_actions.png)

**Please remember that you can perform actions on the items that meet the filters specified 
in the WHEN clause—in other words, on the aliases created in the WHEN clause.** 
    ![aliases_in_rules.png](..%2F..%2F..%2Fstatic%2Fimg%2Frules%2Faliases_in_rules.png)

However, you can also perform actions on objects that do not require a filter.
    ![aliases_not_needed.png](..%2F..%2F..%2Fstatic%2Fimg%2Frules%2Faliases_not_needed.png)

## How to Start Building a Rule

### Step 1: Define the WHEN Condition

Start by defining your **WHEN** condition. For instance, if you want to filter sections that contain the name "Products," you would set up the filter to match sections with this name.

You can also filter line items within the "Products" section based on conditions such as quantity greater than 1.
    ![update_line_items_whre_qty_gt_zero.png](..%2F..%2F..%2Fstatic%2Fimg%2Frules%2Fupdate_line_items_whre_qty_gt_zero.png)

### Step 2: Define the THEN Action

Once you have filtered the appropriate data, define the actions in the **THEN** part of the rule. For example:

- If a line item’s quantity is greater than 1, update the price to 100.
- If a section has a custom total, set it accordingly.

### Example Rule:
In this example, a rule could be set up to:
- Filter the "Products" section.
- Filter line items where the quantity is greater than 1.
- Update the price to 100 for those line items.

## Example Walkthrough

Here’s how you might build a rule step-by-step:

1. **Filter Section**: Select the "Products" section.
2. **Filter Line Items**: Choose to filter line items where the quantity is greater than 1.
3. **Define Action**: Set the price to 100 for the filtered line items.

### Testing the Rule

Let’s say you add products with varying quantities:

- Product 1: Quantity 1 (unchanged).
- Product 2: Quantity 2 (updated to price 100).
- Product 3: Quantity 2 (updated to price 100).

In this case, only Product 2 and Product 3 will have their price updated, since their quantity is greater than 1.


## Conclusion

This document provides a high-level overview of how to use rules within the quote structure. By filtering and performing actions on sections, line items, and data fields, you can automate and customize your quotes as needed.
