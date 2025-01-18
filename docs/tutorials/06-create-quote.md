---
title: Configuring the Quote Step
---

# Configuring the Quote Step in Guided Selling

In this tutorial, we will configure the **Quote Step** within the guided selling workflow. This step will take the product selections from the **Sales Quote Form** and generate a quote automatically.

## Step 1: Creating a Quote Step
1. Navigate to your **workflow editor**.
2. Click on **Create New Quote**.
3. A new quote step will be added to the workflow.

![Create a Quote Step](/img/quote/create_a_quote_step.png)

By default, the quote will be empty. We will now pass the product selections from the form into this quote.

## Step 2: Saving the Draft Quote
Before proceeding with data mapping, save the draft version of the quote to ensure it is properly initialized.

![Review Empty Created Quote and Save](/img/quote/review_empty_crated_quote_and_save.png)

## Step 3: Passing Data from the Form to the Quote
To ensure the quote reflects the product selections from the guided selling form, follow these steps:

1. Click on the **Quote Step** to open its configuration panel.
2. Navigate to the **Data** tab.
3. Under **Workflow Data**, locate the **Product Lines** field.
4. Click on the text field next to **Product Lines**.
5. Select the output of the **Selected Package** from the **Sales Quote Form**.

![Pass the Data from the Form to the Quote](/img/quote/pass_the_data_from_the_form_to_the_quote.png)

Once completed, the products selected in the guided selling form will be dynamically added to the quote.

## Next Steps
Now that we have configured the **Quote Step**, the next tutorial will cover **setting up discount rules** to automatically apply eligible discounts based on the selections made in the form.