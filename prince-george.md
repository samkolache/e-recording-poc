# Simplifile Onboarding Requirements: Prince George's County, MD

Contents

Simplifile Onboarding Requirements: Prince George's County, MD	1

	Revision History	2

Recording Location: Prince George's County, MD	3

	Recording Location	3

	Recording Location Instructions	3

	Package Information	4

	Account/Organization	4

	Document Types and Doc Type Mapping	5

	Indexing Requirements (Screen/UI)	6

	Instrument Name = Deed of Trust	6

	Instrument Name = Deed of Trust/Mortgage – Refinance	10

	Instrument Name = Quit Claim Deed	15

	Instrument Name = Deed of Trust/Mortgage Modification Agreement	20

	Instrument Name = Mortgage	25

	Instrument Name = Power of Attorney	29

	Instrument Name = Assignment of Deed of Trust	32

	Instrument Name = Agreement	36

	Instrument Name = Terminations (no Termination of Lease)	39

	Instrument Requirements (Get Instrument Requirements)	44

	RecipientID = MDC7EX; Instrument Name = Deed of Trust	44

	RecipientID = MDC7EX; Instrument Name = Deed of Trust/Mortgage - Refinance	62

	RecipientID = MDC7EX; Instrument Name = Quit Claim Deed	81

	RecipientID = MDC7EX; Instrument Name = Deed of Trust/Mortgage Modification Agreement	100

	RecipientID = MDC7EX; Instrument Name = Mortgage	119

	RecipientID = MDC7EX; Instrument Name = Power of Attorney	137

	RecipientID = MDC7EX; Instrument Name = Assignment of Deed of Trust	153

	RecipientID = MDC7EX; Instrument Name = Agreement	165

	RecipientID = MDC7EX; Instrument Name = Terminations (no Termination of Lease)	178

	Recipient Requirements (Get Recipient Requirements)	196

	RecipientID = MDC7EX (Prince George's County, MD)	196

## Revision History

| **ID** | **Date** | **By** | **Description** |  |
| --- | --- | --- | --- | --- |
|  | 04/14/2026 | D. Stauffer | Document Created |  |
|  |  |  |  |  |

# Recording Location: Prince George's County, MD

## Recording Location

| **Typical Fields**** (Used for All Recording Locations)** |
| --- |
| **ID** | **Field Name** | **Mapping** | **Comments** |
|  | Name | Prince George's County, MD |  |
|  | ID | MDC7EX |  |

### Recording Location Instructions

| **ID** | **Instruction** | **Rule Needed** | **Comments** |
| --- | --- | --- | --- |
|  | State of Maryland Instrument Intake Sheet is required for this document type and must be the last page of the document. |  |  |
|  | Prince George's County Finance Affidavit is required for this document type if you are claiming exemptions and must be place BEFORE the Intake Sheet. |  |  |
|  | E-recording requirements |  |  |
|  | Please use the updated 2018 WH-AR Withholding Form. |  |  |
|  | Grantor & Grantee Indexing guidelines |  |  |
|  | Please note that if the document is a Termination of Lease, it cannot be e-Recorded at this time. Other types of Terminations are allowed. |  |  |
|  | Documents can be fully exempt from specific taxes and be e-recorded. However documents with a partial exemption from a tax section cannot be e-recorded and must be paper filed. No partial tax exemptions allowed. |  |  |
|  | Effective immediately, Prince George's County will not accept tax sale property tax payments on Simplifile. Please submit these payments manually or your document will be rejected. |  |  |

## Package Information

| **Typical Fields**** (Used for All Recording Locations)** |
| --- |
| **ID** | **Field Name** | **Mapping** | **Comments** |
|  | Package Name (OTC) | <OrderID> - <LastName> | Must be Unique in Simplifile. |
|  | Package Name (DTC) | <OrderID> - <LastName> | Must be Unique in Simplifile. |

| **Location Specific Fields**** (Used by Specific Recording Location)** |
| --- |
| **ID** | **Field Name** | **Mapping** | **Comments** |
|  | NONE |  |  |

## Account/Organization

| **Organization by Recording Location Availability, ServiceLink Client, LOB, Department** Need Rules: Select Organization (Simplifile) By Recording Location Availability (in Simplifile) By Client (in EXOS) By LOB (First Mortgage, Home Equity, Default) By Department (REO, DIL, LMS, TSG) |
| --- |
| **ID** | **Organization** | **ID** | **First Mortgage** | **Home Equity** | **Default** |
|  | SL-TitleOnly | PATXPD | Yes | Yes | No |
|  | SL-EastEscrow | CATXL6 | Yes | Yes | No |
|  | SL_HomeEquity_TX | PATTGG | N/A | N/A | No |
|  | SL-HomeEquity | PATA3U | Yes | Yes | No |
|  | SL-Texas | TXTP6T | N/A | N/A | No |
|  | SL-Pittsburgh | PAT89T | N/A | N/A | No |
|  | Servicelink Title Agency Inc.- REO | CA9R9H | No | No | By Division (Logic) |
|  | Servicelink Title Agency Inc.- DIL | CA69FD | No | No | By Division (Logic) |
|  | Servicelink Title Agency Inc.- LMS | CAKBPL | No | No | By Division (Logic) |
|  | Servicelink Title Agency Inc.- TSG | CAXLBG | No | No | By Division (Logic) |

## Document Types and Doc Type Mapping

| **Typical Doc Types** |
| --- |
| **ID** | **Doc Type**** ****(EXOS)** | **Instrument Name ****(****Recording Location****)** | **Relative Volume** | **ZERO Indexing** | **All Indexing Available** | **New Extraction Needed** |
|  |  |  | **FM/HE** | **DTC** |  |  |  |
|  |  | Deed of Trust | 1167 | 630 | False | No |  |
|  |  | Deed of Trust/Mortgage Modification Agreement | 12 | 259 | False | No |  |
|  |  | Deed of Trust/Mortgage - Refinance | 156 | 0 | False | No |  |
|  |  | Quit Claim Deed | 15 | 0 | False | No |  |
|  |  | Deed Simple | 0 | 14 | False | No |  |
|  |  | Mortgage | 6 | 5 | False | No |  |
|  |  | Release | 0 | 10 | False | No |  |
|  |  | Power of Attorney | 2 | 3 | False | No |  |
|  |  | Assignment of Deed of Trust | 1 | 4 | False | No |  |
|  |  | Agreement | 1 | 5 | False | No |  |
|  |  | Terminations (no Termination of Lease) | 1 | 1 | False | No |  |
|  |  | Assignment of Mortgage | 0 | 2 | False | No |  |
|  |  | UCC Financing Stmt Amendment | 0 | 1 | False | No |  |
|  |  |  |  |  |  |  |  |

## Indexing Requirements (Screen/UI)

### Instrument Name = Deed of Trust

| **ID** | **Indexing Field/Array** | **Field Type** | **Required** | **Options** | **Mapping** | **Path** |
| --- | --- | --- | --- | --- | --- | --- |
|  | Grantors | Array | ALWAYS | N/A | TBD | grantors[] |
| Type Type: ENUM Options: Organization Individual Required: ALWAYS Path: grantors[].type WHEN: Type = Organization Name Type: STRING Required: ALWAYS Path: grantors[].nameUnparsed Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantors[].capacity WHEN: Type = Individual First Type: STRING Required: ALWAYS Path: grantors[].firstName Middle Type: STRING Required: NOT_REQUIRED Path: grantors[].middleName Last Type: STRING Required: ALWAYS Path: grantors[].lastName Suffix Type: STRING Required: NOT_REQUIRED Path: grantors[].nameSuffix Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantors[].capacity |
|  | Grantees | Array | ALWAYS | N/A | TBD | grantees[] |
| Type Type: ENUM Options: Organization Individual Required: ALWAYS Path: grantees[].type WHEN: Type = Organization Name Type: STRING Required: ALWAYS Path: grantees[].nameUnparsed Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantees[].capacity WHEN: Type = Individual First Type: STRING Required: ALWAYS Path: grantees[].firstName Middle Type: STRING Required: NOT_REQUIRED Path: grantees[].middleName Last Type: STRING Required: ALWAYS Path: grantees[].lastName Suffix Type: STRING Required: NOT_REQUIRED Path: grantees[].nameSuffix Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantees[].capacity |
|  | Consideration | CURRENCY, DECIMAL | ALWAYS | N/A | TBD | consideration |
|  | County Recordation Tax Exempt | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | countyRecordationExem |
|  | County Transfer Tax Exempt | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | countyTransferExempt |
|  | Loan Amount | CURRENCY, DECIMAL | ALWAYS | N/A | TBD | mortgageConsideration |
|  | Document states 'Purchase Money Mortgage' | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | documentStatesPurchaseMoney |
|  | Reference Information | Array | ALWAYS | N/A | TBD | referenceInformation[] |
| Book Type: STRING Reference Book must be a number and five (5) digits or less. ^\\d{1,5}$ Required: ALWAYS Path: referenceInformation[].book Page Type: STRING Reference Page must be a number and four (4) digits or less. ^\\d{1,4}$ Required: ALWAYS Path: referenceInformation[].page |
|  | Legal Description (Property Information in UI) | Array | ALWAYS | N/A | TBD | legalDescriptions[] |
| Prince George's allows up to 5 account numbers per document District Type: INTEGER District must be a 2 digit number. ^\\d{1,2}$ Required: ALWAYS Path: legalDescriptions[].blockNumber Property ID Type: STRING Property ID must be a 7 digit number. ^\\d{7}$ Required: ALWAYS Path: legalDescriptions[].parcelId Premise Address Type: STRING Required: ALWAYS Path: legalDescriptions[].addressStreet City Type: STRING Required: ALWAYS Path: legalDescriptions[].addressCity State Type: ENUM Options: AL,AK,AZ,AR,CA,CO,CT,DE,DC,FL,GU,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,PR,RI,SC,SD,TN,TX,UT,VT,VA,VI,WA,WV,WI,WY,AS,FM,MH,MP,PW,AB,BC,MB,NB,NL,NT,NS,NU,ON,PE,QC,SK,YT,AA,AE,AP Required: ALWAYS Path: legalDescriptions[].addressState ZIp Type: STRING ^\\d{5}$ Required: ALWAYS Path: legalDescriptions[].addressZip |
|  | Principal Residence | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | principalResidence |
|  | Purchase Money Deed of Trust on record over 12 months | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | purchaseMoneyOnDeedOfTrust |
|  | This is a re-recording | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | rerecord |
|  | Comments | STRING | NOT_REQUIRED | N/A | TBD | comments |

#### Supporting Docs

| **ID** | **Doc Name** | **Rules** | **Comments** |
| --- | --- | --- | --- |
|  | Supporting Documents | TBD |  |
| {                 "label": "Supporting Documents",                 "required": "IF_AVAILABLE",                 "type": "HELPER_DOCUMENT"             } |
|  |  |  |  |

### Instrument Name = Deed of Trust/Mortgage – Refinance

| **ID** | **Indexing Field/Array** | **Field Type** | **Required** | **Options** | **Mapping** | **Path** |
| --- | --- | --- | --- | --- | --- | --- |
|  | Grantors | Array | ALWAYS | N/A | TBD | grantors[] |
| Type Type: ENUM Options: Organization Individual Required: ALWAYS Path: grantors[].type WHEN: Type = Organization Name Type: STRING Required: ALWAYS Path: grantors[].nameUnparsed Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantors[].capacity WHEN: Type = Individual First Type: STRING Required: ALWAYS Path: grantors[].firstName Middle Type: STRING Required: NOT_REQUIRED Path: grantors[].middleName Last Type: STRING Required: ALWAYS Path: grantors[].lastName Suffix Type: STRING Required: NOT_REQUIRED Path: grantors[].nameSuffix Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantors[].capacity |
|  | Grantees | Array | ALWAYS | N/A | TBD | grantees[] |
| Type Type: ENUM Options: Organization Individual Required: ALWAYS Path: grantees[].type WHEN: Type = Organization Name Type: STRING Required: ALWAYS Path: grantees[].nameUnparsed Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantees[].capacity WHEN: Type = Individual First Type: STRING Required: ALWAYS Path: grantees[].firstName Middle Type: STRING Required: NOT_REQUIRED Path: grantees[].middleName Last Type: STRING Required: ALWAYS Path: grantees[].lastName Suffix Type: STRING Required: NOT_REQUIRED Path: grantees[].nameSuffix Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantees[].capacity |
|  | County Recordation Tax Exempt | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | countyRecordationExem |
|  | County Transfer Tax Exempt | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | countyTransferExempt |
|  | Loan Amount | CURRENCY, DECIMAL | ALWAYS | N/A | TBD | mortgageConsideration |
|  | Reference Information (Original Mortgage Information in UI) | Array | ALWAYS | N/A | TBD | referenceInformation[] |
| Book Type: STRING Reference Book must be a number and five (5) digits or less. ^\\d{1,5}$ Required: ALWAYS Path: referenceInformation[].book Page Type: STRING Reference Page must be a number and four (4) digits or less. ^\\d{1,4}$ Required: ALWAYS Path: referenceInformation[].page |
|  | Previous Loan | CURRENCY, DECIMAL | ALWAYS | N/A | TBD | previousLoanAmount |
|  | Unpaid Principal Balance | CURRENCY, DECIMAL | ALWAYS | N/A | TBD | unpaidPrincipal |
|  | Taxable Amount | CURRENCY, DECIMAL | ALWAYS | N/A | TBD | taxableAmount |
|  | Legal Description (Property Information in UI) | Array | ALWAYS | N/A | TBD | legalDescriptions[] |
| Prince George's allows up to 5 account numbers per document District Type: INTEGER District must be a 2 digit number. ^\\d{1,2}$ Required: ALWAYS Path: legalDescriptions[].blockNumber Property ID Type: STRING Property ID must be a 7 digit number. ^\\d{7}$ Required: ALWAYS Path: legalDescriptions[].parcelId Premise Address Type: STRING Required: ALWAYS Path: legalDescriptions[].addressStreet City Type: STRING Required: ALWAYS Path: legalDescriptions[].addressCity State Type: ENUM Options: AL,AK,AZ,AR,CA,CO,CT,DE,DC,FL,GU,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,PR,RI,SC,SD,TN,TX,UT,VT,VA,VI,WA,WV,WI,WY,AS,FM,MH,MP,PW,AB,BC,MB,NB,NL,NT,NS,NU,ON,PE,QC,SK,YT,AA,AE,AP Required: ALWAYS Path: legalDescriptions[].addressState ZIp Type: STRING ^\\d{5}$ Required: ALWAYS Path: legalDescriptions[].addressZip |
|  | Principal Residence | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | principalResidence |
|  | Purchase Money Deed of Trust on record over 12 months | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | purchaseMoneyOnDeedOfTrust |
|  | This is a re-recording | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | rerecord |
|  | Comments | STRING | NOT_REQUIRED | N/A | TBD | comments |

#### Supporting Docs

| **ID** | **Doc Name** | **Rules** | **Comments** |
| --- | --- | --- | --- |
|  | Supporting Documents | TBD |  |
| {                 "label": "Supporting Documents",                 "required": "IF_AVAILABLE",                 "type": "HELPER_DOCUMENT"             } |
|  |  |  |  |

### Instrument Name = Quit Claim Deed

| **ID** | **Indexing Field/Array** | **Field Type** | **Required** | **Options** | **Mapping** | **Path** |
| --- | --- | --- | --- | --- | --- | --- |
|  | Please check the box if the Grantor qualifies for a full Maryland Residency Exemption from Withholding Tax, which is required in order to record this document electronically. | BOOL (Checkbox) | ALWAYS |  | TBD | grantorIsMarylandResident |
|  | Grantors | Array | ALWAYS | N/A | TBD | grantors[] |
| Type Type: ENUM Options: Organization Individual Required: ALWAYS Path: grantors[].type WHEN: Type = Organization Name Type: STRING Required: ALWAYS Path: grantors[].nameUnparsed Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantors[].capacity WHEN: Type = Individual First Type: STRING Required: ALWAYS Path: grantors[].firstName Middle Type: STRING Required: NOT_REQUIRED Path: grantors[].middleName Last Type: STRING Required: ALWAYS Path: grantors[].lastName Suffix Type: STRING Required: NOT_REQUIRED Path: grantors[].nameSuffix Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantors[].capacity |
|  | Grantees | Array | ALWAYS | N/A | TBD | grantees[] |
| Type Type: ENUM Options: Organization Individual Required: ALWAYS Path: grantees[].type WHEN: Type = Organization Name Type: STRING Required: ALWAYS Path: grantees[].nameUnparsed Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantees[].capacity WHEN: Type = Individual First Type: STRING Required: ALWAYS Path: grantees[].firstName Middle Type: STRING Required: NOT_REQUIRED Path: grantees[].middleName Last Type: STRING Required: ALWAYS Path: grantees[].lastName Suffix Type: STRING Required: NOT_REQUIRED Path: grantees[].nameSuffix Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantees[].capacity |
|  | Consideration | CURRENCY, DECIMAL | ALWAYS | N/A | TBD | consideration |
|  | Property Tax | CURRENCY, DECIMAL | IF_AVAILABLE | N/A | TBD | propertyTaxAmount |
|  | State Transfer Tax Exempt | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | stateTransferExempt |
|  | County Recordation Tax Exempt | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | countyRecordationExempt |
|  | County Transfer Tax Exempt | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | countyTransferExempt |
|  | Legal Description (Property Information in UI) | Array | ALWAYS | N/A | TBD | legalDescriptions[] |
| Prince George's allows up to 5 account numbers per document District Type: INTEGER District must be a 2 digit number. ^\\d{1,2}$ Required: ALWAYS Path: legalDescriptions[].blockNumber Property ID Type: STRING Property ID must be a 7 digit number. ^\\d{7}$ Required: ALWAYS Path: legalDescriptions[].parcelId Premise Address Type: STRING Required: ALWAYS Path: legalDescriptions[].addressStreet City Type: STRING Required: ALWAYS Path: legalDescriptions[].addressCity State Type: ENUM Options: AL,AK,AZ,AR,CA,CO,CT,DE,DC,FL,GU,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,PR,RI,SC,SD,TN,TX,UT,VT,VA,VI,WA,WV,WI,WY,AS,FM,MH,MP,PW,AB,BC,MB,NB,NL,NT,NS,NU,ON,PE,QC,SK,YT,AA,AE,AP Required: ALWAYS Path: legalDescriptions[].addressState ZIp Type: STRING ^\\d{5}$ Required: ALWAYS Path: legalDescriptions[].addressZip |
|  | Principal Residence | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | principalResidence |
|  | First Time Home Buyer | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | firstTimeHomeBuyer |
|  | Owner Occupied | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | ownerOccupied |
|  | Completed Certificate of Preparation Included | BOOL (Checkbox) | ALWAYS | N/A | TBD | certificateOfPreparationCompleted |
|  | This is a re-recording | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | rerecord |
|  | Comments | STRING | NOT_REQUIRED | N/A | TBD | comments |

#### Supporting Docs

| **ID** | **Doc Name** | **Rules** | **Comments** |
| --- | --- | --- | --- |
|  | Supporting Documents | TBD |  |
| {                 "label": "Supporting Documents",                 "required": "IF_AVAILABLE",                 "type": "HELPER_DOCUMENT"             } |
|  |  |  |  |

### Instrument Name = Deed of Trust/Mortgage Modification Agreement

| **ID** | **Indexing Field/Array** | **Field Type** | **Required** | **Options** | **Mapping** | **Path** |
| --- | --- | --- | --- | --- | --- | --- |
|  | Grantors | Array | ALWAYS | N/A | TBD | grantors[] |
| Type Type: ENUM Options: Organization Individual Required: ALWAYS Path: grantors[].type WHEN: Type = Organization Name Type: STRING Required: ALWAYS Path: grantors[].nameUnparsed Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantors[].capacity WHEN: Type = Individual First Type: STRING Required: ALWAYS Path: grantors[].firstName Middle Type: STRING Required: NOT_REQUIRED Path: grantors[].middleName Last Type: STRING Required: ALWAYS Path: grantors[].lastName Suffix Type: STRING Required: NOT_REQUIRED Path: grantors[].nameSuffix Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantors[].capacity |
|  | Grantees | Array | ALWAYS | N/A | TBD | grantees[] |
| Type Type: ENUM Options: Organization Individual Required: ALWAYS Path: grantees[].type WHEN: Type = Organization Name Type: STRING Required: ALWAYS Path: grantees[].nameUnparsed Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantees[].capacity WHEN: Type = Individual First Type: STRING Required: ALWAYS Path: grantees[].firstName Middle Type: STRING Required: NOT_REQUIRED Path: grantees[].middleName Last Type: STRING Required: ALWAYS Path: grantees[].lastName Suffix Type: STRING Required: NOT_REQUIRED Path: grantees[].nameSuffix Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantees[].capacity |
|  | County Recordation Tax Exempt | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | countyRecordationExem |
|  | County Transfer Tax Exempt | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | countyTransferExempt |
|  | New Mortgage | CURRENCY, DECIMAL | ALWAYS | N/A | TBD | mortgageConsideration |
|  | Reference Information (Original Mortgage Information in UI) | Array | ALWAYS | N/A | TBD | referenceInformation[] |
| Book Type: STRING Reference Book must be a number and five (5) digits or less. ^\\d{1,5}$ Required: ALWAYS Path: referenceInformation[].book Page Type: STRING Reference Page must be a number and four (4) digits or less. ^\\d{1,4}$ Required: ALWAYS Path: referenceInformation[].page |
|  | Previous Loan | CURRENCY, DECIMAL | ALWAYS | N/A | TBD | previousLoanAmount |
|  | Unpaid Principal Balance | CURRENCY, DECIMAL | ALWAYS | N/A | TBD | unpaidPrincipal |
|  | Taxable Amount | CURRENCY, DECIMAL | ALWAYS | N/A | TBD | taxableAmount |
|  | Legal Description (Property Information in UI) | Array | ALWAYS | N/A | TBD | legalDescriptions[] |
| Prince George's allows up to 5 account numbers per document District Type: INTEGER District must be a 2 digit number. ^\\d{1,2}$ Required: ALWAYS Path: legalDescriptions[].blockNumber Property ID Type: STRING Property ID must be a 7 digit number. ^\\d{7}$ Required: ALWAYS Path: legalDescriptions[].parcelId Premise Address Type: STRING Required: ALWAYS Path: legalDescriptions[].addressStreet City Type: STRING Required: ALWAYS Path: legalDescriptions[].addressCity State Type: ENUM Options: AL,AK,AZ,AR,CA,CO,CT,DE,DC,FL,GU,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,PR,RI,SC,SD,TN,TX,UT,VT,VA,VI,WA,WV,WI,WY,AS,FM,MH,MP,PW,AB,BC,MB,NB,NL,NT,NS,NU,ON,PE,QC,SK,YT,AA,AE,AP Required: ALWAYS Path: legalDescriptions[].addressState ZIp Type: STRING ^\\d{5}$ Required: ALWAYS Path: legalDescriptions[].addressZip |
|  | Principal Residence | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | principalResidence |
|  | Purchase Money Deed of Trust on record over 12 months | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | purchaseMoneyOnDeedOfTrust |
|  | This is a re-recording | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | rerecord |
|  | Comments | STRING | NOT_REQUIRED | N/A | TBD | comments |

#### Supporting Docs

| **ID** | **Doc Name** | **Rules** | **Comments** |
| --- | --- | --- | --- |
|  | Supporting Documents | TBD |  |
| {                 "label": "Supporting Documents",                 "required": "IF_AVAILABLE",                 "type": "HELPER_DOCUMENT"             } |
|  |  |  |  |

### Instrument Name = Mortgage

| **ID** | **Indexing Field/Array** | **Field Type** | **Required** | **Options** | **Mapping** | **Path** |
| --- | --- | --- | --- | --- | --- | --- |
|  | Grantors | Array | ALWAYS | N/A | TBD | grantors[] |
| Type Type: ENUM Options: Organization Individual Required: ALWAYS Path: grantors[].type WHEN: Type = Organization Name Type: STRING Required: ALWAYS Path: grantors[].nameUnparsed Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantors[].capacity WHEN: Type = Individual First Type: STRING Required: ALWAYS Path: grantors[].firstName Middle Type: STRING Required: NOT_REQUIRED Path: grantors[].middleName Last Type: STRING Required: ALWAYS Path: grantors[].lastName Suffix Type: STRING Required: NOT_REQUIRED Path: grantors[].nameSuffix Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantors[].capacity |
|  | Grantees | Array | ALWAYS | N/A | TBD | grantees[] |
| Type Type: ENUM Options: Organization Individual Required: ALWAYS Path: grantees[].type WHEN: Type = Organization Name Type: STRING Required: ALWAYS Path: grantees[].nameUnparsed Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantees[].capacity WHEN: Type = Individual First Type: STRING Required: ALWAYS Path: grantees[].firstName Middle Type: STRING Required: NOT_REQUIRED Path: grantees[].middleName Last Type: STRING Required: ALWAYS Path: grantees[].lastName Suffix Type: STRING Required: NOT_REQUIRED Path: grantees[].nameSuffix Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantees[].capacity |
|  | Consideration | CURRENCY, DECIMAL | ALWAYS | N/A | TBD | consideration |
|  | County Recordation Tax Exempt | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | countyRecordationExem |
|  | County Transfer Tax Exempt | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | countyTransferExempt |
|  | Loan Amount | CURRENCY, DECIMAL | ALWAYS | N/A | TBD | mortgageConsideration |
|  | Document states 'Purchase Money Mortgage' | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | documentStatesPurchaseMoney |
|  | Legal Description (Property Information in UI) | Array | ALWAYS | N/A | TBD | legalDescriptions[] |
| Prince George's allows up to 5 account numbers per document District Type: INTEGER District must be a 2 digit number. ^\\d{1,2}$ Required: ALWAYS Path: legalDescriptions[].blockNumber Property ID Type: STRING Property ID must be a 7 digit number. ^\\d{7}$ Required: ALWAYS Path: legalDescriptions[].parcelId Premise Address Type: STRING Required: ALWAYS Path: legalDescriptions[].addressStreet City Type: STRING Required: ALWAYS Path: legalDescriptions[].addressCity State Type: ENUM Options: AL,AK,AZ,AR,CA,CO,CT,DE,DC,FL,GU,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,PR,RI,SC,SD,TN,TX,UT,VT,VA,VI,WA,WV,WI,WY,AS,FM,MH,MP,PW,AB,BC,MB,NB,NL,NT,NS,NU,ON,PE,QC,SK,YT,AA,AE,AP Required: ALWAYS Path: legalDescriptions[].addressState ZIp Type: STRING ^\\d{5}$ Required: ALWAYS Path: legalDescriptions[].addressZip |
|  | Principal Residence | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | principalResidence |
|  | Purchase Money Deed of Trust on record over 12 months | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | purchaseMoneyOnDeedOfTrust |
|  | This is a re-recording | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | rerecord |
|  | Comments | STRING | NOT_REQUIRED | N/A | TBD | comments |

#### Supporting Docs

| **ID** | **Doc Name** | **Rules** | **Comments** |
| --- | --- | --- | --- |
|  | Supporting Documents | TBD |  |
|  |  |  |  |

### Instrument Name = Power of Attorney

| **ID** | **Indexing Field/Array** | **Field Type** | **Required** | **Options** | **Mapping** | **Path** |
| --- | --- | --- | --- | --- | --- | --- |
|  | Grantors | Array | ALWAYS | N/A | TBD | grantors[] |
| Type Type: ENUM Options: Organization Individual Required: ALWAYS Path: grantors[].type WHEN: Type = Organization Name Type: STRING Required: ALWAYS Path: grantors[].nameUnparsed Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantors[].capacity WHEN: Type = Individual First Type: STRING Required: ALWAYS Path: grantors[].firstName Middle Type: STRING Required: NOT_REQUIRED Path: grantors[].middleName Last Type: STRING Required: ALWAYS Path: grantors[].lastName Suffix Type: STRING Required: NOT_REQUIRED Path: grantors[].nameSuffix Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantors[].capacity |
|  | Grantees | Array | ALWAYS | N/A | TBD | grantees[] |
| Type Type: ENUM Options: Organization Individual Required: ALWAYS Path: grantees[].type WHEN: Type = Organization Name Type: STRING Required: ALWAYS Path: grantees[].nameUnparsed Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantees[].capacity WHEN: Type = Individual First Type: STRING Required: ALWAYS Path: grantees[].firstName Middle Type: STRING Required: NOT_REQUIRED Path: grantees[].middleName Last Type: STRING Required: ALWAYS Path: grantees[].lastName Suffix Type: STRING Required: NOT_REQUIRED Path: grantees[].nameSuffix Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantees[].capacity |
|  | Legal Description (Property Information in UI) | Array | ALWAYS | N/A | TBD | legalDescriptions[] |
| Prince George's allows up to 5 account numbers per document District Type: INTEGER District must be a 2 digit number. ^\\d{1,2}$ Required: ALWAYS Path: legalDescriptions[].blockNumber Property ID Type: STRING Property ID must be a 7 digit number. ^\\d{7}$ Required: ALWAYS Path: legalDescriptions[].parcelId Premise Address Type: STRING Required: ALWAYS Path: legalDescriptions[].addressStreet City Type: STRING Required: ALWAYS Path: legalDescriptions[].addressCity State Type: ENUM Options: AL,AK,AZ,AR,CA,CO,CT,DE,DC,FL,GU,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,PR,RI,SC,SD,TN,TX,UT,VT,VA,VI,WA,WV,WI,WY,AS,FM,MH,MP,PW,AB,BC,MB,NB,NL,NT,NS,NU,ON,PE,QC,SK,YT,AA,AE,AP Required: ALWAYS Path: legalDescriptions[].addressState ZIp Type: STRING ^\\d{5}$ Required: ALWAYS Path: legalDescriptions[].addressZip |
|  | Principal Residence | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | principalResidence |
|  | This is a re-recording | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | rerecord |
|  | Comments | STRING | NOT_REQUIRED | N/A | TBD | comments |

#### Supporting Docs

| **ID** | **Doc Name** | **Rules** | **Comments** |
| --- | --- | --- | --- |
|  | Supporting Documents | TBD |  |
|  |  |  |  |

### Instrument Name = Assignment of Deed of Trust

| **ID** | **Indexing Field/Array** | **Field Type** | **Required** | **Options** | **Mapping** | **Path** |
| --- | --- | --- | --- | --- | --- | --- |
|  | Grantors | Array | ALWAYS | N/A | TBD | grantors[] |
| Type Type: ENUM Options: Organization Individual Required: ALWAYS Path: grantors[].type WHEN: Type = Organization Name Type: STRING Required: ALWAYS Path: grantors[].nameUnparsed Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantors[].capacity WHEN: Type = Individual First Type: STRING Required: ALWAYS Path: grantors[].firstName Middle Type: STRING Required: NOT_REQUIRED Path: grantors[].middleName Last Type: STRING Required: ALWAYS Path: grantors[].lastName Suffix Type: STRING Required: NOT_REQUIRED Path: grantors[].nameSuffix Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantors[].capacity |
|  | Grantees | Array | ALWAYS | N/A | TBD | grantees[] |
| Type Type: ENUM Options: Organization Individual Required: ALWAYS Path: grantees[].type WHEN: Type = Organization Name Type: STRING Required: ALWAYS Path: grantees[].nameUnparsed Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantees[].capacity WHEN: Type = Individual First Type: STRING Required: ALWAYS Path: grantees[].firstName Middle Type: STRING Required: NOT_REQUIRED Path: grantees[].middleName Last Type: STRING Required: ALWAYS Path: grantees[].lastName Suffix Type: STRING Required: NOT_REQUIRED Path: grantees[].nameSuffix Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantees[].capacity |
|  | Reference Information (Original Mortgage Information in UI) | Array | ALWAYS | N/A | TBD | referenceInformation[] |
| Reference Info Book Type: STRING Reference Book must be a number and five (5) digits or less. ^\\d{1,5}$ Required: ALWAYS Path: referenceInformation[].book Reference Info Page Type: STRING Reference Page must be a number and four (4) digits or less. ^\\d{1,4}$ Required: ALWAYS Path: referenceInformation[].page |
|  | Principal Residence | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | principalResidence |
|  | This is a re-recording | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | rerecord |
|  | Comments | STRING | NOT_REQUIRED | N/A | TBD | comments |

#### Supporting Docs

| **ID** | **Doc Name** | **Rules** | **Comments** |
| --- | --- | --- | --- |
|  | Supporting Documents | TBD |  |
| {                 "label": "Supporting Documents",                 "required": "IF_AVAILABLE",                 "type": "HELPER_DOCUMENT"             } |
|  |  |  |  |

### Instrument Name = Agreement

| **ID** | **Indexing Field/Array** | **Field Type** | **Required** | **Options** | **Mapping** | **Path** |
| --- | --- | --- | --- | --- | --- | --- |
|  | Grantors | Array | ALWAYS | N/A | TBD | grantors[] |
| Type Type: ENUM Options: Organization Individual Required: ALWAYS Path: grantors[].type WHEN: Type = Organization Name Type: STRING Required: ALWAYS Path: grantors[].nameUnparsed Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantors[].capacity WHEN: Type = Individual First Type: STRING Required: ALWAYS Path: grantors[].firstName Middle Type: STRING Required: NOT_REQUIRED Path: grantors[].middleName Last Type: STRING Required: ALWAYS Path: grantors[].lastName Suffix Type: STRING Required: NOT_REQUIRED Path: grantors[].nameSuffix Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantors[].capacity |
|  | Grantees | Array | ALWAYS | N/A | TBD | grantees[] |
| Type Type: ENUM Options: Organization Individual Required: ALWAYS Path: grantees[].type WHEN: Type = Organization Name Type: STRING Required: ALWAYS Path: grantees[].nameUnparsed Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantees[].capacity WHEN: Type = Individual First Type: STRING Required: ALWAYS Path: grantees[].firstName Middle Type: STRING Required: NOT_REQUIRED Path: grantees[].middleName Last Type: STRING Required: ALWAYS Path: grantees[].lastName Suffix Type: STRING Required: NOT_REQUIRED Path: grantees[].nameSuffix Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantees[].capacity |
|  | Consideration | CURRENCY, DECIMAL | ALWAYS | N/A | TBD | consideration |
|  | State Transfer Tax Exempt | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | stateTransferExempt |
|  | County Recordation Tax Exempt | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | countyRecordationExem |
|  | County Transfer Tax Exempt | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | countyTransferExempt |
|  | Principal Residence | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | principalResidence |
|  | This is a re-recording | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | rerecord |
|  | Comments | STRING | NOT_REQUIRED | N/A | TBD | comments |

#### Supporting Docs

| **ID** | **Doc Name** | **Rules** | **Comments** |
| --- | --- | --- | --- |
|  | Supporting Documents | TBD |  |
|  |  |  |  |

### Instrument Name = Terminations (no Termination of Lease)

| **ID** | **Indexing Field/Array** | **Field Type** | **Required** | **Options** | **Mapping** | **Path** |
| --- | --- | --- | --- | --- | --- | --- |
|  | Grantors | Array | ALWAYS | N/A | TBD | grantors[] |
| Type Type: ENUM Options: Organization Individual Required: ALWAYS Path: grantors[].type WHEN: Type = Organization Name Type: STRING Required: ALWAYS Path: grantors[].nameUnparsed Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantors[].capacity WHEN: Type = Individual First Type: STRING Required: ALWAYS Path: grantors[].firstName Middle Type: STRING Required: NOT_REQUIRED Path: grantors[].middleName Last Type: STRING Required: ALWAYS Path: grantors[].lastName Suffix Type: STRING Required: NOT_REQUIRED Path: grantors[].nameSuffix Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantors[].capacity |
|  | Grantees | Array | ALWAYS | N/A | TBD | grantees[] |
| Type Type: ENUM Options: Organization Individual Required: ALWAYS Path: grantees[].type WHEN: Type = Organization Name Type: STRING Required: ALWAYS Path: grantees[].nameUnparsed Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantees[].capacity WHEN: Type = Individual First Type: STRING Required: ALWAYS Path: grantees[].firstName Middle Type: STRING Required: NOT_REQUIRED Path: grantees[].middleName Last Type: STRING Required: ALWAYS Path: grantees[].lastName Suffix Type: STRING Required: NOT_REQUIRED Path: grantees[].nameSuffix Role Type: ENUM Options: POWER OF ATTORNEY PERSONAL REPRESENTATIVE SUBSTITUTE TRUSTEE Required: IF_AVAILABLE Path: grantees[].capacity |
|  | Reference Information | Array | ALWAYS | N/A | TBD | referenceInformation[] |
| Book Type: STRING Reference Book must be a number and five (5) digits or less. ^\\d{1,5}$ Required: ALWAYS Path: referenceInformation[].book Page Type: STRING Reference Page must be a number and four (4) digits or less. ^\\d{1,4}$ Required: ALWAYS Path: referenceInformation[].page |
|  | Legal Description | Array | ALWAYS | N/A | TBD | legalDescriptions[] |
| Prince George's allows up to 5 account numbers per document District Type: INTEGER District must be a 2 digit number. ^\\d{1,2}$ Required: ALWAYS Path: legalDescriptions[].blockNumber Property ID Type: STRING Property ID must be a 7 digit number. ^\\d{7}$ Required: ALWAYS Path: legalDescriptions[].parcelId Premise Address Type: STRING Required: ALWAYS Path: legalDescriptions[].addressStreet City Type: STRING Required: ALWAYS Path: legalDescriptions[].addressCity State Type: ENUM Options: AL,AK,AZ,AR,CA,CO,CT,DE,DC,FL,GU,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,PR,RI,SC,SD,TN,TX,UT,VT,VA,VI,WA,WV,WI,WY,AS,FM,MH,MP,PW,AB,BC,MB,NB,NL,NT,NS,NU,ON,PE,QC,SK,YT,AA,AE,AP Required: ALWAYS Path: legalDescriptions[].addressState ZIp Type: STRING ^\\d{5}$ Required: ALWAYS Path: legalDescriptions[].addressZip |
|  | Principal Residence | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | principalResidence |
|  | This is a re-recording | BOOL (Checkbox) | IF_AVAILABLE | N/A | TBD | rerecord |
|  | Comments | STRING | NOT_REQUIRED | N/A | TBD | comments |

#### Supporting Docs

| **ID** | **Doc Name** | **Rules** | **Comments** |
| --- | --- | --- | --- |
|  | Supporting Documents | TBD |  |
| {                 "label": "Supporting Documents",                 "required": "IF_AVAILABLE",                 "type": "HELPER_DOCUMENT"             } |
|  |  |  |  |

## Instrument Requirements (Get Instrument Requirements)

### RecipientID = MDC7EX; Instrument Name = Deed of Trust

#### Request:

https://test.simplifile.com/sf/rest/api/erecord/submitters/PALX7W/recipients/MDC7EX/instrumentRequirements?instrument=Deed of Trust

#### Response:

{

    "instrumentRequirements": {

        "acceptsCommentForRecipient": {

            "label": "Comments for Recipient",

            "path": "commentForRecipient",

            "required": "NOT_REQUIRED",

            "type": "STRING"

        },

        "apiRequirementsNotes": [],

        "instructions": [

            {

                "html": "<a href='https://simplifile.uat1.ice.com/sf/docstore/LR_intake_sheet.pdf' target='_blank'>State of Maryland Instrument Intake Sheet</a> is required for this document type and must be the <b><u>last page</u></b> of the document."

            },

            {

                "html": "<a href=\"http://princegeorgescountymd.gov/DocumentCenter/View/1855\" target=\"_blank\">Prince George's County Finance Affidavit</a> is required for this document type if you are claiming exemptions and must be place <u>BEFORE</u> the Intake Sheet."

            },

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Guidelines-for-Submitters-Prince-Georges-County-updated-09-14-21.pdf\" target=\"_blank\">E-recording requirements</a>"

            },

            {

                "html": "Please use the updated <a href=\"https://simplifile.uat1.ice.com/sf/docstore/2018_WH_AR_Exemption_Form.pdf\" target=\"_blank\">2018 WH-AR Withholding Form</a>."

            },

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Grantors_and_Grantees_Made_Simple.pdf\" target=\"_blank\">Grantor & Grantee Indexing guidelines</a>"

            },

            {

                "html": "Please note that if the document is a Termination of Lease, it cannot be e-Recorded at this time. Other types of Terminations are allowed."

            },

            {

                "html": "Documents can be fully exempt from specific taxes and be e-recorded. However documents with a partial exemption from a tax section cannot be e-recorded and must be paper filed. No partial tax exemptions allowed."

            },

            {

                "html": "Effective immediately, Prince George's County will not accept tax sale property tax payments on Simplifile. Please submit these payments manually or your document will be rejected."

            }

        ],

        "instrument": "Deed of Trust",

        "requirements": [

            {

                "displayOrder": 0,

                "label": "Grantor Type",

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantors[].type",

                "required": "ALWAYS",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Organization"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 1,

                "label": "Grantor Name",

                "path": "grantors[].nameUnparsed",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 2,

                "label": "Grantor First",

                "path": "grantors[].firstName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 3,

                "label": "Grantor Middle",

                "path": "grantors[].middleName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 4,

                "label": "Grantor Last",

                "path": "grantors[].lastName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "regex": "^\\w{0,4}\\.{0,1}$",

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 5,

                "label": "Grantor Suffix",

                "path": "grantors[].nameSuffix",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "displayOrder": 6,

                "label": "Role",

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantors[].capacity",

                "required": "IF_AVAILABLE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 7,

                "label": "Grantee Type",

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantees[].type",

                "required": "ALWAYS",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Organization"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 8,

                "label": "Grantee Name",

                "path": "grantees[].nameUnparsed",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 9,

                "label": "Grantee First",

                "path": "grantees[].firstName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 10,

                "label": "Grantee Middle",

                "path": "grantees[].middleName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 11,

                "label": "Grantee Last",

                "path": "grantees[].lastName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "regex": "^\\w{0,4}\\.{0,1}$",

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 12,

                "label": "Grantee Suffix",

                "path": "grantees[].nameSuffix",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "displayOrder": 13,

                "label": "Role",

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantees[].capacity",

                "required": "IF_AVAILABLE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 14,

                "label": "Consideration",

                "path": "consideration",

                "required": "ALWAYS",

                "subType": "CURRENCY",

                "type": "DECIMAL"

            },

            {

                "displayOrder": 15,

                "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                "label": "County Recordation Tax Exempt",

                "path": "countyRecordationExempt",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 16,

                "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                "label": "County Transfer Tax Exempt",

                "path": "countyTransferExempt",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 17,

                "label": "Loan Amount",

                "path": "mortgageConsideration",

                "required": "ALWAYS",

                "subType": "CURRENCY",

                "type": "DECIMAL"

            },

            {

                "displayOrder": 18,

                "label": "Document states 'Purchase Money Mortgage'",

                "path": "documentStatesPurchaseMoney",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 19,

                "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                "label": "District",

                "path": "legalDescriptions[].blockNumber",

                "regex": "^\\d{1,2}$",

                "required": "ALWAYS",

                "type": "INTEGER"

            },

            {

                "displayOrder": 20,

                "helpText": "Property ID must be a 7 digit number.",

                "label": "Property ID",

                "path": "legalDescriptions[].parcelId",

                "regex": "^\\d{7}$",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 21,

                "label": "Premise Address",

                "path": "legalDescriptions[].addressStreet",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 22,

                "label": "City",

                "path": "legalDescriptions[].addressCity",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 23,

                "label": "State",

                "options": [

                    "AL",

                    "AK",

                    "AZ",

                    "AR",

                    "CA",

                    "CO",

                    "CT",

                    "DE",

                    "DC",

                    "FL",

                    "GU",

                    "GA",

                    "HI",

                    "ID",

                    "IL",

                    "IN",

                    "IA",

                    "KS",

                    "KY",

                    "LA",

                    "ME",

                    "MD",

                    "MA",

                    "MI",

                    "MN",

                    "MS",

                    "MO",

                    "MT",

                    "NE",

                    "NV",

                    "NH",

                    "NJ",

                    "NM",

                    "NY",

                    "NC",

                    "ND",

                    "OH",

                    "OK",

                    "OR",

                    "PA",

                    "PR",

                    "RI",

                    "SC",

                    "SD",

                    "TN",

                    "TX",

                    "UT",

                    "VT",

                    "VA",

                    "VI",

                    "WA",

                    "WV",

                    "WI",

                    "WY",

                    "AS",

                    "FM",

                    "MH",

                    "MP",

                    "PW",

                    "AB",

                    "BC",

                    "MB",

                    "NB",

                    "NL",

                    "NT",

                    "NS",

                    "NU",

                    "ON",

                    "PE",

                    "QC",

                    "SK",

                    "YT",

                    "AA",

                    "AE",

                    "AP"

                ],

                "path": "legalDescriptions[].addressState",

                "required": "ALWAYS",

                "subType": "STATE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 24,

                "label": "Zip",

                "path": "legalDescriptions[].addressZip",

                "regex": "^\\d{5}$",

                "required": "ALWAYS",

                "subType": "ZIP",

                "type": "STRING"

            },

            {

                "displayOrder": 25,

                "label": "Principal Residence",

                "path": "principalResidence",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 26,

                "label": "Purchase Money Deed of Trust on record over 12 months",

                "path": "purchaseMoneyOnDeedOfTrust",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 27,

                "label": "This is a re-recording",

                "path": "rerecord",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 28,

                "label": "Comments",

                "path": "comments",

                "required": "IF_AVAILABLE",

                "type": "STRING"

            },

            {

                "label": "Supporting Documents",

                "required": "IF_AVAILABLE",

                "type": "HELPER_DOCUMENT"

            }

        ]

    },

    "responseMillis": 46,

    "resultCode": "SUCCESS",

    "resultType": "INSTRUMENT_REQUIREMENTS",

    "timestamp": "2026-04-14T11:59:50.382Z"

}

