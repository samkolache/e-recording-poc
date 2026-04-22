"recipientRequirements": {

    "acceptsCommentForRecipient": {

        "label": "Comments for Recipient",

        "path": "commentForRecipient",

        "required": "NOT_REQUIRED",

        "type": "STRING"

    },

    "apiRequirementsNotes": [],

    "enumerations": [],

    "instructions": [

        {

            "html": "<b>Document and Reference Limitations</b><br>San Diego County will not record any packages that contain more than 25 documents. Additionally, the county will not record any packages that have a combined total of more than 200 names or prior recording references that need to be indexed. If your package exceeds either of these limits, please create multiple, separate packages in order to comply with the county's limits. Please contact Support with any questions at 1-800-460-5657."

        },

        {

            "html": "<b>Building Homes &amp; Jobs Act (SB2) </b><br>Effective January 1, 2018, all California counties will be charging a $75 Affordable Housing Act Fee per transaction. Documents not subject to this fee, MUST have a valid exemption clearly noted on the face of each exempt document. For more information, please email Simplifile CA Support at casupport@simplifile.com (preferred) or call 1-800-460-5657. You may also use the <a href=\"https://simplifile.uat1.ice.com/sf/docstore/SanDiegoSB2.pdf\" target=\"SB2\">cover page</a> provided by the county."

        },

        {

            "html": "<b>Re-recording requirements</b> per County Recorders Association:<br>Any documents submitted for re-recording must be re-executed by the appropriate parties:<br>-Re-execution includes new signatures, acknowledgments and/or verifications, depending on the type of document.<br>-A completed coversheet will be need to be included to provide adequate space for the new recording information. <br>-The reason for re-recording must be noted on the coversheet or on the face of the document. <br>"

        },

        {

            "html": "A <b>PCOR</b> will be accepted as complete if it contains information for at least the following underlined fields: 1. Buyer/Transferee Contact information Telephone number and/or email address (This information may be listed on the front or back page) 2. Part 3 - Item A (When applicable, this item must indicate the Total Purchase Price) 3. Signature of Buyer/Transferee (May be a copy of a signature). If any of the required items listed above are missing the PCOR will be considered incomplete and not submitted, therefore the $20.00 additional recording fee per Revenue and Taxation Code 480.3 will be added to transaction fee. The most significant change is that an Affidavit of Change of Trustee/Affidavit of Successor Trustee will no longer require a PCOR. <b>Updated 2024 PCOR</b> An updated PCOR form for 2024 is being required by most California counties. Please be sure to use the most up to date PCOR when submitting."

        }

    ],

    "instruments": [

        {

            "instrument": "ABSTRACT OF JUDGMENT",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "AFFIDAVIT OF DEATH",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                },

                {

                    "label": "PCOR",

                    "required": "IF_AVAILABLE",

                    "type": "HELPER_DOCUMENT"

                }

            ]

        },

        {

            "instrument": "AGREEMENT",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                },

                {

                    "label": "PCOR",

                    "required": "IF_AVAILABLE",

                    "type": "HELPER_DOCUMENT"

                }

            ]

        },

        {

            "instrument": "AMENDED AGREEMENT",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "ASSIGNMENT",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "ASSIGNMENT OF RENTS",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "CERTIFICATE",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "COUNTY LIEN",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "COUNTY LIEN, RENEWAL",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "DECLARATION OF RESTRICTIONS CCR",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "DEED",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                },

                {

                    "label": "PCOR",

                    "required": "IF_AVAILABLE",

                    "type": "HELPER_DOCUMENT"

                }

            ]

        },

        {

            "instrument": "DEED OF TRUST",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "EASEMENT",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "FEDERAL TAX LIEN",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "JUDGMENT",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "MODIFICATION OF DEED OF TRUST",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "MORTGAGE",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "NOTICE",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "NOTICE OF PENDING ACTION - LIS PENDENS",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "NOTICE OF TRUSTEE SALE",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "NOTICE REGARDING PAYMENT OF SUPPORT",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "NOTIE OF SPECIAL TAX LIEN",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "ORDER",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "PARTIAL RECONVEYANCE",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "PARTIAL RELEASE",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "POWER OF ATTORNEY",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "QUITCLAIM DEED",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                },

                {

                    "label": "PCOR",

                    "required": "IF_AVAILABLE",

                    "type": "HELPER_DOCUMENT"

                }

            ]

        },

        {

            "instrument": "RECONVEYANCE",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "RELEASE",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "RELEASE AGREEMENT",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "RELEASE OF COUNTY LIEN",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "RELEASE OF FEDERAL LIEN",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "RELEASE OF JUDGMENT",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "RELEASE OF LIS PENDENS",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "RELEASE OF STATE LIEN",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "REMOVAL OF INVALID LIEN",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "REQUEST FOR NOTICE",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "REQUEST NOTICE OF DEFAULT",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "REQUEST NOTICE OF DELINQUENCY",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "RESCISSION",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "REVOCABLE TRANSFER ON DEATH DEED",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                },

                {

                    "label": "PCOR",

                    "required": "IF_AVAILABLE",

                    "type": "HELPER_DOCUMENT"

                }

            ]

        },

        {

            "instrument": "SATISFACTION OF JUDGMENT",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "SECURITY AGREEMENT & FIXTURE FILING",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "STATE LIEN",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "STATE LIEN EXTENSION",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "SUBORDINATE DEED OF TRUST",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "SUBORDINATION AGREEMENT",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "SUBSTITUTION OF TRUSTEE",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "TERMINATION OF NOTICE",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "TRUSTEES DEED",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                },

                {

                    "label": "PCOR",

                    "required": "IF_AVAILABLE",

                    "type": "HELPER_DOCUMENT"

                }

            ]

        },

        {

            "instrument": "UCC AMENDED STATEMENT",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "UCC CHANGE STATEMENT",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "UCC CONTINUATION STATEMENT",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "UCC FILINGS",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        },

        {

            "instrument": "UCC TERMINATION STATEMENT",

            "requirements": [

                {

                    "label": "Party Count",

                    "path": "partyCount",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "Transfer Tax",

                    "path": "transferTaxAmount",

                    "required": "IF_AVAILABLE",

                    "type": "DECIMAL"

                },

                {

                    "label": "Title Count",

                    "path": "numberOfTitles",

                    "required": "IF_AVAILABLE",

                    "type": "INTEGER"

                },

                {

                    "label": "SB2 Fee Exempt",

                    "path": "filed",

                    "required": "IF_AVAILABLE",

                    "type": "BOOLEAN"

                }

            ]

        }

    ]

},

"responseMillis": 75,

"resultCode": "SUCCESS",

"resultType": "RECIPIENT_REQUIREMENTS",

"timestamp": "2026-04-13T14:28:45.354Z"