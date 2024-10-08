# One Identity Manager Web portal

This is the main application of the product. It contains features for managers, auditors, normal users and so on. It can be categorized into the following parts. 

For a more detailed description, please read the Web Portal Documentation.

## 1. IT-Shop
The IT-Shop allows the user to request products. This requests will be decided through configurable workflows, that can be combinations of automated processes and user approvals.

## 2. Data Management
The main part of data management is handled through the _Data Explorer_ and the _My Responsibilities_ view, which look quite similar. The _Data Explorer_ is used by administrators or auditors, the _My Responsibilities_ by managers. The objects that can be handled are determined by the dynamic One Identity Manager modules the company has installed. 
Under the menu item _Statistics_ managers and administrators can look into the statistics. 

## 3. Attestation
This concerns everything attestation related. Users can manage attestation policies, handle attestation runs and decide the attestation of objects. Attestation is a dynamic library, which needs the corresponding One Identity Manager module to be installed.

## 4. Setup
Under the menu item _Setup_ users can manage shops, service items, service categories or reports.

The following libraries are available. Which libraries will be used, depends on the configuration of the installation.

|Library name | Description|
|---|---|
| qbm | This is the base library. It contains all the base components, like the data table and the column dependent references. |
| qer | This is the Identity Management base library. It contains the basic components for identity management, like the Data Explorer.|
| aob | This is the applications library. It contains the components, that are needed to assign entitlements to application bundles. |
| apc | This is a library, that is linked into the Data Explorer. It is used to manage software, that is assigned to users.|
| att | This is the attestation library. It contains everything, that is attestation related, like attesting objects, manage attestation runs, etc.|
| cpl | This is the compliance library. It is used to handle compliance violations and manage compliance rules. |
| hds | This is the help desk library. It contains components to resolve help desk tickets or create new ones.|
| olg | This is the One Login library. It handles the one login multi factor authentication process.|
| pol | This is the policy library. It is used to handle policy violations and manage company policies.|
| rmb | This is the business role library. It is linked into the Data Explorer and is used to manage business roles. |
| rms | This is the system role library. It is linked into the Data Explorer and is used to manage system roles.|
| rps | This is the report library. It contains components to manage reports and assign them to other users. It handles report subscriptions as well.|
| sac | This is the SAP R/3 Compliance Add-on Module. It adds some SAP features to the request process. |
| tsb | This is the target system library. It is linked into the Data Explorer and is used to manage system entitlements and user accounts from different target systems. |