### RecipientID = MDC7EX; Instrument Name = Deed of Trust/Mortgage - Refinance

#### Request:

https://test.simplifile.com/sf/rest/api/erecord/submitters/PALX7W/recipients/MDC7EX/instrumentRequirements?instrument=Deed of Trust/Mortgage - Refinance

#### Response:

{

    "instrumentRequirements": {

        "acceptsCommentForRecipient": {

            "label": "Comments for Recipient",

            "path": "commentForRecipient",

            "required": "NOT_REQUIRED",

            "type": "STRING"

        },

        "apiRequirementsNotes": [],

        "instructions": [

            {

                "html": "<a href='https://simplifile.uat1.ice.com/sf/docstore/LR_intake_sheet.pdf' target='_blank'>State of Maryland Instrument Intake Sheet</a> is required for this document type and must be the <b><u>last page</u></b> of the document."

            },

            {

                "html": "<a href=\"http://princegeorgescountymd.gov/DocumentCenter/View/1855\" target=\"_blank\">Prince George's County Finance Affidavit</a> is required for this document type if you are claiming exemptions and must be place <u>BEFORE</u> the Intake Sheet."

            },

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Guidelines-for-Submitters-Prince-Georges-County-updated-09-14-21.pdf\" target=\"_blank\">E-recording requirements</a>"

            },

            {

                "html": "Please use the updated <a href=\"https://simplifile.uat1.ice.com/sf/docstore/2018_WH_AR_Exemption_Form.pdf\" target=\"_blank\">2018 WH-AR Withholding Form</a>."

            },

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Grantors_and_Grantees_Made_Simple.pdf\" target=\"_blank\">Grantor & Grantee Indexing guidelines</a>"

            },

            {

                "html": "Please note that if the document is a Termination of Lease, it cannot be e-Recorded at this time. Other types of Terminations are allowed."

            },

            {

                "html": "Documents can be fully exempt from specific taxes and be e-recorded. However documents with a partial exemption from a tax section cannot be e-recorded and must be paper filed. No partial tax exemptions allowed."

            },

            {

                "html": "Effective immediately, Prince George's County will not accept tax sale property tax payments on Simplifile. Please submit these payments manually or your document will be rejected."

            },

            {

                "html": "Please attach recorded copies of any loan getting satisfied in a refinance and modification under supporting documents, for the county to verify the information is correct."

            }

        ],

        "instrument": "Deed of Trust/Mortgage - Refinance",

        "requirements": [

            {

                "displayOrder": 0,

                "label": "Grantor Type",

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantors[].type",

                "required": "ALWAYS",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Organization"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 1,

                "label": "Grantor Name",

                "path": "grantors[].nameUnparsed",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 2,

                "label": "Grantor First",

                "path": "grantors[].firstName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 3,

                "label": "Grantor Middle",

                "path": "grantors[].middleName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 4,

                "label": "Grantor Last",

                "path": "grantors[].lastName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "regex": "^\\w{0,4}\\.{0,1}$",

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 5,

                "label": "Grantor Suffix",

                "path": "grantors[].nameSuffix",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "displayOrder": 6,

                "label": "Role",

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantors[].capacity",

                "required": "IF_AVAILABLE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 7,

                "label": "Grantee Type",

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantees[].type",

                "required": "ALWAYS",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Organization"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 8,

                "label": "Grantee Name",

                "path": "grantees[].nameUnparsed",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 9,

                "label": "Grantee First",

                "path": "grantees[].firstName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 10,

                "label": "Grantee Middle",

                "path": "grantees[].middleName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 11,

                "label": "Grantee Last",

                "path": "grantees[].lastName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "regex": "^\\w{0,4}\\.{0,1}$",

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 12,

                "label": "Grantee Suffix",

                "path": "grantees[].nameSuffix",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "displayOrder": 13,

                "label": "Role",

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantees[].capacity",

                "required": "IF_AVAILABLE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 14,

                "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                "label": "County Recordation Tax Exempt",

                "path": "countyRecordationExempt",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 15,

                "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                "label": "County Transfer Tax Exempt",

                "path": "countyTransferExempt",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 16,

                "label": "Loan Amount",

                "path": "mortgageConsideration",

                "required": "ALWAYS",

                "subType": "CURRENCY",

                "type": "DECIMAL"

            },

            {

                "displayOrder": 17,

                "helpText": "Reference Book must be a number and five (5) digits or less.",

                "label": "Book",

                "path": "referenceInformation[].book",

                "regex": "^\\d{1,5}$",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 18,

                "helpText": "Reference Page must be a number and four (4) digits or less.",

                "label": "Page",

                "path": "referenceInformation[].page",

                "regex": "^\\d{1,4}$",

                "required": "ALWAYS",

                "type": "INTEGER"

            },

            {

                "displayOrder": 19,

                "label": "Previous Loan",

                "path": "previousLoanAmount",

                "required": "ALWAYS",

                "subType": "CURRENCY",

                "type": "DECIMAL"

            },

            {

                "displayOrder": 20,

                "label": "Unpaid Principal Balance",

                "path": "unpaidPrincipal",

                "required": "ALWAYS",

                "subType": "CURRENCY",

                "type": "DECIMAL"

            },

            {

                "displayOrder": 21,

                "helpText": "This should be Loan Amount - Unpaid Principal Balance",

                "label": "Taxable Amount",

                "path": "taxableAmount",

                "required": "ALWAYS",

                "subType": "CURRENCY",

                "type": "DECIMAL"

            },

            {

                "displayOrder": 22,

                "helpText": "District must be a 2 digit number.",

                "label": "District",

                "path": "legalDescriptions[].blockNumber",

                "regex": "^\\d{1,2}$",

                "required": "ALWAYS",

                "type": "INTEGER"

            },

            {

                "displayOrder": 23,

                "helpText": "Property ID must be a 7 digit number.",

                "label": "Property ID",

                "path": "legalDescriptions[].parcelId",

                "regex": "^\\d{7}$",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 24,

                "label": "Premise Address",

                "path": "legalDescriptions[].addressStreet",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 25,

                "label": "City",

                "path": "legalDescriptions[].addressCity",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 26,

                "label": "State",

                "options": [

                    "AL",

                    "AK",

                    "AZ",

                    "AR",

                    "CA",

                    "CO",

                    "CT",

                    "DE",

                    "DC",

                    "FL",

                    "GU",

                    "GA",

                    "HI",

                    "ID",

                    "IL",

                    "IN",

                    "IA",

                    "KS",

                    "KY",

                    "LA",

                    "ME",

                    "MD",

                    "MA",

                    "MI",

                    "MN",

                    "MS",

                    "MO",

                    "MT",

                    "NE",

                    "NV",

                    "NH",

                    "NJ",

                    "NM",

                    "NY",

                    "NC",

                    "ND",

                    "OH",

                    "OK",

                    "OR",

                    "PA",

                    "PR",

                    "RI",

                    "SC",

                    "SD",

                    "TN",

                    "TX",

                    "UT",

                    "VT",

                    "VA",

                    "VI",

                    "WA",

                    "WV",

                    "WI",

                    "WY",

                    "AS",

                    "FM",

                    "MH",

                    "MP",

                    "PW",

                    "AB",

                    "BC",

                    "MB",

                    "NB",

                    "NL",

                    "NT",

                    "NS",

                    "NU",

                    "ON",

                    "PE",

                    "QC",

                    "SK",

                    "YT",

                    "AA",

                    "AE",

                    "AP"

                ],

                "path": "legalDescriptions[].addressState",

                "required": "ALWAYS",

                "subType": "STATE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 27,

                "label": "Zip",

                "path": "legalDescriptions[].addressZip",

                "regex": "^\\d{5}$",

                "required": "ALWAYS",

                "subType": "ZIP",

                "type": "STRING"

            },

            {

                "displayOrder": 28,

                "label": "Principal Residence",

                "path": "principalResidence",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 29,

                "label": "Purchase Money Deed of Trust on record over 12 months",

                "path": "purchaseMoneyOnDeedOfTrust",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 30,

                "label": "This is a re-recording",

                "path": "rerecord",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 31,

                "label": "Comments",

                "path": "comments",

                "required": "IF_AVAILABLE",

                "type": "STRING"

            },

            {

                "label": "Supporting Documents",

                "required": "IF_AVAILABLE",

                "type": "HELPER_DOCUMENT"

            }

        ]

    },

    "responseMillis": 40,

    "resultCode": "SUCCESS",

    "resultType": "INSTRUMENT_REQUIREMENTS",

    "timestamp": "2026-04-14T11:59:27.286Z"

}

