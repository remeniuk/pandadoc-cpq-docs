---
title: "Using Conditional Content in Documents Tied to Quotes"
---

# Using Conditional Content in Documents Tied to Quotes

Conditional content in PandaDoc allows you to dynamically adjust sections of a document based on selections made within a quote. This is useful for tailoring terms of service, SLAs, and pricing details based on the products or services selected by the recipient.

## Watch the Video Tutorial

<div style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}>
  <iframe
    src="https://www.youtube.com/embed/Bgc_zhAikTA?si=yhWDfRmqVxL6vWNO"
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

## Overview: Why Use Conditional Content?

- Automatically adjust document content based on selected products.
- Insert different legal terms, pricing tables, or service descriptions dynamically.
- Reduce manual edits and streamline document generation within workflows.

## Step 1: Create a Quote Variable

1. Open the **Quote Block** within your template.
2. Navigate to the **Rules Tab**.
3. Create a **Quote Variable** (e.g., `selected_plan`).
4. Define a rule to set this variable based on selected products:
   - Filter **selected** line items.
   - Assign the **line item name** to the `selected_plan` variable.

## Step 2: Test Quote Variable Updates

- Select different products in the quote to ensure the variable updates dynamically.
- Save and verify that `selected_plan` reflects the correct product.

## Step 3: Use the Quote Variable in the Template

1. Return to the **Template Editor**.
2. Search for available **Quote Variables**.
3. Create a **Smart Content Block** triggered by `selected_plan`.
4. Define conditional content rules:
   - Display specific text or sections based on the selected plan.

## Step 4: Implement in a Workflow

If using a **workflow**, you need to:
- Recreate the **quote logic** in the **Quote Step**.
- Define the same **Quote Variable (`selected_plan`)**.
- Replicate the **rules** within the workflow's **Quote Tab**.

## Step 5: Map Data to the Document

- Open the **Documents Tab** in the workflow.
- Refresh the **Data Tab** to sync the latest quote variables.
- Ensure the **selected_plan** variable is correctly mapped.

## Step 6: Test the Workflow

- Run the workflow and select different plans.
- Confirm that the correct content is displayed in the generated document.
- Ensure dynamic updates work based on changes in the quote.

## Key Takeaways

- Conditional content allows for **dynamic document customization**.
- Quote variables ensure **seamless data mapping** from quotes to templates.
- Workflows require **recreating quote logic** separately from standalone templates.

With this setup, PandaDoc CPQ can generate **highly personalized proposals** that adapt in real time to your customers' selections.
