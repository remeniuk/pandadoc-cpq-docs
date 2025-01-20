---
title: Create and Send the Document
sidebar_position: 7
description: Create and Send the Document - Step 7 of the workflow setup process
---

# Generating the Document with the Quote

In this final step of the workflow, we will define the step for generating the document with the quote. This document will be based on the template we created earlier and will include the quote generated in the previous step.

## Step 1: Selecting the Template

To begin, we need to select the appropriate document template that will be used for the generated document.

![Selecting the Template](/img/doc_step/start_selection_of_template.png)

1. Click on the **Select Template** button.
2. From the list of available templates, select the **Technical Proposal Template** that we created earlier.

![Select the Template](/img/doc_step/select_template.png)

## Step 2: Passing the Quote to the Document

Now, we need to ensure that the quote generated in the previous step is included in the document.

1. Identify the field in the document template where the quote should be inserted. In our case, it is labeled **quote1**.
2. Click on the field and map it to the output from the previous step.
3. Select **Create a Quote** from the workflow steps and link it to the quote field.

![Passing the Quote to the Document](/img/doc_step/pass_quote_to_the_doc.png)

## Step 3: Confirming the Setup

Now, when the workflow runs, the quote generated in the second step will be passed into the template, and the final generated document will include the quote dynamically.

At this stage, the workflow is almost complete. The final step in the next tutorial will be **testing the workflow** to ensure that all components function correctly before it goes live.