### RecipientID = MDC7EX; Instrument Name = Quit Claim Deed

#### Request:

https://test.simplifile.com/sf/rest/api/erecord/submitters/PALX7W/recipients/MDC7EX/instrumentRequirements?instrument=Quit Claim Deed

#### Response:

{

    "instrumentRequirements": {

        "acceptsCommentForRecipient": {

            "label": "Comments for Recipient",

            "path": "commentForRecipient",

            "required": "NOT_REQUIRED",

            "type": "STRING"

        },

        "apiRequirementsNotes": [],

        "instructions": [

            {

                "html": "<a href='https://simplifile.uat1.ice.com/sf/docstore/LR_intake_sheet.pdf' target='_blank'>State of Maryland Instrument Intake Sheet</a> is required for this document type and must be the <b><u>last page</u></b> of the document."

            },

            {

                "html": "<a href=\"http://princegeorgescountymd.gov/DocumentCenter/View/1855\" target=\"_blank\">Prince George's County Finance Affidavit</a> is required for this document type if you are claiming exemptions and must be place <u>BEFORE</u> the Intake Sheet."

            },

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Guidelines-for-Submitters-Prince-Georges-County-updated-09-14-21.pdf\" target=\"_blank\">E-recording requirements</a>"

            },

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Grantors_and_Grantees_Made_Simple.pdf\" target=\"_blank\">Grantor & Grantee Indexing guidelines</a>"

            },

            {

                "html": "Please note that if the document is a Termination of Lease, it cannot be e-Recorded at this time. Other types of Terminations are allowed."

            },

            {

                "html": "Completed Certificate of Preparation Included&#160;<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Certificate_of_Preparation_effective_October_1_2017.pdf\" target=\"_blank\">(Instructions)</a>"

            },

            {

                "html": "Documents can be fully exempt from specific taxes and be e-recorded. However documents with a partial exemption from a tax section cannot be e-recorded and must be paper filed. No partial tax exemptions allowed."

            },

            {

                "html": "Deeds including MW Supporting forms will need to be mailed or walked in."

            },

            {

                "html": "Effective immediately, Prince George's County will not accept tax sale property tax payments on Simplifile. Please submit these payments manually or your document will be rejected."

            }

        ],

        "instrument": "Quit Claim Deed",

        "requirements": [

            {

                "displayOrder": 0,

                "helpText": "Please check the box if the Grantor qualifies for a full Maryland Residency Exemption from Withholding Tax, which is required in order to record this document electronically.",

                "label": "Please check the box if the Grantor qualifies for a full Maryland Residency Exemption from Withholding Tax, which is required in order to record this document electronically.",

                "path": "grantorIsMarylandResident",

                "required": "ALWAYS",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 1,

                "label": "Grantor Type",

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantors[].type",

                "required": "ALWAYS",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Organization"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 2,

                "label": "Grantor Name",

                "path": "grantors[].nameUnparsed",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 3,

                "label": "Grantor First",

                "path": "grantors[].firstName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 4,

                "label": "Grantor Middle",

                "path": "grantors[].middleName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 5,

                "label": "Grantor Last",

                "path": "grantors[].lastName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "regex": "^\\w{0,4}\\.{0,1}$",

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 6,

                "label": "Grantor Suffix",

                "path": "grantors[].nameSuffix",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "displayOrder": 7,

                "label": "Role",

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantors[].capacity",

                "required": "IF_AVAILABLE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 8,

                "label": "Grantee Type",

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantees[].type",

                "required": "ALWAYS",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Organization"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 9,

                "label": "Grantee Name",

                "path": "grantees[].nameUnparsed",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 10,

                "label": "Grantee First",

                "path": "grantees[].firstName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 11,

                "label": "Grantee Middle",

                "path": "grantees[].middleName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 12,

                "label": "Grantee Last",

                "path": "grantees[].lastName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "regex": "^\\w{0,4}\\.{0,1}$",

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 13,

                "label": "Grantee Suffix",

                "path": "grantees[].nameSuffix",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "displayOrder": 14,

                "label": "Role",

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantees[].capacity",

                "required": "IF_AVAILABLE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 15,

                "label": "Consideration",

                "path": "consideration",

                "required": "ALWAYS",

                "subType": "CURRENCY",

                "type": "DECIMAL"

            },

            {

                "displayOrder": 16,

                "label": "Property Tax",

                "path": "propertyTaxAmount",

                "required": "IF_AVAILABLE",

                "subType": "CURRENCY",

                "type": "DECIMAL"

            },

            {

                "displayOrder": 17,

                "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                "label": "State Transfer Tax Exempt",

                "path": "stateTransferExempt",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 18,

                "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                "label": "County Recordation Tax Exempt",

                "path": "countyRecordationExempt",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 19,

                "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                "label": "County Transfer Tax Exempt",

                "path": "countyTransferExempt",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 20,

                "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                "label": "District",

                "path": "legalDescriptions[].blockNumber",

                "regex": "^\\d{1,2}$",

                "required": "ALWAYS",

                "type": "INTEGER"

            },

            {

                "displayOrder": 21,

                "helpText": "Property ID must be a 7 digit number.",

                "label": "Property ID",

                "path": "legalDescriptions[].parcelId",

                "regex": "^\\d{7}$",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 22,

                "label": "Premise Address",

                "path": "legalDescriptions[].addressStreet",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 23,

                "label": "City",

                "path": "legalDescriptions[].addressCity",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 24,

                "label": "State",

                "options": [

                    "AL",

                    "AK",

                    "AZ",

                    "AR",

                    "CA",

                    "CO",

                    "CT",

                    "DE",

                    "DC",

                    "FL",

                    "GU",

                    "GA",

                    "HI",

                    "ID",

                    "IL",

                    "IN",

                    "IA",

                    "KS",

                    "KY",

                    "LA",

                    "ME",

                    "MD",

                    "MA",

                    "MI",

                    "MN",

                    "MS",

                    "MO",

                    "MT",

                    "NE",

                    "NV",

                    "NH",

                    "NJ",

                    "NM",

                    "NY",

                    "NC",

                    "ND",

                    "OH",

                    "OK",

                    "OR",

                    "PA",

                    "PR",

                    "RI",

                    "SC",

                    "SD",

                    "TN",

                    "TX",

                    "UT",

                    "VT",

                    "VA",

                    "VI",

                    "WA",

                    "WV",

                    "WI",

                    "WY",

                    "AS",

                    "FM",

                    "MH",

                    "MP",

                    "PW",

                    "AB",

                    "BC",

                    "MB",

                    "NB",

                    "NL",

                    "NT",

                    "NS",

                    "NU",

                    "ON",

                    "PE",

                    "QC",

                    "SK",

                    "YT",

                    "AA",

                    "AE",

                    "AP"

                ],

                "path": "legalDescriptions[].addressState",

                "required": "ALWAYS",

                "subType": "STATE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 25,

                "label": "Zip",

                "path": "legalDescriptions[].addressZip",

                "regex": "^\\d{5}$",

                "required": "ALWAYS",

                "subType": "ZIP",

                "type": "STRING"

            },

            {

                "displayOrder": 26,

                "label": "Principal Residence",

                "path": "principalResidence",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 27,

                "label": "First Time Home Buyer",

                "path": "firstTimeHomeBuyer",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 28,

                "label": "Owner Occupied",

                "path": "ownerOccupied",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 29,

                "helpText": "Check if you have included the Certificate of Preparation which is required by State of Maryland Law on this document type.",

                "label": "Completed Certificate of Preparation Included",

                "path": "certificateOfPreparationCompleted",

                "required": "ALWAYS",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 30,

                "label": "This is a re-recording",

                "path": "rerecord",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 31,

                "label": "Comments",

                "path": "comments",

                "required": "IF_AVAILABLE",

                "type": "STRING"

            },

            {

                "label": "Supporting Documents",

                "required": "IF_AVAILABLE",

                "type": "HELPER_DOCUMENT"

            }

        ]

    },

    "responseMillis": 50,

    "resultCode": "SUCCESS",

    "resultType": "INSTRUMENT_REQUIREMENTS",

    "timestamp": "2026-04-14T11:59:01.428Z"

}

