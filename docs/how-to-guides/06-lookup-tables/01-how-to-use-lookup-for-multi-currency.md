---
title: "How to Support Multi-Currency Using Lookup Tables"
---

# How to Support Multi-Currency Using Lookup Tables

Managing multi-currency pricing in PandaDoc CPQ is made simple with lookup tables. Instead of manually adjusting prices for different currencies, you can store exchange rates and localized product prices in a lookup table and use rules to apply the correct values dynamically.

This guide will walk you through:
- Setting up a lookup table for multi-currency pricing.
- Mapping product data and currency selections.
- Configuring rules to pull the correct price and currency based on user selection.

## Watch the Video Tutorial

<div style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}>
  <iframe
    src="https://www.youtube.com/embed/U0nfjF86iI4?si=LopCM0y2NYmYDuWc"
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

## Overview: Why Use Lookup Tables for Multi-Currency?

If your business operates in multiple regions or serves customers in different currencies, lookup tables allow you to:
- Automatically adjust pricing based on selected currency.
- Localize product descriptions if needed.
- Maintain a single catalog while dynamically applying price changes.

## Step 1: Creating the Workflow Steps

1. **Add a Form Step**
   - Create a form with two selection fields:
     - Product Selection (with SKUs mapped to catalog items).
     - Currency Selection (e.g., USD, EUR).
   - Ensure that the product SKU and currency code are passed to the quote.

2. **Map Data Fields to Quote**
   - Create a Quote Data Field for:
     - Product SKU (to reference the selected product).
     - Currency (to set the appropriate currency in the quote).

## Step 2: Creating and Importing the Lookup Table

### Prepare Your Multi-Currency Price List
- Export your product catalog from PandaDoc.
- Modify it in Google Sheets or Excel:
  - Keep SKU, Price, Currency, and Description as main columns.
  - Duplicate product rows for each supported currency.
  - Adjust prices and descriptions accordingly.

### Upload the Lookup Table
- Go to **PandaDoc > Workflows > Lookup Tables**.
- Click **+ New Lookup Table** and upload your CSV file.
- Assign a name and description to the table.
- Save the table for use in rules.

## Step 3: Configuring Rules to Apply Multi-Currency Pricing

1. **Update the Quote Currency**
   - Set a rule: _"If currency field is not empty, set quote currency to match the selection."_
   - This ensures the quote automatically switches to the correct currency.

2. **Apply Pricing from Lookup Table**
   - Create a rule to find the correct price based on:
     - Product SKU
     - Selected Currency
   - Fetch the price and override the default catalog price.

3. **Update the Product Description**
   - If localized descriptions are stored in the lookup table, map them to the quote.
   - Ensure that product details change dynamically based on the selected region.

## Step 4: Testing the Workflow

- Run the workflow and select an iPhone with different currencies.
- Verify that:
  - The price updates correctly based on currency.
  - The description changes (if localized text is used).
  - The quote and final document display the expected values.

## Key Takeaways

- Lookup tables simplify multi-currency pricing without the need for manual adjustments.
- You can dynamically update product details like price, currency, and descriptions.
- This method is scalable—ideal for businesses handling international sales.

Now you're ready to implement multi-currency support in your PandaDoc CPQ workflows!
