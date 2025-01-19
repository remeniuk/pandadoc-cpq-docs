---
title: "How to Set Up Salesforce Integration with PandaDoc CPQ"
---

# How to Set Up Salesforce Integration with PandaDoc CPQ

## Overview

Integrating **PandaDoc CPQ** with **Salesforce** allows you to create workflows, sync line items, automate approvals, and generate documents directly from your **Salesforce Opportunities**. This guide provides step-by-step instructions on **installing, configuring, and using the integration**.

## Watch the Video Tutorial

<div 
  style={{
    position: "relative", 
    paddingBottom: "56.25%", 
    height: "0", 
    overflow: "hidden"
  }}
>
  <iframe 
    src="https://www.loom.com/embed/a5b9ff16cc6941e0b61ddc3efec2bd0a?sid=6ca15214-3164-4d8b-a729-18aeff23fa44"
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

Before setting up the integration, ensure that:
- You are a **PandaDoc Workspace Admin**.
- You have access to **Salesforce** with appropriate permissions.
- The **PandaDoc CPQ add-on** is enabled.

## Step 1: Connecting PandaDoc to Salesforce

1. **Go to PandaDoc Settings**.
2. Click **Integrations** and open **Salesforce**.
3. Ensure that **Salesforce is connected**.
   - If it's already connected, no additional setup is required.
   - If not, click **Connect** and follow the authorization steps.
4. Select **Production** or **Sandbox**.
   - Workato only supports **one active connection at a time**.
   - Choose **Sandbox** for testing or **Production** for live data.

## Step 2: Enabling the "PandaDoc Workflows" Component in Salesforce

To make the **PandaDoc Workflows** component visible on the **Opportunity page**, follow these steps:

1. **Go to Salesforce Setup**.
2. Navigate to **Custom Settings > PandaDoc Settings**.
3. Click **Manage > New**.
4. Enter the following values:
   - **Name**: `PANDADOC_CPQ_FEATURE_ENABLE`
   - **Value**: `true`
5. Click **Save**.

Now, the **PandaDoc Workflows** card will be available on the **Opportunity page layout**.

## Step 3: Setting Up the Integration in a Workflow

1. Open your **PandaDoc Workflow Builder**.
2. Locate the **Pull Data from Integration** step.
3. If the **Salesforce integration** is not authorized, click **Change**.
4. Select **Salesforce** as the integration.
5. Click **Connect** and authorize the connection in **Workato**.
6. Select **Production** or **Sandbox** based on your environment.
7. Once connected, the workflow will be able to pull data from Salesforce.

## Step 4: Mapping Data from Salesforce

1. In the workflow, navigate to the **Quote** step.
2. Ensure that line items are **pulled from Salesforce**.
3. Use the **refresh option** to fetch the latest data.
4. Optionally, configure a **form** to allow user input before generating a document.
5. Ensure that all necessary fields are **synced back to Salesforce**.

## Step 5: Publishing and Using the Workflow in Salesforce

1. **Publish the workflow** to make it available in Salesforce.
2. Open **Salesforce Opportunities**.
3. Locate the **PandaDoc Workflows** component.
   - If not visible, follow **Step 2** to enable it.
4. You will see:
   - Existing workflows that can be resumed.
   - The option to **create a new workflow**.

### Creating a New Workflow from Salesforce

1. Click **Create a New Workflow**.
2. Select one of the **published workflows**.
3. Click **Next** to start the workflow.
4. The workflow will pull data from the **same opportunity** where it was started.
5. On the **Quote Creation step**, verify that:
   - The correct **price** and **quote line items** are displayed.
   - Changes are saved and synced back to Salesforce.

## Step 6: Generating and Sending a Document

1. Proceed to the **document creation step**.
2. Assign **roles** for the sender and the recipient.
3. Review the generated document.
4. Click **Send** to finalize the document.

## Step 7: Syncing Data Back to Salesforce

1. Once the document is sent, **opportunity stage updates** automatically.
2. Salesforce will:
   - Sync the **sent document** to the Opportunity record.
   - Update the **stage** (e.g., changing to "Proposal Sent").
   - Attach the **finalized document** to the record.

## Key Benefits of the Integration

- **Automated Quote Syncing**: Pull and push quote line items dynamically.
- **Seamless Document Generation**: Generate and send contracts from within Salesforce.
- **Stage Automation**: Automatically update opportunity status based on workflow actions.
- **Real-Time Data Sync**: Ensure all pricing, approvals, and terms are up to date.

Now your **PandaDoc CPQ for Salesforce** integration is fully set up, allowing you to manage quotes and documents effortlessly!