### RecipientID = MDC7EX; Instrument Name = Deed of Trust/Mortgage Modification Agreement

#### Request:

https://test.simplifile.com/sf/rest/api/erecord/submitters/PALX7W/recipients/MDC7EX/instrumentRequirements?instrument= Deed of Trust/Mortgage Modification Agreement

#### Response:

{

    "instrumentRequirements": {

        "acceptsCommentForRecipient": {

            "label": "Comments for Recipient",

            "path": "commentForRecipient",

            "required": "NOT_REQUIRED",

            "type": "STRING"

        },

        "apiRequirementsNotes": [],

        "instructions": [

            {

                "html": "<a href='https://simplifile.uat1.ice.com/sf/docstore/LR_intake_sheet.pdf' target='_blank'>State of Maryland Instrument Intake Sheet</a> is required for this document type and must be the <b><u>last page</u></b> of the document."

            },

            {

                "html": "<a href=\"http://princegeorgescountymd.gov/DocumentCenter/View/1855\" target=\"_blank\">Prince George's County Finance Affidavit</a> is required for this document type if you are claiming exemptions and must be place <u>BEFORE</u> the Intake Sheet."

            },

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Guidelines-for-Submitters-Prince-Georges-County-updated-09-14-21.pdf\" target=\"_blank\">E-recording requirements</a>"

            },

            {

                "html": "Please use the updated <a href=\"https://simplifile.uat1.ice.com/sf/docstore/2018_WH_AR_Exemption_Form.pdf\" target=\"_blank\">2018 WH-AR Withholding Form</a>."

            },

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Grantors_and_Grantees_Made_Simple.pdf\" target=\"_blank\">Grantor & Grantee Indexing guidelines</a>"

            },

            {

                "html": "Please note that if the document is a Termination of Lease, it cannot be e-Recorded at this time. Other types of Terminations are allowed."

            },

            {

                "html": "Documents can be fully exempt from specific taxes and be e-recorded. However documents with a partial exemption from a tax section cannot be e-recorded and must be paper filed. No partial tax exemptions allowed."

            },

            {

                "html": "Effective immediately, Prince George's County will not accept tax sale property tax payments on Simplifile. Please submit these payments manually or your document will be rejected."

            },

            {

                "html": "Please attach recorded copies of any loan getting satisfied in a refinance and modification under supporting documents, for the county to verify the information is correct."

            }

        ],

        "instrument": " Deed of Trust/Mortgage Modification Agreement",

        "requirements": [

            {

                "displayOrder": 0,

                "label": "Grantor Type",

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantors[].type",

                "required": "ALWAYS",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Organization"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 1,

                "label": "Grantor Name",

                "path": "grantors[].nameUnparsed",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 2,

                "label": "Grantor First",

                "path": "grantors[].firstName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 3,

                "label": "Grantor Middle",

                "path": "grantors[].middleName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 4,

                "label": "Grantor Last",

                "path": "grantors[].lastName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "regex": "^\\w{0,4}\\.{0,1}$",

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 5,

                "label": "Grantor Suffix",

                "path": "grantors[].nameSuffix",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "displayOrder": 6,

                "label": "Role",

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantors[].capacity",

                "required": "IF_AVAILABLE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 7,

                "label": "Grantee Type",

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantees[].type",

                "required": "ALWAYS",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Organization"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 8,

                "label": "Grantee Name",

                "path": "grantees[].nameUnparsed",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 9,

                "label": "Grantee First",

                "path": "grantees[].firstName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 10,

                "label": "Grantee Middle",

                "path": "grantees[].middleName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 11,

                "label": "Grantee Last",

                "path": "grantees[].lastName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "regex": "^\\w{0,4}\\.{0,1}$",

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 12,

                "label": "Grantee Suffix",

                "path": "grantees[].nameSuffix",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "displayOrder": 13,

                "label": "Role",

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantees[].capacity",

                "required": "IF_AVAILABLE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 14,

                "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                "label": "County Recordation Tax Exempt",

                "path": "countyRecordationExempt",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 15,

                "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                "label": "County Transfer Tax Exempt",

                "path": "countyTransferExempt",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 16,

                "label": "New Mortgage",

                "path": "mortgageConsideration",

                "required": "ALWAYS",

                "subType": "CURRENCY",

                "type": "DECIMAL"

            },

            {

                "displayOrder": 17,

                "helpText": "Reference Book must be a number and five (5) digits or less.",

                "label": "Book",

                "path": "referenceInformation[].book",

                "regex": "^\\d{1,5}$",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 18,

                "helpText": "Reference Page must be a number and four (4) digits or less.",

                "label": "Page",

                "path": "referenceInformation[].page",

                "regex": "^\\d{1,4}$",

                "required": "ALWAYS",

                "type": "INTEGER"

            },

            {

                "displayOrder": 19,

                "label": "Previous Loan",

                "path": "previousLoanAmount",

                "required": "ALWAYS",

                "subType": "CURRENCY",

                "type": "DECIMAL"

            },

            {

                "displayOrder": 20,

                "label": "Unpaid Principal",

                "path": "unpaidPrincipal",

                "required": "ALWAYS",

                "subType": "CURRENCY",

                "type": "DECIMAL"

            },

            {

                "displayOrder": 21,

                "helpText": "This should be Loan Amount - Unpaid Principal Balance",

                "label": "Taxable Amount",

                "path": "taxableAmount",

                "required": "ALWAYS",

                "subType": "CURRENCY",

                "type": "DECIMAL"

            },

            {

                "displayOrder": 22,

                "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                "label": "District",

                "path": "legalDescriptions[].blockNumber",

                "regex": "^\\d{1,2}$",

                "required": "ALWAYS",

                "type": "INTEGER"

            },

            {

                "displayOrder": 23,

                "helpText": "Property ID must be a 7 digit number.",

                "label": "Property ID",

                "path": "legalDescriptions[].parcelId",

                "regex": "^\\d{7}$",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 24,

                "label": "Premise Address",

                "path": "legalDescriptions[].addressStreet",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 25,

                "label": "City",

                "path": "legalDescriptions[].addressCity",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 26,

                "label": "State",

                "options": [

                    "AL",

                    "AK",

                    "AZ",

                    "AR",

                    "CA",

                    "CO",

                    "CT",

                    "DE",

                    "DC",

                    "FL",

                    "GU",

                    "GA",

                    "HI",

                    "ID",

                    "IL",

                    "IN",

                    "IA",

                    "KS",

                    "KY",

                    "LA",

                    "ME",

                    "MD",

                    "MA",

                    "MI",

                    "MN",

                    "MS",

                    "MO",

                    "MT",

                    "NE",

                    "NV",

                    "NH",

                    "NJ",

                    "NM",

                    "NY",

                    "NC",

                    "ND",

                    "OH",

                    "OK",

                    "OR",

                    "PA",

                    "PR",

                    "RI",

                    "SC",

                    "SD",

                    "TN",

                    "TX",

                    "UT",

                    "VT",

                    "VA",

                    "VI",

                    "WA",

                    "WV",

                    "WI",

                    "WY",

                    "AS",

                    "FM",

                    "MH",

                    "MP",

                    "PW",

                    "AB",

                    "BC",

                    "MB",

                    "NB",

                    "NL",

                    "NT",

                    "NS",

                    "NU",

                    "ON",

                    "PE",

                    "QC",

                    "SK",

                    "YT",

                    "AA",

                    "AE",

                    "AP"

                ],

                "path": "legalDescriptions[].addressState",

                "required": "ALWAYS",

                "subType": "STATE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 27,

                "label": "Zip",

                "path": "legalDescriptions[].addressZip",

                "regex": "^\\d{5}$",

                "required": "ALWAYS",

                "subType": "ZIP",

                "type": "STRING"

            },

            {

                "displayOrder": 28,

                "label": "Principal Residence",

                "path": "principalResidence",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 29,

                "label": "Purchase Money Deed of Trust on record over 12 months",

                "path": "purchaseMoneyOnDeedOfTrust",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 30,

                "label": "This is a re-recording",

                "path": "rerecord",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 31,

                "label": "Comments",

                "path": "comments",

                "required": "IF_AVAILABLE",

                "type": "STRING"

            },

            {

                "label": "Supporting Documents",

                "required": "IF_AVAILABLE",

                "type": "HELPER_DOCUMENT"

            }

        ]

    },

    "responseMillis": 40,

    "resultCode": "SUCCESS",

    "resultType": "INSTRUMENT_REQUIREMENTS",

    "timestamp": "2026-04-14T11:58:32.337Z"

}

