---
title: "Using Rules and Formulas in Quotes"
---

# Using Rules and Formulas in Quotes

PandaDoc CPQ allows you to **automate pricing, discounting, and product selection** in quotes using **rules and formulas**. This guide covers:
- How to **add products dynamically** based on SKUs
- How to **set contract terms automatically**
- How to **apply discounts using formulas**
- How to **update custom fields in quotes**
- How to **extract data fields for workflow automation**

## Watch the Video Tutorial

<div style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}>
  <iframe
    src="https://www.youtube.com/embed/mw1Vp2Yymsc?si=jMWQ6_-RLepv4vJA"
    title="YouTube video player"
    frameborder="0"
    allowfullscreen
    style={{
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
    }}
  ></iframe>
</div>

## Understanding Quote Data Fields

Quote **data fields** allow you to store values for **product selection, contract terms, discounts, and more**. These fields are used in rules to dynamically adjust quotes.

**Example Data Fields:**
- **Product SKU**: Stores the product identifier
- **Contract Duration**: Defines the length of the contract in months/years
- **Discount**: Stores the applicable discount percentage

## Step 1: Adding a Product by SKU

To **dynamically add a product** to the quote:
1. Navigate to **Rules** and click **+ Add Rule**.
2. Select **"Add to Section" → "Existing Product by SKU"**.
3. Use a **data field reference**:  
   - `[Product]` (where **Product** contains the SKU).
4. **Ensure duplicates are not created** unless necessary.
5. Save and test the rule.

This rule ensures that the selected product **automatically appears** in the quote based on the SKU.

## Step 2: Setting Contract Term from a Data Field

To **automate contract duration**:
1. Create a **data field** called `Contract Duration`.
2. Write a rule:
   - Select **"Update Line Items"**.
   - Apply to **all line items** (`Line Items contain elements with Name is not empty`).
   - Set `Contract Term` to `[Contract Duration]`.

Now, whenever a **contract duration** is set in a form or integration, it automatically updates the quote.

## Step 3: Applying Discounts Based on Contract Term

To apply a **discount using formulas**:
1. Create a **discount data field** (`Discount`).
2. Write a rule using an **IF formula**:
   ```
   IF(CurrentItem.ContractTerm >= 3, [Discount], 0)
   ```
3. Save and activate the rule.

This ensures **longer contracts receive discounts** while shorter ones do not.

## Step 4: Updating Custom Fields in the Quote Total Section

To **display custom totals**, create a custom field:
1. Go to **Grand Total** and add a new field (`Product Price Before Discount`).
2. Write a **SUM formula**:
   ```
   SUM(LineItems.AllElements.Price)
   ```
3. Apply **text formatting**:
   ```
   TEXT(SUM(LineItems.AllElements.Price), "$#,##0.00")
   ```
4. Save and test.

This rule **calculates the total price before discounts** and formats it correctly.

## Step 5: Extracting Data for Workflow Automation

To **send selected product names into workflows**:
1. Create a **data field** (`Selected Products`).
2. Write a rule using **TEXTJOIN**:
   ```
   TEXTJOIN(", ", TRUE, LineItems.AllElements.Name)
   ```
3. Save and test.

This ensures selected product names **flow into subsequent workflow steps**, such as **document generation and approvals**.

## Key Takeaways

- **Rules automate product selection, pricing, and discounts.**
- **Formulas enable dynamic calculations using IF, SUM, and TEXT functions.**
- **Custom fields allow additional calculations in quotes.**
- **Extracting data fields enables seamless workflow automation.**

By using **rules and formulas**, you can streamline quoting and ensure **accurate, automated pricing** in PandaDoc CPQ.
