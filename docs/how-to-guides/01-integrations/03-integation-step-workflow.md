---
title: "How to Pull Data from CRM and Use It in a Workflow"
---

# How to Pull Data from CRM and Use It in a Workflow

This guide focuses on **importing data from your CRM** (such as **HubSpot** or **Salesforce**) into a PandaDoc workflow. By pulling data from your CRM, you can ensure that **quotes, documents, and approvals** are automatically populated with accurate customer details.

A separate guide will cover how to **push data back into your CRM** after a workflow is completed.

## Prerequisites

Before pulling CRM data into your workflow, ensure that:

- Your **CRM is connected** in **PandaDoc Settings > Integrations**.
- You have **admin permissions** to configure workflows.

## Adding an Integration Step to Pull Data

To integrate your CRM and pull data into your workflow, follow these steps:

### Step 1: Open the Workflow Builder

1. Navigate to **Workflows** in the left sidebar.
2. Click **+ Workflow** to create a new workflow or edit an existing one.

### Step 2: Add the Integration Step

1. Click **+ Add Step**.
2. Select **Pull Data from Integration**.

![Start setup of integration step](https://downloads.intercomcdn.com/i/o/xhbviy7k/1224402988/dab6fa91a6c1f4ffca1a3d1de889/26325117402647?expires=1737279000&signature=965207ff097bfaf2d830130973694b6b8de329dc2b47e5e62de11b30ea72383b&req=dSIlEs1%2Bn4hXUfMW1HO4zQo51d1ISwP5dqtCzUpzovC8mAy%2BB%2BLyZkIx2ceQ%0AkgqK%0A)

## Connecting Your CRM

1. Click **Select Integration**.

   ![Select CRM](https://downloads.intercomcdn.com/i/o/xhbviy7k/1224403089/510886fa106fe147873f6b9ad373/26325109033495?expires=1737279000&signature=8b42120aefb9c5d897eabbb471b226596a7c8f348901c9283955afb515f29e00&req=dSIlEs1%2BnoFXUPMW1HO4zerzI705xC3WoG%2BhSDco0VSdL%2BZTF%2FCyLmahj%2BH7%0AT9T%2B%0A)

2. Choose your CRM (e.g., **HubSpot** or **Salesforce**).
3. Click **Connect** and authorize PandaDoc.

## Selecting the Data to Import

1. Choose the **entity type** to pull data from (e.g., **HubSpot Deal** or **Salesforce Opportunity**).

   ![Select object pulled from CRM](https://downloads.intercomcdn.com/i/o/xhbviy7k/1224403168/e1a8733e3b354b9c1ae8f56be750/26325117413143?expires=1737279000&signature=453e4b726e5ff9688bf7f0e7c7b3ed292a509a92a93ccd763d1368f75ca2a1ac&req=dSIlEs1%2BnoBZUfMW1HO4zVZl4%2BoLyeOxgDy2SAp8s6Ui2iXpELyz58eI51sc%0AJlNW%0A)

2. Select the data fields to import:
   - **Contact details** (name, email, company)
   - **Deal or Opportunity details** (amount, stage, close date)
   - **Product line items** (for use in quotes)

## Using Pulled Data in the Workflow

Once CRM data is imported, it can be mapped to different steps in the workflow, such as:

- **Forms**: Prefill fields with customer details.
- **Quotes**: Automatically add products and pricing from CRM.
- **Documents**: Insert CRM variables into contracts and proposals.

### Mapping CRM Data to Workflow Steps

1. Go to the **Data** tab of the step where you want to use the imported CRM data.
2. Select the **workflow data source** from the dropdown.
3. Choose the relevant fields and map them **manually** or use **automatic mapping**.

## Next Steps

With CRM data successfully pulled into your workflow, you can now configure the remaining workflow steps, such as **generating a quote, applying approval rules, and creating a document**.
