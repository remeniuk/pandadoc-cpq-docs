---
title: "How to Manage Workflow Permissions in PandaDoc"
---

# How to Manage Workflow Permissions in PandaDoc

Managing workflow permissions ensures that the right users have the necessary access to **view, run, and edit workflows** in PandaDoc CPQ. This guide explains the different permission levels available and how to configure them to fit your organization’s needs.

## Prerequisites
- Available on **Enterprise Plans** with the **PandaDoc CPQ add-on**.
- Ensure users have the correct **license type** to access workflow features.

## Understanding Workflow Roles and Permissions

### Members
Members are **end-users** such as sales representatives or customer success managers.

#### Permissions:
- **View Templates**: Can access workflow templates assigned to them.
- **Run Workflows**: Can start workflows from **published workflow templates**.
- **View & Edit Own Workflow Runs**: Can edit their own workflow steps but **cannot access** workflows initiated by others.

### Managers
Managers have **broader access** and are typically **team leads or supervisors**.

#### Permissions:
- **View & Manage Templates**: Can **view, edit, and delete** workflow templates.
- **View All Workflow Runs**: Can monitor workflow progress across the team.
- **Edit Own Workflow Runs**: Can edit their own workflow runs but **not those started by others**.
- **View Workflow Progress**: Can see which step any workflow is in but **cannot override other users’ steps**.

### Admins
Admins have **full control** over workflows.

#### Permissions:
- **Full Template Control**: Can create, edit, delete, and remove any workflow template.
- **Run Workflows**: Can start workflows from any published template.
- **Edit All Workflow Runs**: Can edit **any user's** workflow runs.

### Custom Roles
For organizations needing **more control**, **custom roles** allow for tailored permissions.

#### How to Configure a Custom Role:
1. Start with a **predefined role** (Member, Manager, or Admin).
2. **Modify permissions** based on business needs:
   - **Document Creation**: Allow users to create documents from workflow templates.
   - **Form Editing**: Grant access to create and edit forms within workflows.
   - **Integration Access**: Required for users working with **HubSpot or Salesforce integrations**.
   - **Quote Management**: Enables users to modify **quotes inside workflows**.

## Managing Permissions for Key Workflow Features

### Forms
Users must have **form permissions** to **create and edit workflow forms**.

![Forms](https://pandadoc-dd769ec6c844.intercom-attachments-7.com/i/o/xhbviy7k/1216615780/132919d7a36a040094683c849792/26754306932887?expires=1737279000&signature=01b88534dc8d959de7bd915cfd7ed241afb92587aeaf1eaba14a136df13038be&req=dSImEM9%2FmIZXWfMW1HO4zRYyY1scekJwoCG5Uj0HLr42XVoEoP%2BNp%2BZQ2GXc%0Avfb3%0A)

### Documents
Workflow participants need **document creation permissions** to generate documents.

![Documents](https://pandadoc-dd769ec6c844.intercom-attachments-7.com/i/o/xhbviy7k/1216615780/132919d7a36a040094683c849792/26754306932887?expires=1737279000&signature=01b88534dc8d959de7bd915cfd7ed241afb92587aeaf1eaba14a136df13038be&req=dSImEM9%2FmIZXWfMW1HO4zRYyY1scekJwoCG5Uj0HLr42XVoEoP%2BNp%2BZQ2GXc%0Avfb3%0A)

### Integrations
Users working with **CRM integrations** need **integration access**.

![Integrations](https://pandadoc-dd769ec6c844.intercom-attachments-7.com/i/o/xhbviy7k/1216615776/4f7c1ec06e2d2d73d864d68967a7/26754247892887?expires=1737279000&signature=bc892115ff71c17dac09a0df7dfa6324d64c9c89fb0cc60a8640b13e33661fed&req=dSImEM9%2FmIZYX%2FMW1HO4zeIWR7HzKCT9vG4YxdN0CAwuMOsX0SEb9mrfYT82%0A6yYw%0A)

### Quotes
Users must have **quote management permissions** to configure or edit quotes.

![Quotes](https://pandadoc-dd769ec6c844.intercom-attachments-7.com/i/o/xhbviy7k/1216615773/4bffc61c328f075b45127952a63f/26754247895191?expires=1737279000&signature=b3a6cdeec1ea34e594a5b30490ac29f78d2550abb16a95737dfdb6b3d13d6065&req=dSImEM9%2FmIZYWvMW1HO4zfFlWrQn%2B1XUJ%2BE2vwNpPRso78Z5h11mBCx%2BQN8V%0AJ6PG%0A)

## Best Practices for Workflow Permissions
- Assign **Members** to end-users who **only need to run workflows**.
- Use **Managers** for team leads who **need visibility into all workflows**.
- Assign **Admins** only to those **responsible for workflow setup and maintenance**.
- **Leverage custom roles** to fine-tune access for unique business needs.

By correctly managing workflow permissions, you ensure that **only the right users** can view, edit, and execute workflows, **keeping your CPQ process secure and efficient**.
