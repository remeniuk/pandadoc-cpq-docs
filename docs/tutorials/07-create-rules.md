---
title: Setting Up Rules
---

# Setting Up Rules in the Quote

In this step, we will configure discount rules in the **Quote** based on the data collected in the form. The salesperson selects the discount type, and this information is passed to the Quote, ensuring the correct discount is applied automatically.

## Step 1: Adding the Discount Column to the Quote
To display discounts in the Quote, we need to add a **Discount** column.

1. Open the Quote editor.
2. Click on **+ Add Column**.
3. Select **Discount** from the available options.

![Add Discount Column](/img/rules/add_disocunt_column.png)

## Step 2: Creating a Quote Data Field
Next, we need to store the discount type selected in the form.

1. Open the **Quote Data Fields** section.
2. Click **+ Add Field**.
3. Name the field **Discount Type**.
4. Set the type to **Short Text**.
5. Save the field.

![Add Data Field for Discount Type](/img/rules/add_data_field_for_the_discount_type.png)

## Step 3: Creating a Rule
Now, let's create the first discount rule.

1. Navigate to the **Rules** section of the Quote.
2. Click **+ Create Rule**.
3. Rename the rule to **Military and First Responder Discount**.

![Go to Rules and Create a New Rule](/img/rules/go_to_rules_and_create_a_new_rule.png)

### Define the Conditions
1. Select **Line Items** where **Quantity > 0**.
![Check Line Items Quantity Greater Zero](/img/rules/check_line_items_quantity_greater_zero.png)

2. Check if the **Discount Type** equals **Military and First Responder Discount**.

![Check Quote Variable Equals Military Discount](/img/rules/check_the_quote_variable_equals_military_disocunt.png)

### Define the Action
1. Set a **10% discount** on all qualifying line items.
![Set the Military Discount 10%](/img/rules/set_the_military_discount_10.png)
2. Save the rule.

## Step 4: Testing the Discount Rule
To test the rule:
1. Add a product to the Quote.
![Add Product to Quote to Start Testing](/img/rules/add_product_to_quote_to_start_testing.png)
2. Enter **Military and First Responder Discount** in the Quote Data field.
![Specify Discount Type to Test the Rule](/img/rules/specify_discount_type_to_test_the_rule.png)
3. Verify that the discount is applied correctly.


## Step 5: Adding Remaining Discounts
Now, duplicate the rule and modify it for other discounts:

- **Senior Citizen Discount** → 15%
- **Student Discount** → 5%

![Save All Rules](/img/rules/save_all_rules.png)

## Step 6: Passing Discount Data from the Form to the Quote
Finally, we will pass the discount selection from the form into the Quote.

1. Open the **Data** tab of the Quote step.
2. Find the **Discount Type** field.
3. Map it to the output of the form step.
4. Save the Quote.

![Pass the Data from Form to Initialize Discount](/img/rules/pass_the_data_from_form_to_initialize_discount.png)

## Conclusion
With these discount rules in place, the system will automatically apply the correct discount based on the salesperson's selection. The next step in our guide is **passing the Quote to the document**.
