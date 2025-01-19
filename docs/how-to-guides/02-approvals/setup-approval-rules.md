---
title: "Using Conditional Approvals"
---

# Using Conditional Approvals

Conditional approvals in PandaDoc CPQ allow you to define **dynamic approval workflows** based on various conditions such as **quote attributes, CRM fields, and form inputs**. This ensures that documents requiring special authorization automatically trigger an approval process.

This guide covers:
- Setting up **approval conditions** at the **template** and **workflow** level.
- Mapping **quote and CRM data** for dynamic approvals.
- Creating **custom rules** to automate approval triggers.

## Watch the Video Tutorial

<div style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}>
  <iframe
    src="https://www.youtube.com/embed/mvaV1i8Uz90?si=ZGhXn8NtfM0KEykf"
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

## Understanding Conditional Approvals

PandaDoc Advanced Approvals work at **two levels**:
1. **Template-Level Approvals** – Apply approval conditions directly within a document template.
2. **Workflow-Level Approvals** – Use a **workflow** to automate approvals based on CRM data, quotes, or form inputs.

## Step 1: Setting Up Conditional Approvals in a Template

1. **Navigate to a Template** and open the **Approval Flow**.
2. **Add an Approval Block** – Each block represents an approval condition.
3. **Define Approval Conditions** – You can check:
   - Specific **Quote Data Fields**.
   - CRM attributes such as **Deal Owner**.
   - Line items or **product selection**.

### Example: Approval Based on Product Selection
- Create a **Quote Data Field** called `Selected Products`.
- Define a rule: _If "Selected Products" contains "Pro Plan Subscription", trigger approval._

## Step 2: Configuring Quote Data Fields

1. **Open the Quote Editor** and add a new **Quote Data Field**.
2. **Create Dynamic Quote Data Extraction Rules**:
   - Extract selected **line items**.
   - Capture **profit margin, section names, or pricing details**.

### Example: Auto-Populate Selected Products
- Set a rule: _If a line item is selected, store its name in "Selected Products"._

This ensures that the **approval condition updates in real time** as selections change.

## Step 3: Automating Approvals in a Workflow

1. **Go to Workflows** and create a new approval workflow.
2. **Connect to CRM** – Ensure that deal and product data are pulled from **HubSpot** or **Salesforce**.
3. **Recreate Quote Data Fields in Workflow**:
   - Match data fields from the **template** with those in the **quote step**.

### Example: Approval Based on Deal Owner
- Create a **Deal Owner** data field.
- Map it to a **CRM field**.
- Set a rule: _If Deal Owner is "John Doe", trigger approval._

## Step 4: Testing the Approval Flow

1. **Create a document using the workflow.**
2. **Check if conditions trigger approvals:**
   - Select **a Pro Plan** → Approval is triggered.
   - Change to **a Business Plan** → Auto-approved.
   - Assign **different Deal Owner** → Approval status updates dynamically.

3. **Verify CRM-Driven Approvals**:
   - Ensure that **CRM fields** like `Deal Owner` are correctly mapped.
   - If conditions match, the document enters **approval mode**.
   - If no conditions are met, the document is automatically sent.

## Key Takeaways

- **Conditional Approvals** enable automatic approval workflows for **complex sales processes**.
- **Quote and CRM Data Fields** help dynamically adjust approvals based on real-time selections.
- **Approval triggers** can be based on **product selection, pricing, CRM attributes, or form responses**.
- **Workflow-Level Approvals** allow seamless integration with **HubSpot, Salesforce, and internal approvals**.

By leveraging **Advanced Approvals**, you can streamline **contract approvals, sales workflows, and deal reviews**, ensuring compliance while maintaining efficiency.