### RecipientID = MDC7EX; Instrument Name = Mortgage

#### Request:

https://test.simplifile.com/sf/rest/api/erecord/submitters/PALX7W/recipients/MDC7EX/instrumentRequirements?instrument=Mortgage

#### Response:

{

    "instrumentRequirements": {

        "acceptsCommentForRecipient": {

            "label": "Comments for Recipient",

            "path": "commentForRecipient",

            "required": "NOT_REQUIRED",

            "type": "STRING"

        },

        "apiRequirementsNotes": [],

        "instructions": [

            {

                "html": "<a href='https://simplifile.uat1.ice.com/sf/docstore/LR_intake_sheet.pdf' target='_blank'>State of Maryland Instrument Intake Sheet</a> is required for this document type and must be the <b><u>last page</u></b> of the document."

            },

            {

                "html": "<a href=\"http://princegeorgescountymd.gov/DocumentCenter/View/1855\" target=\"_blank\">Prince George's County Finance Affidavit</a> is required for this document type if you are claiming exemptions and must be place <u>BEFORE</u> the Intake Sheet."

            },

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Guidelines-for-Submitters-Prince-Georges-County-updated-09-14-21.pdf\" target=\"_blank\">E-recording requirements</a>"

            },

            {

                "html": "Please use the updated <a href=\"https://simplifile.uat1.ice.com/sf/docstore/2018_WH_AR_Exemption_Form.pdf\" target=\"_blank\">2018 WH-AR Withholding Form</a>."

            },

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Grantors_and_Grantees_Made_Simple.pdf\" target=\"_blank\">Grantor & Grantee Indexing guidelines</a>"

            },

            {

                "html": "Please note that if the document is a Termination of Lease, it cannot be e-Recorded at this time. Other types of Terminations are allowed."

            },

            {

                "html": "Documents can be fully exempt from specific taxes and be e-recorded. However documents with a partial exemption from a tax section cannot be e-recorded and must be paper filed. No partial tax exemptions allowed."

            },

            {

                "html": "Effective immediately, Prince George's County will not accept tax sale property tax payments on Simplifile. Please submit these payments manually or your document will be rejected."

            }

        ],

        "instrument": "Mortgage",

        "requirements": [

            {

                "displayOrder": 0,

                "label": "Grantor Type",

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantors[].type",

                "required": "ALWAYS",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Organization"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 1,

                "label": "Grantor Name",

                "path": "grantors[].nameUnparsed",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 2,

                "label": "Grantor First",

                "path": "grantors[].firstName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 3,

                "label": "Grantor Middle",

                "path": "grantors[].middleName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 4,

                "label": "Grantor Last",

                "path": "grantors[].lastName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "regex": "^\\w{0,4}\\.{0,1}$",

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 5,

                "label": "Grantor Suffix",

                "path": "grantors[].nameSuffix",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "displayOrder": 6,

                "label": "Role",

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantors[].capacity",

                "required": "IF_AVAILABLE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 7,

                "label": "Grantee Type",

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantees[].type",

                "required": "ALWAYS",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Organization"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 8,

                "label": "Grantee Name",

                "path": "grantees[].nameUnparsed",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 9,

                "label": "Grantee First",

                "path": "grantees[].firstName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 10,

                "label": "Grantee Middle",

                "path": "grantees[].middleName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 11,

                "label": "Grantee Last",

                "path": "grantees[].lastName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "regex": "^\\w{0,4}\\.{0,1}$",

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 12,

                "label": "Grantee Suffix",

                "path": "grantees[].nameSuffix",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "displayOrder": 13,

                "label": "Role",

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantees[].capacity",

                "required": "IF_AVAILABLE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 14,

                "label": "Consideration",

                "path": "consideration",

                "required": "ALWAYS",

                "subType": "CURRENCY",

                "type": "DECIMAL"

            },

            {

                "displayOrder": 15,

                "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                "label": "County Recordation Tax Exempt",

                "path": "countyRecordationExempt",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 16,

                "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                "label": "County Transfer Tax Exempt",

                "path": "countyTransferExempt",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 17,

                "label": "Loan Amount",

                "path": "mortgageConsideration",

                "required": "ALWAYS",

                "subType": "CURRENCY",

                "type": "DECIMAL"

            },

            {

                "displayOrder": 18,

                "label": "Document states 'Purchase Money Mortgage'",

                "path": "documentStatesPurchaseMoney",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 19,

                "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                "label": "District",

                "path": "legalDescriptions[].blockNumber",

                "regex": "^\\d{1,2}$",

                "required": "ALWAYS",

                "type": "INTEGER"

            },

            {

                "displayOrder": 20,

                "helpText": "Property ID must be a 7 digit number.",

                "label": "Property ID",

                "path": "legalDescriptions[].parcelId",

                "regex": "^\\d{7}$",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 21,

                "label": "Premise Address",

                "path": "legalDescriptions[].addressStreet",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 22,

                "label": "City",

                "path": "legalDescriptions[].addressCity",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 23,

                "label": "State",

                "options": [

                    "AL",

                    "AK",

                    "AZ",

                    "AR",

                    "CA",

                    "CO",

                    "CT",

                    "DE",

                    "DC",

                    "FL",

                    "GU",

                    "GA",

                    "HI",

                    "ID",

                    "IL",

                    "IN",

                    "IA",

                    "KS",

                    "KY",

                    "LA",

                    "ME",

                    "MD",

                    "MA",

                    "MI",

                    "MN",

                    "MS",

                    "MO",

                    "MT",

                    "NE",

                    "NV",

                    "NH",

                    "NJ",

                    "NM",

                    "NY",

                    "NC",

                    "ND",

                    "OH",

                    "OK",

                    "OR",

                    "PA",

                    "PR",

                    "RI",

                    "SC",

                    "SD",

                    "TN",

                    "TX",

                    "UT",

                    "VT",

                    "VA",

                    "VI",

                    "WA",

                    "WV",

                    "WI",

                    "WY",

                    "AS",

                    "FM",

                    "MH",

                    "MP",

                    "PW",

                    "AB",

                    "BC",

                    "MB",

                    "NB",

                    "NL",

                    "NT",

                    "NS",

                    "NU",

                    "ON",

                    "PE",

                    "QC",

                    "SK",

                    "YT",

                    "AA",

                    "AE",

                    "AP"

                ],

                "path": "legalDescriptions[].addressState",

                "required": "ALWAYS",

                "subType": "STATE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 24,

                "label": "Zip",

                "path": "legalDescriptions[].addressZip",

                "regex": "^\\d{5}$",

                "required": "ALWAYS",

                "subType": "ZIP",

                "type": "STRING"

            },

            {

                "displayOrder": 25,

                "label": "Principal Residence",

                "path": "principalResidence",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 26,

                "label": "Purchase Money Deed of Trust on record over 12 months",

                "path": "purchaseMoneyOnDeedOfTrust",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 27,

                "label": "This is a re-recording",

                "path": "rerecord",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 28,

                "label": "Comments",

                "path": "comments",

                "required": "IF_AVAILABLE",

                "type": "STRING"

            },

            {

                "label": "Supporting Documents",

                "required": "IF_AVAILABLE",

                "type": "HELPER_DOCUMENT"

            }

        ]

    },

    "responseMillis": 36,

    "resultCode": "SUCCESS",

    "resultType": "INSTRUMENT_REQUIREMENTS",

    "timestamp": "2026-04-14T11:58:02.289Z"

}

