---
title: How to Use Lookup Tables
---

# How to Use Lookup Tables

Lookup tables allow you to dynamically retrieve values based on input data, simplifying complex pricing, discounting, and configuration rules.

## Prerequisites
- A configured **PandaDoc CPQ** workspace
- Access to **Rules Engine** (if applicable)
- Admin or Editor permissions to manage lookup tables

## Step 1: Creating a Lookup Table
1. Navigate to **Settings** > **Lookup Tables**.
2. Click **New Lookup Table**.
3. Define the table structure:
   - **Columns** (e.g., Region, Product, Price, Discount)
   - **Key Values** (the inputs used to retrieve values)
4. Upload or manually enter data.
5. Click **Save**.

## Step 2: Using a Lookup Table in a Rule
1. Go to **Rules Engine** > **Create Rule**.
2. Add a condition that references the lookup table.
3. Set up a **WHEN-THEN** logic to retrieve values.
4. Test the rule with sample inputs.

## Step 3: Applying the Lookup Table to a Quote
1. In the **Quote Builder**, select a field where the lookup value should be applied.
2. Link it to the appropriate rule.
3. Ensure the retrieved value is displayed correctly in the quote preview.

## Example Use Cases
- **Region-Based Pricing**: Adjust pricing based on the customer's location.
- **Volume Discounts**: Apply discounts dynamically based on quantity tiers.
- **Product Configuration**: Auto-select compatible add-ons based on the main product.

## Next Steps
- Learn more about [Rules Engine](../rules/using-rules-in-cpq.md).
- Explore how to [Use Formulas in CPQ](../formulas/supported-formulas.md).
