---
title: "How to Set Up Custom Opportunity Product Field Sync in Salesforce"
description: "Step-by-step guide to configuring and syncing a custom opportunity product field in Salesforce with PandaDoc."
---

# How to Set Up Custom Opportunity Product Field Sync in Salesforce

## Overview
This guide walks you through the process of configuring a **custom opportunity product field** in **Salesforce** and ensuring it syncs correctly with **PandaDoc**.

<div 
  style={{
    position: "relative", 
    paddingBottom: "56.25%", 
    height: "0", 
    overflow: "hidden"
  }}
>
  <iframe 
    src="https://www.loom.com/embed/31c3d09991024e98a6d41a070984c178?sid=3f34e199-dd8d-491f-914e-7ab00d6f9321"
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

## Prerequisites
- You must have **admin permissions** in Salesforce.
- Ensure you have **PandaDoc integration** enabled in Salesforce.

## Step 1: Create a Custom Field in Salesforce
1. Navigate to your **Salesforce Opportunity**.
2. Create a **Custom Field** with the same **Label** and **API Name** as your existing fields.
3. Populate the values (e.g., `1, 2, 3`).

## Step 2: Configure Field Sync in Salesforce
1. Go to **Salesforce Setup**.
2. Add the newly created custom field to **Configure Tokens**.
   - You can do this via the **PandaDoc Documents Widget** or the **PandaDoc Setup Page**.
3. Click on **Configure Tokens**.
4. Select **Opportunity Product**.
   - If it is not available, add it manually.
5. Choose **Duration (Non-Recurring)**.
6. Click **Save**.

## Step 3: Configure Workflow in PandaDoc
1. Open **Workflows** in **PandaDoc**.
2. Unpublish the workflow to make changes.
3. Locate the **Pull Data from Integration** step:
   - Go to the **Data** tab.
   - Click **Refresh** to ensure all fields are updated.

## Step 4: Configure Quote Fields
1. Navigate to the **Create Quote** step.
2. Add a **Custom Column**:
   - Select **New Column**.
   - Choose **Text** as the field type.
   - Name it **Duration**.
   - Click **Save**.
3. Move to the **Data** tab in the **Create Quote** step.
4. Click on **Setup**.
5. Map the **Quote Column (Duration)** to **Duration (Non-Recurring)** in **Salesforce**.
6. Click **Save**.

## Step 5: Publish and Test
1. **Publish the Workflow**.
2. **Start a New Workflow**.
3. Verify that the **opportunity product field values** appear correctly (e.g., `1, 2, 3`).
4. Modify the values (e.g., change to `5, 5, 5`).
5. Click **Next**.
6. **Create a Document** (this triggers the sync process).
7. Return to the **Opportunity** in **Salesforce** and check if the **Duration** field is updated.

## Notes
- The field sync occurs **after document creation**, not during quote creation.
- The document does not need to be sent for the sync to complete.
