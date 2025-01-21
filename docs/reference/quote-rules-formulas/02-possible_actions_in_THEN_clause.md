# Possible actions in THEN clause

This document serves as a comprehensive guide to understanding how rules interact with your quote and how to effectively use them to perform various actions. For a visual walkthrough, check out video below:

<div 
  style={{
    position: "relative", 
    paddingBottom: "56.25%", 
    height: "0", 
    overflow: "hidden"
  }}
>
  <iframe 
    src="https://www.loom.com/embed/545ceee0917540169a76af645e985f1c?sid=94960c0a-1c87-46db-8aaf-5d88893ca611"
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

## Overview of Rules and Their Actions

Rules in PandaDoc allow you to filter, manipulate, and manage sections, line items, and other components of a quote. Below is a detailed explanation of what you can achieve with rules:

### Filtering

#### Sections
- **Example**: Filter sections by name, such as `Products`.
- **Use Case**: Isolate specific sections for further actions.
  ![referencing_to_section_using_alias.png](..%2F..%2F..%2Fstatic%2Fimg%2Frules%2Freferencing_to_section_using_alias.png)

#### Line Items
- **Example**: Filter line items within a section where the price is greater than 100 or quantity is greater than 2.
- **Use Case**: Target specific items within a section for updates or actions.
  ![referencing_to_section_line_items.png](..%2F..%2F..%2Fstatic%2Fimg%2Frules%2Freferencing_to_section_line_items.png)

#### General Line Items
- **Example**: Select all line items and apply conditions like `price > 10000`.
- **Use Case**: Apply global actions across all line items. 
  ![referencing_to_all_line_items.png](..%2F..%2F..%2Fstatic%2Fimg%2Frules%2Freferencing_to_all_line_items.png)

### Actions

#### Add
- Add items to a specific section or an alias created during filtering.
- **Example**: Add a product by its SKU (e.g., `123`) to a section. **NOTE! product with such SKU should exist in your product catalog**
- **Duplicate Prevention**: Ensures the same product is not added multiple times.
  ![adding_product_by_sku.png](..%2F..%2F..%2Fstatic%2Fimg%2Frules%2Fadding_product_by_sku.png)

#### Update
- Update various components of the quote:
  
  **Sections**:
  - Modify section settings (e.g., recipient options).
  - Update section totals (e.g., adding custom totals).

  **Grand Totals**:
  - Modify grand total fields like discounts and fees.
  - Auto-calculated fields cannot be directly changed.

  **Quote Settings**:
  - Change settings such as currency or recipient options.

  **Quote Variables or Data Fields**:
  - Update pre-existing data fields with new values.

  **Line Items**:
  - Modify attributes like price, quantity, or custom fields for filtered line items.
  
  **Example**: Change the price of line items in a `Products` section to 1000.

#### Delete
- Remove sections or line items based on specific criteria.
  
  **Example**:
  - Delete a section by name or alias.
  - Delete line items where `price > 100`.

### Available Commands

#### Add
- **Target**: Specific section, alias, or all sections.
- **Options**: Add items with attributes like SKU and price.

#### Update
- **Scope**:
  - Section settings, footers, or totals.
  - Grand totals (auto-calculated fields excluded).
  - Quote settings and data fields.
  - Filtered line items.
- **Attributes**:
  - Modify attributes such as recipient options, section totals, and line item details.

#### Delete
- **Scope**:
  - Entire sections by name or alias.
  - Line items filtered by conditions (e.g., `quantity > 2`).

## Practical Example

1. **Filter**:
   - Select a section named `Products`.
   - Filter its line items where `price > 100` and `quantity > 2`.

2. **Add**:
   - Add a new product with SKU `123` to the `Products` section.

3. **Update**:
   - Change the price of filtered line items to 1000.

4. **Delete**:
   - Remove all line items with `price > 100` from a specific section.

## Key Considerations

- Filters must be applied before performing actions.
- Actions are executed only on the filtered elements (aliases) unless specified otherwise.
- Auto-calculated fields (e.g., total taxes) cannot be manually updated.

## Conclusion

By understanding how rules interact with your quote, you can create tailored workflows, streamline processes, and ensure precise modifications. Experiment with the commands to fully leverage the capabilities of PandaDoc rules. For further assistance, revisit the [video guide](https://www.loom.com/share/f06a0769d70d44d5a26dce1fd9c868ca?sid=34d64844-c8a4-4889-b588-0d635ceebc09).