### RecipientID = MDC7EX; Instrument Name = Power of Attorney

#### Request:

https://test.simplifile.com/sf/rest/api/erecord/submitters/PALX7W/recipients/MDC7EX/instrumentRequirements?instrument=Power of Attorney

#### Response:

{

    "instrumentRequirements": {

        "acceptsCommentForRecipient": {

            "label": "Comments for Recipient",

            "path": "commentForRecipient",

            "required": "NOT_REQUIRED",

            "type": "STRING"

        },

        "apiRequirementsNotes": [],

        "instructions": [

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Guidelines-for-Submitters-Prince-Georges-County-updated-09-14-21.pdf\" target=\"_blank\">E-recording requirements</a>"

            },

            {

                "html": "Please use the updated <a href=\"https://simplifile.uat1.ice.com/sf/docstore/2018_WH_AR_Exemption_Form.pdf\" target=\"_blank\">2018 WH-AR Withholding Form</a>."

            },

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Grantors_and_Grantees_Made_Simple.pdf\" target=\"_blank\">Grantor & Grantee Indexing guidelines</a>"

            },

            {

                "html": "Please note that if the document is a Termination of Lease, it cannot be e-Recorded at this time. Other types of Terminations are allowed."

            },

            {

                "html": "Effective immediately, Prince George's County will not accept tax sale property tax payments on Simplifile. Please submit these payments manually or your document will be rejected."

            }

        ],

        "instrument": "Power of Attorney",

        "requirements": [

            {

                "displayOrder": 0,

                "label": "Grantor Type",

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantors[].type",

                "required": "ALWAYS",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Organization"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 1,

                "label": "Grantor Name",

                "path": "grantors[].nameUnparsed",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 2,

                "label": "Grantor First",

                "path": "grantors[].firstName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 3,

                "label": "Grantor Middle",

                "path": "grantors[].middleName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 4,

                "label": "Grantor Last",

                "path": "grantors[].lastName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "regex": "^\\w{0,4}\\.{0,1}$",

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 5,

                "label": "Grantor Suffix",

                "path": "grantors[].nameSuffix",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "displayOrder": 6,

                "label": "Role",

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantors[].capacity",

                "required": "IF_AVAILABLE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 7,

                "label": "Grantee Type",

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantees[].type",

                "required": "ALWAYS",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Organization"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 8,

                "label": "Grantee Name",

                "path": "grantees[].nameUnparsed",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 9,

                "label": "Grantee First",

                "path": "grantees[].firstName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 10,

                "label": "Grantee Middle",

                "path": "grantees[].middleName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 11,

                "label": "Grantee Last",

                "path": "grantees[].lastName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "regex": "^\\w{0,4}\\.{0,1}$",

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 12,

                "label": "Grantee Suffix",

                "path": "grantees[].nameSuffix",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "displayOrder": 13,

                "label": "Role",

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantees[].capacity",

                "required": "IF_AVAILABLE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 14,

                "helpText": "District must be a 2 digit number.",

                "label": "District",

                "path": "legalDescriptions[].blockNumber",

                "regex": "^\\d{1,2}$",

                "required": "ALWAYS",

                "type": "INTEGER"

            },

            {

                "displayOrder": 15,

                "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                "label": "Property ID",

                "path": "legalDescriptions[].parcelId",

                "regex": "^\\d{7}$",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 16,

                "label": "Premise Address",

                "path": "legalDescriptions[].addressStreet",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 17,

                "label": "City",

                "path": "legalDescriptions[].addressCity",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 18,

                "label": "State",

                "options": [

                    "AL",

                    "AK",

                    "AZ",

                    "AR",

                    "CA",

                    "CO",

                    "CT",

                    "DE",

                    "DC",

                    "FL",

                    "GU",

                    "GA",

                    "HI",

                    "ID",

                    "IL",

                    "IN",

                    "IA",

                    "KS",

                    "KY",

                    "LA",

                    "ME",

                    "MD",

                    "MA",

                    "MI",

                    "MN",

                    "MS",

                    "MO",

                    "MT",

                    "NE",

                    "NV",

                    "NH",

                    "NJ",

                    "NM",

                    "NY",

                    "NC",

                    "ND",

                    "OH",

                    "OK",

                    "OR",

                    "PA",

                    "PR",

                    "RI",

                    "SC",

                    "SD",

                    "TN",

                    "TX",

                    "UT",

                    "VT",

                    "VA",

                    "VI",

                    "WA",

                    "WV",

                    "WI",

                    "WY",

                    "AS",

                    "FM",

                    "MH",

                    "MP",

                    "PW",

                    "AB",

                    "BC",

                    "MB",

                    "NB",

                    "NL",

                    "NT",

                    "NS",

                    "NU",

                    "ON",

                    "PE",

                    "QC",

                    "SK",

                    "YT",

                    "AA",

                    "AE",

                    "AP"

                ],

                "path": "legalDescriptions[].addressState",

                "required": "ALWAYS",

                "subType": "STATE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 19,

                "label": "Zip",

                "path": "legalDescriptions[].addressZip",

                "regex": "^\\d{5}$",

                "required": "ALWAYS",

                "subType": "ZIP",

                "type": "STRING"

            },

            {

                "displayOrder": 20,

                "label": "Principal Residence",

                "path": "principalResidence",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 21,

                "label": "This is a re-recording",

                "path": "rerecord",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 22,

                "label": "Comments",

                "path": "comments",

                "required": "IF_AVAILABLE",

                "type": "STRING"

            },

            {

                "label": "Supporting Documents",

                "required": "IF_AVAILABLE",

                "type": "HELPER_DOCUMENT"

            }

        ]

    },

    "responseMillis": 46,

    "resultCode": "SUCCESS",

    "resultType": "INSTRUMENT_REQUIREMENTS",

    "timestamp": "2026-04-14T11:57:42.050Z"

}

### RecipientID = MDC7EX; Instrument Name = Assignment of Deed of Trust

#### Request:

https://test.simplifile.com/sf/rest/api/erecord/submitters/PALX7W/recipients/MDC7EX/instrumentRequirements?instrument=Assignment of Deed of Trust

#### Response:

{

    "instrumentRequirements": {

        "acceptsCommentForRecipient": {

            "label": "Comments for Recipient",

            "path": "commentForRecipient",

            "required": "NOT_REQUIRED",

            "type": "STRING"

        },

        "apiRequirementsNotes": [],

        "instructions": [

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Guidelines-for-Submitters-Prince-Georges-County-updated-09-14-21.pdf\" target=\"_blank\">E-recording requirements</a>"

            },

            {

                "html": "Please use the updated <a href=\"https://simplifile.uat1.ice.com/sf/docstore/2018_WH_AR_Exemption_Form.pdf\" target=\"_blank\">2018 WH-AR Withholding Form</a>."

            },

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Grantors_and_Grantees_Made_Simple.pdf\" target=\"_blank\">Grantor & Grantee Indexing guidelines</a>"

            },

            {

                "html": "Please note that if the document is a Termination of Lease, it cannot be e-Recorded at this time. Other types of Terminations are allowed."

            },

            {

                "html": "Once submitted to PG, please do not call the Finance Office and ask them to reject it.  Please check your work carefully before submitting."

            },

            {

                "html": "Effective immediately, Prince George's County will not accept tax sale property tax payments on Simplifile. Please submit these payments manually or your document will be rejected."

            }

        ],

        "instrument": "Assignment of Deed of Trust",

        "requirements": [

            {

                "displayOrder": 0,

                "label": "Grantor Type",

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantors[].type",

                "required": "ALWAYS",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Organization"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 1,

                "label": "Grantor Name",

                "path": "grantors[].nameUnparsed",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 2,

                "label": "Grantor First",

                "path": "grantors[].firstName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 3,

                "label": "Grantor Middle",

                "path": "grantors[].middleName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 4,

                "label": "Grantor Last",

                "path": "grantors[].lastName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "regex": "^\\w{0,4}\\.{0,1}$",

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 5,

                "label": "Grantor Suffix",

                "path": "grantors[].nameSuffix",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "displayOrder": 6,

                "label": "Role",

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantors[].capacity",

                "required": "IF_AVAILABLE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 7,

                "label": "Grantee Type",

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantees[].type",

                "required": "ALWAYS",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Organization"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 8,

                "label": "Grantee Name",

                "path": "grantees[].nameUnparsed",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 9,

                "label": "Grantee First",

                "path": "grantees[].firstName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 10,

                "label": "Grantee Middle",

                "path": "grantees[].middleName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 11,

                "label": "Grantee Last",

                "path": "grantees[].lastName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "regex": "^\\w{0,4}\\.{0,1}$",

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 12,

                "label": "Grantee Suffix",

                "path": "grantees[].nameSuffix",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "displayOrder": 13,

                "label": "Role",

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantees[].capacity",

                "required": "IF_AVAILABLE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 14,

                "helpText": "Reference Book must be a number and five (5) digits or less.",

                "label": "Reference Info Book",

                "path": "referenceInformation[].book",

                "regex": "^\\d{1,5}$",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 15,

                "helpText": "Reference Page must be a number and four (4) digits or less.",

                "label": "Reference Info Page",

                "path": "referenceInformation[].page",

                "regex": "^\\d{1,4}$",

                "required": "ALWAYS",

                "type": "INTEGER"

            },

            {

                "displayOrder": 16,

                "label": "Principal Residence",

                "path": "principalResidence",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 17,

                "label": "This is a re-recording",

                "path": "rerecord",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 18,

                "label": "Comments",

                "path": "comments",

                "required": "IF_AVAILABLE",

                "type": "STRING"

            },

            {

                "label": "Supporting Documents",

                "required": "IF_AVAILABLE",

                "type": "HELPER_DOCUMENT"

            }

        ]

    },

    "responseMillis": 43,

    "resultCode": "SUCCESS",

    "resultType": "INSTRUMENT_REQUIREMENTS",

    "timestamp": "2026-04-14T11:57:13.848Z"

}

### RecipientID = MDC7EX; Instrument Name = Agreement

#### Request:

https://test.simplifile.com/sf/rest/api/erecord/submitters/PALX7W/recipients/MDC7EX/instrumentRequirements?instrument=Agreement

#### Response:

{

    "instrumentRequirements": {

        "acceptsCommentForRecipient": {

            "label": "Comments for Recipient",

            "path": "commentForRecipient",

            "required": "NOT_REQUIRED",

            "type": "STRING"

        },

        "apiRequirementsNotes": [],

        "instructions": [

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Guidelines-for-Submitters-Prince-Georges-County-updated-09-14-21.pdf\" target=\"_blank\">E-recording requirements</a>"

            },

            {

                "html": "Please use the updated <a href=\"https://simplifile.uat1.ice.com/sf/docstore/2018_WH_AR_Exemption_Form.pdf\" target=\"_blank\">2018 WH-AR Withholding Form</a>."

            },

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Grantors_and_Grantees_Made_Simple.pdf\" target=\"_blank\">Grantor & Grantee Indexing guidelines</a>"

            },

            {

                "html": "Please note that if the document is a Termination of Lease, it cannot be e-Recorded at this time. Other types of Terminations are allowed."

            },

            {

                "html": "Once submitted to PG, please do not call the Finance Office and ask them to reject it.  Please check your work carefully before submitting."

            },

            {

                "html": "Effective immediately, Prince George's County will not accept tax sale property tax payments on Simplifile. Please submit these payments manually or your document will be rejected."

            }

        ],

        "instrument": "Agreement",

        "requirements": [

            {

                "displayOrder": 0,

                "label": "Grantor Type",

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantors[].type",

                "required": "ALWAYS",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Organization"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 1,

                "label": "Grantor Name",

                "path": "grantors[].nameUnparsed",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 2,

                "label": "Grantor First",

                "path": "grantors[].firstName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 3,

                "label": "Grantor Middle",

                "path": "grantors[].middleName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 4,

                "label": "Grantor Last",

                "path": "grantors[].lastName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "regex": "^\\w{0,4}\\.{0,1}$",

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 5,

                "label": "Grantor Suffix",

                "path": "grantors[].nameSuffix",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "displayOrder": 6,

                "label": "Role",

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantors[].capacity",

                "required": "IF_AVAILABLE",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[]",

                                "type": "FIELD_EXISTS"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 7,

                "label": "Grantee Type",

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantees[].type",

                "required": "NOT_REQUIRED",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Organization"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 8,

                "label": "Grantee Name",

                "path": "grantees[].nameUnparsed",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 9,

                "label": "Grantee First",

                "path": "grantees[].firstName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 10,

                "label": "Grantee Middle",

                "path": "grantees[].middleName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 11,

                "label": "Grantee Last",

                "path": "grantees[].lastName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 12,

                "label": "Grantee Suffix",

                "path": "grantees[].nameSuffix",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "displayOrder": 13,

                "label": "Consideration",

                "path": "consideration",

                "required": "ALWAYS",

                "subType": "CURRENCY",

                "type": "DECIMAL"

            },

            {

                "displayOrder": 14,

                "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                "label": "State Transfer Tax Exempt",

                "path": "stateTransferExempt",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 15,

                "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                "label": "County Recordation Tax Exempt",

                "path": "countyRecordationExempt",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 16,

                "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                "label": "County Transfer Tax Exempt",

                "path": "countyTransferExempt",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 17,

                "label": "Principal Residence",

                "path": "principalResidence",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 18,

                "label": "This is a re-recording",

                "path": "rerecord",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 19,

                "label": "Comments",

                "path": "comments",

                "required": "IF_AVAILABLE",

                "type": "STRING"

            },

            {

                "label": "Supporting Documents",

                "required": "IF_AVAILABLE",

                "type": "HELPER_DOCUMENT"

            }

        ]

    },

    "responseMillis": 61,

    "resultCode": "SUCCESS",

    "resultType": "INSTRUMENT_REQUIREMENTS",

    "timestamp": "2026-04-14T11:56:45.543Z"

}

### RecipientID = MDC7EX; Instrument Name = Terminations (no Termination of Lease)

#### Request:

https://test.simplifile.com/sf/rest/api/erecord/submitters/PALX7W/recipients/MDC7EX/instrumentRequirements?instrument=Terminations (no Termination of Lease)

#### Response:

