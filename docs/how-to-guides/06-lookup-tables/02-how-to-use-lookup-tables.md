---
title: "Using Lookup Tables for Configuring Price Variations"
---

# Using Lookup Tables for Configuring Price Variations for Your Products

This guide explains how to use **Lookup Tables** in PandaDoc CPQ to dynamically configure product prices based on various factors such as **region and sales quarter**. Using Lookup Tables allows you to store complex pricing models and automatically apply the correct pricing to quotes.

<div style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}>
  <iframe
    src="https://www.youtube.com/embed/bK9b5rvMKRE?si=Pqa6KhE8WOrdBuGe"
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

## Introduction

If your business sells products across different regions and quarters, you may need to apply **variable pricing** based on these factors. Instead of manually managing multiple pricing rules, Lookup Tables allow you to **store and retrieve the correct price dynamically**.

For example, assume you are selling **three products (LG, Samsung, Mitsubishi)** across **three regions** and **four quarters**. This results in **36 different price variations**. Lookup Tables enable you to **manage these variations efficiently**.

## Product Pricing Setup

To configure product pricing using Lookup Tables:

1. Open the **Catalog** and ensure the products are created.
2. Define product SKUs, but leave pricing out of the catalog.
3. Instead of setting fixed prices, use Lookup Tables to fetch the price dynamically based on:
   - **Quarter** (Q1, Q2, Q3, Q4)
   - **Region** (e.g., Americas, EMEA, APAC)

## Product Configuration in Workflow

1. Navigate to **Workflows** and create a new workflow.
2. Add a **Form Step** to capture:
   - Product selection
   - Quarter
   - Region
3. Ensure the product selection field uses **SKU-based mapping** for consistency with Lookup Tables.

## Mapping Lookup Tables to Workflow

The workflow dynamically assigns the correct price by:

1. Retrieving the SKU from the **selected product**.
2. Matching the SKU with the **Lookup Table**.
3. Filtering by the **quarter** and **region** values provided in the form.
4. Fetching the **correct price** and updating the quote accordingly.

## Using Data Fields for Lookup Table Integration

To integrate Lookup Tables into your workflow:

1. **Create a Quote Data Field** to store selected values.
2. Use a **Rule** that:
   - Filters Lookup Table records by **product SKU**.
   - Matches the **quarter** and **region** values.
   - Retrieves and applies the **correct price** to the quote.

### Example:
- If **LG is sold in Q4 in the Americas**, the price should be **$2,100**.
- If **LG is sold in Q1 in the Americas**, the price should be **$1,800**.

## Creating Lookup Tables

To create a Lookup Table:

1. Prepare a **CSV file** with the following columns:
   - SKU
   - Quarter
   - Region
   - Price
   - Currency
2. Go to **Lookup Tables** in PandaDoc.
3. Click **+ New** and upload the CSV file.
4. Assign a meaningful name and description.
5. Save the Lookup Table.

## Applying Lookup Tables in Rules

1. Navigate to the **Rules Engine**.
2. Click **+ New Rule** and select **Lookup Table Condition**.
3. Configure the rule to:
   - **Match SKU** from the form to the Lookup Table.
   - **Match Quarter and Region** to filter the correct pricing row.
4. Set the rule to **update the price field** in the quote.

### Example Rule:
- **IF** SKU = Lookup Table SKU **AND**
- **Quarter = Lookup Table Quarter** **AND**
- **Region = Lookup Table Region**  
- **THEN** apply corresponding price and currency.

## Conclusion

Lookup Tables significantly **simplify pricing management** by centralizing product price variations. Instead of hardcoding multiple pricing rules, you can dynamically fetch prices based on predefined conditions. By integrating Lookup Tables with **Forms, Quotes, and Rules**, you can ensure accurate pricing across different sales scenarios.

Now, try setting up a Lookup Table for your products and **enhance your pricing automation in PandaDoc CPQ**!
