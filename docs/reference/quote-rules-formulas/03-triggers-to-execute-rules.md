# Rule Execution and Triggers Documentation

## Overview
This document provides an overview of when and how rules are executed within the system. It includes details about triggers that automatically execute rules and highlights key functionalities.

---

## Rule Execution Triggers
Rules can be executed automatically through the following triggers:

1. **Updating the Quote**  
   - Edit any value in the quote.
   - While editing or saving the value (e.g., clicking on the space), rules will automatically execute.

2. **Using the "Run Rules" Button**  
   - Each click on the "Run Rules" button triggers the rules again.
   - Example: If two products exist, clicking the button will rerun the rules, potentially updating the product list.

3. **Saving the Quote**  
   - When saving the quote, the rules are triggered automatically.
   - Example: After saving, the document might display updated products based on the rules.

<div 
  style={{
    position: "relative", 
    paddingBottom: "56.25%", 
    height: "0", 
    overflow: "hidden"
  }}
>
  <iframe 
    src="https://www.loom.com/embed/eedba246524b4714bb3725147881e9d2?sid=871abcab-fd47-4733-b98d-260b264d18e3"
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

---

## Key Features
- Rules are executed regardless of where the quote is edited:
  - Grand total
  - Line items
  - Section name or footer
  - Column names
  - Data fields (e.g., changing a data field name triggers rules).

- Rules ensure consistency across all quote components.

---

## Example 
1. Add a product to the quote.
2. Edit or update values in the quote (e.g., line items, section names, etc.).
3. Save the quote:
   - Upon saving, rules execute automatically, updating the document as necessary.
4. Use the "Run Rules" button to manually re-execute the rules.

---

## Conclusion
The system provides multiple triggers for executing rules, ensuring flexibility and accuracy during quote editing and saving processes. Whether you're updating fields, running rules manually, or saving quotes, the rules engine operates seamlessly to maintain data integrity.