{

    "instrumentRequirements": {

        "acceptsCommentForRecipient": {

            "label": "Comments for Recipient",

            "path": "commentForRecipient",

            "required": "NOT_REQUIRED",

            "type": "STRING"

        },

        "apiRequirementsNotes": [],

        "instructions": [

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Guidelines-for-Submitters-Prince-Georges-County-updated-09-14-21.pdf\" target=\"_blank\">E-recording requirements</a>"

            },

            {

                "html": "Please use the updated <a href=\"https://simplifile.uat1.ice.com/sf/docstore/2018_WH_AR_Exemption_Form.pdf\" target=\"_blank\">2018 WH-AR Withholding Form</a>."

            },

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Grantors_and_Grantees_Made_Simple.pdf\" target=\"_blank\">Grantor & Grantee Indexing guidelines</a>"

            },

            {

                "html": "If you are submitting a Release of Assignment, please submit it as a Terminations, not a Release."

            },

            {

                "html": "Once submitted to PG, please do not call the Finance Office and ask them to reject it.  Please check your work carefully before submitting."

            },

            {

                "html": "Documents can be fully exempt from specific taxes and be e-recorded. However documents with a partial exemption from a tax section cannot be e-recorded and must be paper filed. No partial tax exemptions allowed."

            },

            {

                "html": "Effective immediately, Prince George's County will not accept tax sale property tax payments on Simplifile. Please submit these payments manually or your document will be rejected."

            }

        ],

        "instrument": "Terminations (no Termination of Lease)",

        "requirements": [

            {

                "displayOrder": 0,

                "label": "Grantor Type",

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantors[].type",

                "required": "ALWAYS",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Organization"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 1,

                "label": "Grantor Name",

                "path": "grantors[].nameUnparsed",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 2,

                "label": "Grantor First",

                "path": "grantors[].firstName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 3,

                "label": "Grantor Middle",

                "path": "grantors[].middleName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 4,

                "label": "Grantor Last",

                "path": "grantors[].lastName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantors[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "regex": "^\\w{0,4}\\.{0,1}$",

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 5,

                "label": "Grantor Suffix",

                "path": "grantors[].nameSuffix",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "displayOrder": 6,

                "label": "Role",

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantors[].capacity",

                "required": "IF_AVAILABLE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 7,

                "label": "Grantee Type",

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantees[].type",

                "required": "ALWAYS",

                "type": "ENUMERATED"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Organization"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 8,

                "label": "Grantee Name",

                "path": "grantees[].nameUnparsed",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 9,

                "label": "Grantee First",

                "path": "grantees[].firstName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 10,

                "label": "Grantee Middle",

                "path": "grantees[].middleName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "required": "ALWAYS"

                        }

                    }

                ],

                "displayOrder": 11,

                "label": "Grantee Last",

                "path": "grantees[].lastName",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "conditionals": [

                    {

                        "conditions": [

                            {

                                "path": "grantees[].type",

                                "type": "FIELD_VALUE",

                                "value": "Individual"

                            }

                        ],

                        "overrides": {

                            "regex": "^\\w{0,4}\\.{0,1}$",

                            "required": "IF_AVAILABLE"

                        }

                    }

                ],

                "displayOrder": 12,

                "label": "Grantee Suffix",

                "path": "grantees[].nameSuffix",

                "required": "NOT_REQUIRED",

                "type": "STRING"

            },

            {

                "displayOrder": 13,

                "label": "Role",

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantees[].capacity",

                "required": "IF_AVAILABLE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 14,

                "helpText": "Reference Book must be a number and five (5) digits or less.",

                "label": "Book",

                "path": "referenceInformation[].book",

                "regex": "^\\d{1,5}$",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 15,

                "helpText": "Reference Page must be a number and four (4) digits or less.",

                "label": "Page",

                "path": "referenceInformation[].page",

                "regex": "^\\d{1,4}$",

                "required": "ALWAYS",

                "type": "INTEGER"

            },

            {

                "displayOrder": 16,

                "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                "label": "District",

                "path": "legalDescriptions[].blockNumber",

                "regex": "^\\d{1,2}$",

                "required": "ALWAYS",

                "type": "INTEGER"

            },

            {

                "displayOrder": 17,

                "helpText": "Property ID must be a 7 digit number.",

                "label": "Property ID",

                "path": "legalDescriptions[].parcelId",

                "regex": "^\\d{7}$",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 18,

                "label": "Premise Address",

                "path": "legalDescriptions[].addressStreet",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 19,

                "label": "City",

                "path": "legalDescriptions[].addressCity",

                "required": "ALWAYS",

                "type": "STRING"

            },

            {

                "displayOrder": 20,

                "label": "State",

                "options": [

                    "AL",

                    "AK",

                    "AZ",

                    "AR",

                    "CA",

                    "CO",

                    "CT",

                    "DE",

                    "DC",

                    "FL",

                    "GU",

                    "GA",

                    "HI",

                    "ID",

                    "IL",

                    "IN",

                    "IA",

                    "KS",

                    "KY",

                    "LA",

                    "ME",

                    "MD",

                    "MA",

                    "MI",

                    "MN",

                    "MS",

                    "MO",

                    "MT",

                    "NE",

                    "NV",

                    "NH",

                    "NJ",

                    "NM",

                    "NY",

                    "NC",

                    "ND",

                    "OH",

                    "OK",

                    "OR",

                    "PA",

                    "PR",

                    "RI",

                    "SC",

                    "SD",

                    "TN",

                    "TX",

                    "UT",

                    "VT",

                    "VA",

                    "VI",

                    "WA",

                    "WV",

                    "WI",

                    "WY",

                    "AS",

                    "FM",

                    "MH",

                    "MP",

                    "PW",

                    "AB",

                    "BC",

                    "MB",

                    "NB",

                    "NL",

                    "NT",

                    "NS",

                    "NU",

                    "ON",

                    "PE",

                    "QC",

                    "SK",

                    "YT",

                    "AA",

                    "AE",

                    "AP"

                ],

                "path": "legalDescriptions[].addressState",

                "required": "ALWAYS",

                "subType": "STATE",

                "type": "ENUMERATED"

            },

            {

                "displayOrder": 21,

                "label": "Zip",

                "path": "legalDescriptions[].addressZip",

                "regex": "^\\d{5}$",

                "required": "ALWAYS",

                "subType": "ZIP",

                "type": "STRING"

            },

            {

                "displayOrder": 22,

                "label": "Principal Residence",

                "path": "principalResidence",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 23,

                "label": "This is a re-recording",

                "path": "rerecord",

                "required": "IF_AVAILABLE",

                "type": "BOOLEAN"

            },

            {

                "displayOrder": 24,

                "label": "Comments",

                "path": "comments",

                "required": "IF_AVAILABLE",

                "type": "STRING"

            },

            {

                "label": "Supporting Documents",

                "required": "IF_AVAILABLE",

                "type": "HELPER_DOCUMENT"

            }

        ]

    },

    "responseMillis": 152,

    "resultCode": "SUCCESS",

    "resultType": "INSTRUMENT_REQUIREMENTS",

    "timestamp": "2026-04-14T11:55:33.247Z"

}

## Recipient Requirements (Get Recipient Requirements)

### RecipientID = MDC7EX (Prince George's County, MD)

#### Request:

https://test.simplifile.com/sf/rest/api/erecord/recipients/MDC7EX/requirements

#### Response:

