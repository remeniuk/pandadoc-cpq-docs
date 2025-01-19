---
title: "Using Conditional Logic in Forms"
---

# Using Conditional Logic in Forms

Conditional logic in PandaDoc CPQ forms allows you to dynamically show, hide, and adjust form fields based on user inputs. This improves the **guided selling process**, ensures only **relevant questions** appear, and streamlines data collection.

This guide covers:
- **How to create conditional rules for form fields**
- **How to hide/show questions based on input values**
- **How to prefill answers dynamically**

## Watch the Video Tutorial

<div style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}>
  <iframe
    src="https://www.youtube.com/embed/kkmgdOsv3VU?si=WOthGgB5dL-LoiB0"
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

## Understanding Conditional Forms

Conditional forms **dynamically adjust** based on user selections. This is useful for:
- **Product selection** (e.g., showing additional options based on category).
- **Approval processes** (e.g., revealing approval-related questions for high-value deals).
- **Customized pricing configurations** (e.g., hiding irrelevant questions based on prior inputs).

## Step 1: Adding Conditional Rules

1. **Go to Forms** inside your workflow.
2. Click on the **Rules icon** on the form or a specific question.
3. Add a **new rule** and configure:
   - **Conditions** (e.g., "If height is empty, hide the door type selection").
   - **Actions** (e.g., "If height and width are provided, show door type selection").

### Example: Displaying a Question Based on Input
- If **height of the door** is **greater than 4**, show the **"Do you need a custom project?"** question.

## Step 2: Using Operators for Flexible Rules

When creating rules, use:
- **"Equal" / "Not Equal"** to compare selections.
- **"Greater Than" / "Less Than"** for numerical values.
- **"Contains" / "Does Not Contain"** for text-based checks.

For example:
- **If width > 2**, hide the **"Single Door"** option.
- **If "Single Door" is selected and height > 4**, display the **custom project question**.

## Step 3: Optimizing Rule Execution Order

- Rules **execute from top to bottom**.
- Organize them logically to avoid conflicts.
- Combine rules when possible to **reduce redundancy**.

For example:
- Instead of writing separate rules for **showing and hiding a question**, use a **single rule with an ELSE condition**.

## Step 4: Pre-Filling Default Values

- Conditional logic can **pre-select** answers.
- Example: If the **door height is more than 4**, prefill **"Do you need a custom project?"** with **"Yes"**.

## Step 5: Testing the Form

1. **Run the form in a workflow**.
2. **Test multiple conditions** (e.g., changing height values).
3. Verify that:
   - The correct **questions appear/disappear**.
   - Selections are **cleared if hidden dynamically**.
   - Default values **autofill as expected**.

## Key Takeaways

- **Conditional logic simplifies forms** by only displaying relevant questions.
- **Rules can show/hide fields, modify options, and prefill values**.
- **Efficient rule structuring** avoids redundancy and improves performance.
- **Testing ensures all conditions work properly before publishing**.

By leveraging conditional logic, you can create **dynamic, intuitive forms** that adapt to user inputs and streamline data entry in your PandaDoc CPQ workflows.