{

    "recipientRequirements": {

        "acceptsCommentForRecipient": {

            "label": "Comments for Recipient",

            "path": "commentForRecipient",

            "required": "NOT_REQUIRED",

            "type": "STRING"

        },

        "apiRequirementsNotes": [],

        "enumerations": [

            {

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantors[].type"

            },

            {

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantors[].capacity"

            },

            {

                "options": [

                    "Individual",

                    "Organization"

                ],

                "path": "grantees[].type"

            },

            {

                "options": [

                    "TRUSTEE",

                    "POWER OF ATTORNEY",

                    "PERSONAL REPRESENTATIVE",

                    "SUBSTITUTE TRUSTEE"

                ],

                "path": "grantees[].capacity"

            },

            {

                "options": [

                    "AL",

                    "AK",

                    "AZ",

                    "AR",

                    "CA",

                    "CO",

                    "CT",

                    "DE",

                    "DC",

                    "FL",

                    "GU",

                    "GA",

                    "HI",

                    "ID",

                    "IL",

                    "IN",

                    "IA",

                    "KS",

                    "KY",

                    "LA",

                    "ME",

                    "MD",

                    "MA",

                    "MI",

                    "MN",

                    "MS",

                    "MO",

                    "MT",

                    "NE",

                    "NV",

                    "NH",

                    "NJ",

                    "NM",

                    "NY",

                    "NC",

                    "ND",

                    "OH",

                    "OK",

                    "OR",

                    "PA",

                    "PR",

                    "RI",

                    "SC",

                    "SD",

                    "TN",

                    "TX",

                    "UT",

                    "VT",

                    "VA",

                    "VI",

                    "WA",

                    "WV",

                    "WI",

                    "WY",

                    "AS",

                    "FM",

                    "MH",

                    "MP",

                    "PW",

                    "AB",

                    "BC",

                    "MB",

                    "NB",

                    "NL",

                    "NT",

                    "NS",

                    "NU",

                    "ON",

                    "PE",

                    "QC",

                    "SK",

                    "YT",

                    "AA",

                    "AE",

                    "AP"

                ],

                "path": "legalDescriptions[].addressState"

            }

        ],

        "instructions": [

            {

                "html": "<a href='https://simplifile.uat1.ice.com/sf/docstore/LR_intake_sheet.pdf' target='_blank'>State of Maryland Instrument Intake Sheet</a> is required for this document type and must be the <b><u>last page</u></b> of the document.",

                "instruments": [

                    "Deed Simple",

                    "Deed of Trust/Mortgage - Refinance",

                    "Easement",

                    "Water & Sewer Lien",

                    "Deed of Trust",

                    "UCC Financing Stmt (original)",

                    "Mortgage",

                    "Assignment Deed",

                    "Deed of Trust/Mortgage Modification Agreement",

                    "Quit Claim Deed",

                    "HOA Lien",

                    "Right of Way"

                ]

            },

            {

                "html": "<a href=\"http://princegeorgescountymd.gov/DocumentCenter/View/1855\" target=\"_blank\">Prince George's County Finance Affidavit</a> is required for this document type if you are claiming exemptions and must be place <u>BEFORE</u> the Intake Sheet.",

                "instruments": [

                    "Deed Simple",

                    "Deed of Trust/Mortgage - Refinance",

                    "Easement",

                    "Water & Sewer Lien",

                    "Deed of Trust",

                    "UCC Financing Stmt (original)",

                    "Mortgage",

                    "Assignment Deed",

                    "Deed of Trust/Mortgage Modification Agreement",

                    "Quit Claim Deed",

                    "HOA Lien",

                    "Right of Way"

                ]

            },

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Guidelines-for-Submitters-Prince-Georges-County-updated-09-14-21.pdf\" target=\"_blank\">E-recording requirements</a>"

            },

            {

                "html": "Please use the updated <a href=\"https://simplifile.uat1.ice.com/sf/docstore/2018_WH_AR_Exemption_Form.pdf\" target=\"_blank\">2018 WH-AR Withholding Form</a>.",

                "instruments": [

                    "Easement",

                    "Water & Sewer Lien",

                    "Assignments of Leases/Rents (not Assignment of Lease)",

                    "Terminations (no Termination of Lease)",

                    "Deed of Trust/Mortgage Modification Agreement",

                    "Appointment of Substitute Trustee",

                    "Subordination Agreement",

                    "Assignment of Mortgage",

                    "Mortgage",

                    "Assignment of Deed of Trust",

                    "UCC Financing Stmt Amendment",

                    "Right of Way",

                    "Release",

                    "Deed of Trust",

                    "Lis Pendens",

                    "Termination of Lis Pendens",

                    "Deed of Trust/Mortgage - Refinance",

                    "Agreement",

                    "Power of Attorney",

                    "UCC Financing Stmt (original)",

                    "Partial Release",

                    "HOA Lien",

                    "Condo Lien"

                ]

            },

            {

                "html": "<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Grantors_and_Grantees_Made_Simple.pdf\" target=\"_blank\">Grantor & Grantee Indexing guidelines</a>"

            },

            {

                "html": "Please note that if the document is a Termination of Lease, it cannot be e-Recorded at this time. Other types of Terminations are allowed.",

                "instruments": [

                    "Easement",

                    "Water & Sewer Lien",

                    "Assignments of Leases/Rents (not Assignment of Lease)",

                    "Assignment Deed",

                    "Deed of Trust/Mortgage Modification Agreement",

                    "Appointment of Substitute Trustee",

                    "Quit Claim Deed",

                    "Subordination Agreement",

                    "Assignment of Mortgage",

                    "Mortgage",

                    "Assignment of Deed of Trust",

                    "UCC Financing Stmt Amendment",

                    "Right of Way",

                    "Release",

                    "Deed Simple",

                    "Deed of Trust",

                    "Lis Pendens",

                    "Termination of Lis Pendens",

                    "Deed of Trust/Mortgage - Refinance",

                    "Agreement",

                    "Power of Attorney",

                    "UCC Financing Stmt (original)",

                    "Partial Release",

                    "HOA Lien",

                    "Condo Lien"

                ]

            },

            {

                "html": "If you are submitting a Release of Assignment, please submit it as a Terminations, not a Release.",

                "instruments": [

                    "Terminations (no Termination of Lease)",

                    "Release"

                ]

            },

            {

                "html": "Once submitted to PG, please do not call the Finance Office and ask them to reject it.  Please check your work carefully before submitting.",

                "instruments": [

                    "Water & Sewer Lien",

                    "Assignments of Leases/Rents (not Assignment of Lease)",

                    "Terminations (no Termination of Lease)",

                    "Appointment of Substitute Trustee",

                    "Subordination Agreement",

                    "Assignment of Mortgage",

                    "Assignment of Deed of Trust",

                    "UCC Financing Stmt Amendment",

                    "Release",

                    "Lis Pendens",

                    "Termination of Lis Pendens",

                    "Agreement",

                    "Partial Release"

                ]

            },

            {

                "html": "Completed Certificate of Preparation Included&#160;<a href=\"https://simplifile.uat1.ice.com/sf/docstore/Certificate_of_Preparation_effective_October_1_2017.pdf\" target=\"_blank\">(Instructions)</a>",

                "instruments": [

                    "Deed Simple",

                    "Assignment Deed",

                    "Quit Claim Deed"

                ]

            },

            {

                "html": "Documents can be fully exempt from specific taxes and be e-recorded. However documents with a partial exemption from a tax section cannot be e-recorded and must be paper filed. No partial tax exemptions allowed.",

                "instruments": [

                    "Deed Simple",

                    "Easement",

                    "Water & Sewer Lien",

                    "Deed of Trust",

                    "Terminations (no Termination of Lease)",

                    "Assignment Deed",

                    "Deed of Trust/Mortgage Modification Agreement",

                    "Quit Claim Deed",

                    "Subordination Agreement",

                    "Deed of Trust/Mortgage - Refinance",

                    "UCC Financing Stmt (original)",

                    "Mortgage",

                    "UCC Financing Stmt Amendment",

                    "HOA Lien"

                ]

            },

            {

                "html": "Deeds including MW Supporting forms will need to be mailed or walked in.",

                "instruments": [

                    "Deed Simple",

                    "Assignment Deed",

                    "Quit Claim Deed"

                ]

            },

            {

                "html": "Effective immediately, Prince George's County will not accept tax sale property tax payments on Simplifile. Please submit these payments manually or your document will be rejected."

            },

            {

                "html": "Please attach recorded copies of any loan getting satisfied in a refinance and modification under supporting documents, for the county to verify the information is correct.",

                "instruments": [

                    "Deed of Trust/Mortgage - Refinance",

                    "Deed of Trust/Mortgage Modification Agreement"

                ]

            }

        ],

        "instruments": [

            {

                "instrument": "Agreement",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "CONDITIONAL",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Consideration",

                        "path": "consideration",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "State Transfer Tax Exempt",

                        "path": "stateTransferExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Recordation Tax Exempt",

                        "path": "countyRecordationExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Transfer Tax Exempt",

                        "path": "countyTransferExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Appointment of Substitute Trustee",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "helpText": "Reference Book must be a number and five (5) digits or less.",

                        "label": "Book",

                        "path": "referenceInformation[].book",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "helpText": "Reference Page must be a number and four (4) digits or less.",

                        "label": "Page",

                        "path": "referenceInformation[].page",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Property ID must be a 7 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Premise Address",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "State",

                        "path": "legalDescriptions[].addressState",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Assignment Deed",

                "requirements": [

                    {

                        "helpText": "Please check the box if the Grantor qualifies for a full Maryland Residency Exemption from Withholding Tax, which is required in order to record this document electronically.",

                        "label": "Please check the box if the Grantor qualifies for a full Maryland Residency Exemption from Withholding Tax, which is required in order to record this document electronically.",

                        "path": "grantorIsMarylandResident",

                        "required": "ALWAYS",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Consideration",

                        "path": "consideration",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "label": "Property Tax",

                        "path": "propertyTaxAmount",

                        "required": "IF_AVAILABLE",

                        "type": "DECIMAL"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "State Transfer Tax Exempt",

                        "path": "stateTransferExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Recordation Tax Exempt",

                        "path": "countyRecordationExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Transfer Tax Exempt",

                        "path": "countyTransferExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Property ID must be a 7 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Premise Address",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "State",

                        "path": "legalDescriptions[].addressState",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "First Time Home Buyer",

                        "path": "firstTimeHomeBuyer",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Owner Occupied",

                        "path": "ownerOccupied",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "Check if you have included the Certificate of Preparation which is required by State of Maryland Law on this document type.",

                        "label": "Completed Certificate of Preparation Included",

                        "path": "certificateOfPreparationCompleted",

                        "required": "ALWAYS",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Assignment of Deed of Trust",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "helpText": "Reference Book must be a number and five (5) digits or less.",

                        "label": "Reference Info Book",

                        "path": "referenceInformation[].book",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "helpText": "Reference Page must be a number and four (4) digits or less.",

                        "label": "Reference Info Page",

                        "path": "referenceInformation[].page",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Assignment of Mortgage",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "helpText": "Reference Book must be a number and five (5) digits or less.",

                        "label": "Reference Info Book",

                        "path": "referenceInformation[].book",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "helpText": "Reference Page must be a number and four (4) digits or less.",

                        "label": "Reference Info Page",

                        "path": "referenceInformation[].page",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Assignments of Leases/Rents (not Assignment of Lease)",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Property ID must be a 7 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Premise Address",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "State",

                        "path": "legalDescriptions[].addressState",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Condo Lien",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Property ID must be a 7 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Premise Address",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "State",

                        "path": "legalDescriptions[].addressState",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Deed of Trust",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Consideration",

                        "path": "consideration",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Recordation Tax Exempt",

                        "path": "countyRecordationExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Transfer Tax Exempt",

                        "path": "countyTransferExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Loan Amount",

                        "path": "mortgageConsideration",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "label": "Document states 'Purchase Money Mortgage'",

                        "path": "documentStatesPurchaseMoney",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Property ID must be a 7 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Premise Address",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "State",

                        "path": "legalDescriptions[].addressState",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Purchase Money Deed of Trust on record over 12 months",

                        "path": "purchaseMoneyOnDeedOfTrust",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Deed of Trust/Mortgage - Refinance",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Recordation Tax Exempt",

                        "path": "countyRecordationExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Transfer Tax Exempt",

                        "path": "countyTransferExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Loan Amount",

                        "path": "mortgageConsideration",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "helpText": "Reference Book must be a number and five (5) digits or less.",

                        "label": "Book",

                        "path": "referenceInformation[].book",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "helpText": "Reference Page must be a number and four (4) digits or less.",

                        "label": "Page",

                        "path": "referenceInformation[].page",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "label": "Previous Loan",

                        "path": "previousLoanAmount",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "label": "Unpaid Principal Balance",

                        "path": "unpaidPrincipal",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "helpText": "This should be Loan Amount - Unpaid Principal Balance",

                        "label": "Taxable Amount",

                        "path": "taxableAmount",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "helpText": "District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Property ID must be a 7 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Premise Address",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "State",

                        "path": "legalDescriptions[].addressState",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Purchase Money Deed of Trust on record over 12 months",

                        "path": "purchaseMoneyOnDeedOfTrust",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Deed of Trust/Mortgage Modification Agreement",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Recordation Tax Exempt",

                        "path": "countyRecordationExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Transfer Tax Exempt",

                        "path": "countyTransferExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "New Mortgage",

                        "path": "mortgageConsideration",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "helpText": "Reference Book must be a number and five (5) digits or less.",

                        "label": "Book",

                        "path": "referenceInformation[].book",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "helpText": "Reference Page must be a number and four (4) digits or less.",

                        "label": "Page",

                        "path": "referenceInformation[].page",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "label": "Previous Loan",

                        "path": "previousLoanAmount",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "label": "Unpaid Principal",

                        "path": "unpaidPrincipal",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "helpText": "This should be Loan Amount - Unpaid Principal Balance",

                        "label": "Taxable Amount",

                        "path": "taxableAmount",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Property ID must be a 7 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Premise Address",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "State",

                        "path": "legalDescriptions[].addressState",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Purchase Money Deed of Trust on record over 12 months",

                        "path": "purchaseMoneyOnDeedOfTrust",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Deed Simple",

                "requirements": [

                    {

                        "helpText": "Please check the box if the Grantor qualifies for a full Maryland Residency Exemption from Withholding Tax, which is required in order to record this document electronically.",

                        "label": "Please check the box if the Grantor qualifies for a full Maryland Residency Exemption from Withholding Tax, which is required in order to record this document electronically.",

                        "path": "grantorIsMarylandResident",

                        "required": "ALWAYS",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Consideration",

                        "path": "consideration",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "label": "Property Tax",

                        "path": "propertyTaxAmount",

                        "required": "IF_AVAILABLE",

                        "type": "DECIMAL"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "State Transfer Tax Exempt",

                        "path": "stateTransferExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Recordation Tax Exempt",

                        "path": "countyRecordationExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Transfer Tax Exempt",

                        "path": "countyTransferExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Property ID must be a 7 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Premise Address",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "State",

                        "path": "legalDescriptions[].addressState",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "First Time Home Buyer",

                        "path": "firstTimeHomeBuyer",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Owner Occupied",

                        "path": "ownerOccupied",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "Check if you have included the Certificate of Preparation which is required by State of Maryland Law on this document type.",

                        "label": "Completed Certificate of Preparation Included",

                        "path": "certificateOfPreparationCompleted",

                        "required": "ALWAYS",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Easement",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Consideration",

                        "path": "consideration",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "State Transfer Tax Exempt",

                        "path": "stateTransferExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Recordation Tax Exempt",

                        "path": "countyRecordationExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Transfer Tax Exempt",

                        "path": "countyTransferExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Property ID must be a 7 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Premise Address",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Legal Address State",

                        "path": "legalDescriptions[].addressState",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Legal Address Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "HOA Lien",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Consideration",

                        "path": "consideration",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Recordation Tax Exempt",

                        "path": "countyRecordationExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Property ID must be a 7 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Premise Address",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "State",

                        "path": "legalDescriptions[].addressState",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Lis Pendens",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "helpText": "District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "helpText": "Property ID must be a 6 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Street",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "State",

                        "path": "legalDescriptions[].addressState",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Mortgage",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Consideration",

                        "path": "consideration",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Recordation Tax Exempt",

                        "path": "countyRecordationExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Transfer Tax Exempt",

                        "path": "countyTransferExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Loan Amount",

                        "path": "mortgageConsideration",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "label": "Document states 'Purchase Money Mortgage'",

                        "path": "documentStatesPurchaseMoney",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Property ID must be a 7 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Premise Address",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "State",

                        "path": "legalDescriptions[].addressState",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Purchase Money Deed of Trust on record over 12 months",

                        "path": "purchaseMoneyOnDeedOfTrust",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Partial Release",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "helpText": "Reference Book must be a number and five (5) digits or less.",

                        "label": "Reference Info Book",

                        "path": "referenceInformation[].book",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "helpText": "Reference Page must be a number and four (4) digits or less.",

                        "label": "Reference Info Page",

                        "path": "referenceInformation[].page",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Power of Attorney",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "helpText": "District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Premise Address",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "State",

                        "path": "legalDescriptions[].addressState",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Quit Claim Deed",

                "requirements": [

                    {

                        "helpText": "Please check the box if the Grantor qualifies for a full Maryland Residency Exemption from Withholding Tax, which is required in order to record this document electronically.",

                        "label": "Please check the box if the Grantor qualifies for a full Maryland Residency Exemption from Withholding Tax, which is required in order to record this document electronically.",

                        "path": "grantorIsMarylandResident",

                        "required": "ALWAYS",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Consideration",

                        "path": "consideration",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "label": "Property Tax",

                        "path": "propertyTaxAmount",

                        "required": "IF_AVAILABLE",

                        "type": "DECIMAL"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "State Transfer Tax Exempt",

                        "path": "stateTransferExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Recordation Tax Exempt",

                        "path": "countyRecordationExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Transfer Tax Exempt",

                        "path": "countyTransferExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Property ID must be a 7 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Premise Address",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "State",

                        "path": "legalDescriptions[].addressState",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "First Time Home Buyer",

                        "path": "firstTimeHomeBuyer",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Owner Occupied",

                        "path": "ownerOccupied",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "Check if you have included the Certificate of Preparation which is required by State of Maryland Law on this document type.",

                        "label": "Completed Certificate of Preparation Included",

                        "path": "certificateOfPreparationCompleted",

                        "required": "ALWAYS",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Release",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "helpText": "Reference Book must be a number and five (5) digits or less.",

                        "label": "Book",

                        "path": "referenceInformation[].book",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "helpText": "Reference Page must be a number and four (4) digits or less.",

                        "label": "Page",

                        "path": "referenceInformation[].page",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Right of Way",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Consideration",

                        "path": "consideration",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "State Transfer Tax Exempt",

                        "path": "stateTransferExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Recordation Tax Exempt",

                        "path": "countyRecordationExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Transfer Tax Exempt",

                        "path": "countyTransferExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Property ID must be a 7 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Premise Address",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Legal Address State",

                        "path": "legalDescriptions[].addressState",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Legal Address Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Subordination Agreement",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "helpText": "Reference Book must be a number and five (5) digits or less.",

                        "label": "Book",

                        "path": "referenceInformation[].book",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "helpText": "Reference Page must be a number and four (4) digits or less.",

                        "label": "Page",

                        "path": "referenceInformation[].page",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Property ID must be a 7 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Premise Address",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "State",

                        "path": "legalDescriptions[].addressState",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Termination of Lis Pendens",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "helpText": "District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "helpText": "Property ID must be a 6 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Street",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "State",

                        "path": "legalDescriptions[].addressState",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Terminations (no Termination of Lease)",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "helpText": "Reference Book must be a number and five (5) digits or less.",

                        "label": "Book",

                        "path": "referenceInformation[].book",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "helpText": "Reference Page must be a number and four (4) digits or less.",

                        "label": "Page",

                        "path": "referenceInformation[].page",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Property ID must be a 7 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Premise Address",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "State",

                        "path": "legalDescriptions[].addressState",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "UCC Financing Stmt (original)",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Consideration",

                        "path": "consideration",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Recordation Tax Exempt",

                        "path": "countyRecordationExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Property ID must be a 7 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Street",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "State",

                        "path": "legalDescriptions[].addressState",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "UCC Financing Stmt Amendment",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "helpText": "Reference Book must be a number and five (5) digits or less.",

                        "label": "Reference Info Book",

                        "path": "referenceInformation[].book",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "helpText": "Reference Page must be a number and four (4) digits or less.",

                        "label": "Reference Info Page",

                        "path": "referenceInformation[].page",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            },

            {

                "instrument": "Water & Sewer Lien",

                "requirements": [

                    {

                        "label": "Grantor Type",

                        "path": "grantors[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantor Name",

                        "path": "grantors[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor First",

                        "path": "grantors[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Middle",

                        "path": "grantors[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Last",

                        "path": "grantors[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantor Suffix",

                        "path": "grantors[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantors[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Type",

                        "path": "grantees[].type",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Grantee Name",

                        "path": "grantees[].nameUnparsed",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee First",

                        "path": "grantees[].firstName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Middle",

                        "path": "grantees[].middleName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Last",

                        "path": "grantees[].lastName",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Grantee Suffix",

                        "path": "grantees[].nameSuffix",

                        "required": "CONDITIONAL",

                        "type": "STRING"

                    },

                    {

                        "label": "Role",

                        "path": "grantees[].capacity",

                        "required": "IF_AVAILABLE",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Consideration",

                        "path": "consideration",

                        "required": "ALWAYS",

                        "type": "DECIMAL"

                    },

                    {

                        "helpText": "If you are claiming an exemption from county transfer or recordation taxes you must submit a finance affidavit.",

                        "label": "County Recordation Tax Exempt",

                        "path": "countyRecordationExempt",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "helpText": "Prince George's allows up to 5 account numbers per document. District must be a 2 digit number.",

                        "label": "District",

                        "path": "legalDescriptions[].blockNumber",

                        "required": "ALWAYS",

                        "type": "INTEGER"

                    },

                    {

                        "helpText": "Property ID must be a 7 digit number.",

                        "label": "Property ID",

                        "path": "legalDescriptions[].parcelId",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Premise Address",

                        "path": "legalDescriptions[].addressStreet",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "City",

                        "path": "legalDescriptions[].addressCity",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "State",

                        "path": "legalDescriptions[].addressState",

                        "required": "ALWAYS",

                        "type": "ENUMERATED"

                    },

                    {

                        "label": "Zip",

                        "path": "legalDescriptions[].addressZip",

                        "required": "ALWAYS",

                        "type": "STRING"

                    },

                    {

                        "label": "Principal Residence",

                        "path": "principalResidence",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "This is a re-recording",

                        "path": "rerecord",

                        "required": "IF_AVAILABLE",

                        "type": "BOOLEAN"

                    },

                    {

                        "label": "Comments",

                        "path": "comments",

                        "required": "IF_AVAILABLE",

                        "type": "STRING"

                    },

                    {

                        "label": "Supporting Documents",

                        "required": "IF_AVAILABLE",

                        "type": "HELPER_DOCUMENT"

                    }

                ]

            }

        ]

    },

    "responseMillis": 93,

    "resultCode": "SUCCESS",

    "resultType": "RECIPIENT_REQUIREMENTS",

    "timestamp": "2026-04-14T11:50:48.730Z"

}

Page | 2