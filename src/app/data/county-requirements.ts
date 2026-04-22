export interface Requirement {
  label: string;
  path?: string;
  required: string;
  type: string;
  fields?: Requirement[];
}

export interface Instrument {
  instrument: string;
  requirements: Requirement[];
}

export interface CountyData {
  instruments: Instrument[];
}

export const SAN_DIEGO_DATA: CountyData = {
  instruments: [
    {
      instrument: 'ABSTRACT OF JUDGMENT',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'AFFIDAVIT OF DEATH',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'PCOR', required: 'IF_AVAILABLE', type: 'HELPER_DOCUMENT' }
      ]
    },
    {
      instrument: 'AGREEMENT',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'PCOR', required: 'IF_AVAILABLE', type: 'HELPER_DOCUMENT' }
      ]
    },
    {
      instrument: 'AMENDED AGREEMENT',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'ASSIGNMENT',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'ASSIGNMENT OF RENTS',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'CERTIFICATE',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'COUNTY LIEN',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'COUNTY LIEN, RENEWAL',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'DECLARATION OF RESTRICTIONS CCR',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'DEED',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'PCOR', required: 'IF_AVAILABLE', type: 'HELPER_DOCUMENT' }
      ]
    },
    {
      instrument: 'DEED OF TRUST',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'EASEMENT',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'FEDERAL TAX LIEN',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'JUDGMENT',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'MODIFICATION OF DEED OF TRUST',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'MORTGAGE',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'NOTICE',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'NOTICE OF PENDING ACTION - LIS PENDENS',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'NOTICE OF TRUSTEE SALE',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'NOTICE REGARDING PAYMENT OF SUPPORT',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'NOTIE OF SPECIAL TAX LIEN',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'ORDER',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'PARTIAL RECONVEYANCE',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'PARTIAL RELEASE',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'POWER OF ATTORNEY',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'QUITCLAIM DEED',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'PCOR', required: 'IF_AVAILABLE', type: 'HELPER_DOCUMENT' }
      ]
    },
    {
      instrument: 'RECONVEYANCE',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'RELEASE',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'RELEASE AGREEMENT',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'RELEASE OF COUNTY LIEN',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'RELEASE OF FEDERAL LIEN',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'RELEASE OF JUDGMENT',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'RELEASE OF LIS PENDENS',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'RELEASE OF STATE LIEN',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'REMOVAL OF INVALID LIEN',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'REQUEST FOR NOTICE',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'REQUEST NOTICE OF DEFAULT',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'REQUEST NOTICE OF DELINQUENCY',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'RESCISSION',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'REVOCABLE TRANSFER ON DEATH DEED',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'PCOR', required: 'IF_AVAILABLE', type: 'HELPER_DOCUMENT' }
      ]
    },
    {
      instrument: 'SATISFACTION OF JUDGMENT',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'SECURITY AGREEMENT & FIXTURE FILING',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'STATE LIEN',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'STATE LIEN EXTENSION',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'SUBORDINATE DEED OF TRUST',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'SUBORDINATION AGREEMENT',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'SUBSTITUTION OF TRUSTEE',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'TERMINATION OF NOTICE',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'TRUSTEES DEED',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'PCOR', required: 'IF_AVAILABLE', type: 'HELPER_DOCUMENT' }
      ]
    },
    {
      instrument: 'UCC AMENDED STATEMENT',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'UCC CHANGE STATEMENT',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'UCC CONTINUATION STATEMENT',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'UCC FILINGS',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    },
    {
      instrument: 'UCC TERMINATION STATEMENT',
      requirements: [
        { label: 'Party Count', path: 'partyCount', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'Transfer Tax', path: 'transferTaxAmount', required: 'IF_AVAILABLE', type: 'DECIMAL' },
        { label: 'Title Count', path: 'numberOfTitles', required: 'IF_AVAILABLE', type: 'INTEGER' },
        { label: 'SB2 Fee Exempt', path: 'filed', required: 'IF_AVAILABLE', type: 'BOOLEAN' }
      ]
    }
  ]
};

// --- Prince George's County shared sub-field definitions ---

const PARTY_FIELDS: Requirement[] = [
  { label: 'Type', path: 'type', required: 'ALWAYS', type: 'ENUM' },
  { label: 'Name (Organization)', path: 'nameUnparsed', required: 'ALWAYS', type: 'STRING' },
  { label: 'First', path: 'firstName', required: 'ALWAYS', type: 'STRING' },
  { label: 'Middle', path: 'middleName', required: 'NOT_REQUIRED', type: 'STRING' },
  { label: 'Last', path: 'lastName', required: 'ALWAYS', type: 'STRING' },
  { label: 'Suffix', path: 'nameSuffix', required: 'NOT_REQUIRED', type: 'STRING' },
  { label: 'Role', path: 'capacity', required: 'IF_AVAILABLE', type: 'ENUM' }
];

const REFERENCE_INFO_FIELDS: Requirement[] = [
  { label: 'Book', path: 'book', required: 'ALWAYS', type: 'STRING' },
  { label: 'Page', path: 'page', required: 'ALWAYS', type: 'STRING' }
];

const LEGAL_DESCRIPTION_FIELDS: Requirement[] = [
  { label: 'District', path: 'blockNumber', required: 'ALWAYS', type: 'INTEGER' },
  { label: 'Property ID', path: 'parcelId', required: 'ALWAYS', type: 'STRING' },
  { label: 'Premise Address', path: 'addressStreet', required: 'ALWAYS', type: 'STRING' },
  { label: 'City', path: 'addressCity', required: 'ALWAYS', type: 'STRING' },
  { label: 'State', path: 'addressState', required: 'ALWAYS', type: 'ENUM' },
  { label: 'Zip', path: 'addressZip', required: 'ALWAYS', type: 'STRING' }
];

export const PRINCE_GEORGES_DATA: CountyData = {
  instruments: [
    {
      instrument: 'DEED OF TRUST',
      requirements: [
        { label: 'Grantors', path: 'grantors[]', required: 'ALWAYS', type: 'ARRAY', fields: PARTY_FIELDS },
        { label: 'Grantees', path: 'grantees[]', required: 'ALWAYS', type: 'ARRAY', fields: PARTY_FIELDS },
        { label: 'Consideration', path: 'consideration', required: 'ALWAYS', type: 'CURRENCY' },
        { label: 'County Recordation Tax Exempt', path: 'countyRecordationExempt', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'County Transfer Tax Exempt', path: 'countyTransferExempt', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Loan Amount', path: 'mortgageConsideration', required: 'ALWAYS', type: 'CURRENCY' },
        { label: "Document states 'Purchase Money Mortgage'", path: 'documentStatesPurchaseMoney', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Reference Information', path: 'referenceInformation[]', required: 'ALWAYS', type: 'ARRAY', fields: REFERENCE_INFO_FIELDS },
        { label: 'Legal Description', path: 'legalDescriptions[]', required: 'ALWAYS', type: 'ARRAY', fields: LEGAL_DESCRIPTION_FIELDS },
        { label: 'Principal Residence', path: 'principalResidence', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Purchase Money Deed of Trust on record over 12 months', path: 'purchaseMoneyOnDeedOfTrust', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'This is a re-recording', path: 'rerecord', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Comments', path: 'comments', required: 'NOT_REQUIRED', type: 'STRING' },
        { label: 'Supporting Documents', required: 'IF_AVAILABLE', type: 'HELPER_DOCUMENT' }
      ]
    },
    {
      instrument: 'DEED OF TRUST/MORTGAGE - REFINANCE',
      requirements: [
        { label: 'Grantors', path: 'grantors[]', required: 'ALWAYS', type: 'ARRAY', fields: PARTY_FIELDS },
        { label: 'Grantees', path: 'grantees[]', required: 'ALWAYS', type: 'ARRAY', fields: PARTY_FIELDS },
        { label: 'County Recordation Tax Exempt', path: 'countyRecordationExempt', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'County Transfer Tax Exempt', path: 'countyTransferExempt', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Loan Amount', path: 'mortgageConsideration', required: 'ALWAYS', type: 'CURRENCY' },
        { label: 'Reference Information', path: 'referenceInformation[]', required: 'ALWAYS', type: 'ARRAY', fields: REFERENCE_INFO_FIELDS },
        { label: 'Previous Loan', path: 'previousLoanAmount', required: 'ALWAYS', type: 'CURRENCY' },
        { label: 'Unpaid Principal Balance', path: 'unpaidPrincipal', required: 'ALWAYS', type: 'CURRENCY' },
        { label: 'Taxable Amount', path: 'taxableAmount', required: 'ALWAYS', type: 'CURRENCY' },
        { label: 'Legal Description', path: 'legalDescriptions[]', required: 'ALWAYS', type: 'ARRAY', fields: LEGAL_DESCRIPTION_FIELDS },
        { label: 'Principal Residence', path: 'principalResidence', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Purchase Money Deed of Trust on record over 12 months', path: 'purchaseMoneyOnDeedOfTrust', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'This is a re-recording', path: 'rerecord', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Comments', path: 'comments', required: 'NOT_REQUIRED', type: 'STRING' },
        { label: 'Supporting Documents', required: 'IF_AVAILABLE', type: 'HELPER_DOCUMENT' }
      ]
    },
    {
      instrument: 'DEED OF TRUST/MORTGAGE MODIFICATION AGREEMENT',
      requirements: [
        { label: 'Grantors', path: 'grantors[]', required: 'ALWAYS', type: 'ARRAY', fields: PARTY_FIELDS },
        { label: 'Grantees', path: 'grantees[]', required: 'ALWAYS', type: 'ARRAY', fields: PARTY_FIELDS },
        { label: 'County Recordation Tax Exempt', path: 'countyRecordationExempt', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'County Transfer Tax Exempt', path: 'countyTransferExempt', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'New Mortgage', path: 'mortgageConsideration', required: 'ALWAYS', type: 'CURRENCY' },
        { label: 'Reference Information', path: 'referenceInformation[]', required: 'ALWAYS', type: 'ARRAY', fields: REFERENCE_INFO_FIELDS },
        { label: 'Previous Loan', path: 'previousLoanAmount', required: 'ALWAYS', type: 'CURRENCY' },
        { label: 'Unpaid Principal Balance', path: 'unpaidPrincipal', required: 'ALWAYS', type: 'CURRENCY' },
        { label: 'Taxable Amount', path: 'taxableAmount', required: 'ALWAYS', type: 'CURRENCY' },
        { label: 'Legal Description', path: 'legalDescriptions[]', required: 'ALWAYS', type: 'ARRAY', fields: LEGAL_DESCRIPTION_FIELDS },
        { label: 'Principal Residence', path: 'principalResidence', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Purchase Money Deed of Trust on record over 12 months', path: 'purchaseMoneyOnDeedOfTrust', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'This is a re-recording', path: 'rerecord', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Comments', path: 'comments', required: 'NOT_REQUIRED', type: 'STRING' },
        { label: 'Supporting Documents', required: 'IF_AVAILABLE', type: 'HELPER_DOCUMENT' }
      ]
    },
    {
      instrument: 'QUIT CLAIM DEED',
      requirements: [
        { label: 'Grantor Qualifies for Maryland Residency Exemption', path: 'grantorIsMarylandResident', required: 'ALWAYS', type: 'BOOLEAN' },
        { label: 'Grantors', path: 'grantors[]', required: 'ALWAYS', type: 'ARRAY', fields: PARTY_FIELDS },
        { label: 'Grantees', path: 'grantees[]', required: 'ALWAYS', type: 'ARRAY', fields: PARTY_FIELDS },
        { label: 'Consideration', path: 'consideration', required: 'ALWAYS', type: 'CURRENCY' },
        { label: 'Property Tax', path: 'propertyTaxAmount', required: 'IF_AVAILABLE', type: 'CURRENCY' },
        { label: 'State Transfer Tax Exempt', path: 'stateTransferExempt', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'County Recordation Tax Exempt', path: 'countyRecordationExempt', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'County Transfer Tax Exempt', path: 'countyTransferExempt', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Legal Description', path: 'legalDescriptions[]', required: 'ALWAYS', type: 'ARRAY', fields: LEGAL_DESCRIPTION_FIELDS },
        { label: 'Principal Residence', path: 'principalResidence', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'First Time Home Buyer', path: 'firstTimeHomeBuyer', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Owner Occupied', path: 'ownerOccupied', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Completed Certificate of Preparation Included', path: 'certificateOfPreparationCompleted', required: 'ALWAYS', type: 'BOOLEAN' },
        { label: 'This is a re-recording', path: 'rerecord', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Comments', path: 'comments', required: 'NOT_REQUIRED', type: 'STRING' },
        { label: 'Supporting Documents', required: 'IF_AVAILABLE', type: 'HELPER_DOCUMENT' }
      ]
    },
    {
      instrument: 'MORTGAGE',
      requirements: [
        { label: 'Grantors', path: 'grantors[]', required: 'ALWAYS', type: 'ARRAY', fields: PARTY_FIELDS },
        { label: 'Grantees', path: 'grantees[]', required: 'ALWAYS', type: 'ARRAY', fields: PARTY_FIELDS },
        { label: 'Consideration', path: 'consideration', required: 'ALWAYS', type: 'CURRENCY' },
        { label: 'County Recordation Tax Exempt', path: 'countyRecordationExempt', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'County Transfer Tax Exempt', path: 'countyTransferExempt', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Loan Amount', path: 'mortgageConsideration', required: 'ALWAYS', type: 'CURRENCY' },
        { label: "Document states 'Purchase Money Mortgage'", path: 'documentStatesPurchaseMoney', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Legal Description', path: 'legalDescriptions[]', required: 'ALWAYS', type: 'ARRAY', fields: LEGAL_DESCRIPTION_FIELDS },
        { label: 'Principal Residence', path: 'principalResidence', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Purchase Money Deed of Trust on record over 12 months', path: 'purchaseMoneyOnDeedOfTrust', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'This is a re-recording', path: 'rerecord', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Comments', path: 'comments', required: 'NOT_REQUIRED', type: 'STRING' }
      ]
    },
    {
      instrument: 'POWER OF ATTORNEY',
      requirements: [
        { label: 'Grantors', path: 'grantors[]', required: 'ALWAYS', type: 'ARRAY', fields: PARTY_FIELDS },
        { label: 'Grantees', path: 'grantees[]', required: 'ALWAYS', type: 'ARRAY', fields: PARTY_FIELDS },
        { label: 'Legal Description', path: 'legalDescriptions[]', required: 'ALWAYS', type: 'ARRAY', fields: LEGAL_DESCRIPTION_FIELDS },
        { label: 'Principal Residence', path: 'principalResidence', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'This is a re-recording', path: 'rerecord', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Comments', path: 'comments', required: 'NOT_REQUIRED', type: 'STRING' }
      ]
    },
    {
      instrument: 'ASSIGNMENT OF DEED OF TRUST',
      requirements: [
        { label: 'Grantors', path: 'grantors[]', required: 'ALWAYS', type: 'ARRAY', fields: PARTY_FIELDS },
        { label: 'Grantees', path: 'grantees[]', required: 'ALWAYS', type: 'ARRAY', fields: PARTY_FIELDS },
        { label: 'Reference Information', path: 'referenceInformation[]', required: 'ALWAYS', type: 'ARRAY', fields: REFERENCE_INFO_FIELDS },
        { label: 'Principal Residence', path: 'principalResidence', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'This is a re-recording', path: 'rerecord', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Comments', path: 'comments', required: 'NOT_REQUIRED', type: 'STRING' },
        { label: 'Supporting Documents', required: 'IF_AVAILABLE', type: 'HELPER_DOCUMENT' }
      ]
    },
    {
      instrument: 'AGREEMENT',
      requirements: [
        { label: 'Grantors', path: 'grantors[]', required: 'ALWAYS', type: 'ARRAY', fields: PARTY_FIELDS },
        { label: 'Grantees', path: 'grantees[]', required: 'ALWAYS', type: 'ARRAY', fields: PARTY_FIELDS },
        { label: 'Consideration', path: 'consideration', required: 'ALWAYS', type: 'CURRENCY' },
        { label: 'State Transfer Tax Exempt', path: 'stateTransferExempt', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'County Recordation Tax Exempt', path: 'countyRecordationExempt', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'County Transfer Tax Exempt', path: 'countyTransferExempt', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Principal Residence', path: 'principalResidence', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'This is a re-recording', path: 'rerecord', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Comments', path: 'comments', required: 'NOT_REQUIRED', type: 'STRING' }
      ]
    },
    {
      instrument: 'TERMINATIONS',
      requirements: [
        { label: 'Grantors', path: 'grantors[]', required: 'ALWAYS', type: 'ARRAY', fields: PARTY_FIELDS },
        { label: 'Grantees', path: 'grantees[]', required: 'ALWAYS', type: 'ARRAY', fields: PARTY_FIELDS },
        { label: 'Reference Information', path: 'referenceInformation[]', required: 'ALWAYS', type: 'ARRAY', fields: REFERENCE_INFO_FIELDS },
        { label: 'Legal Description', path: 'legalDescriptions[]', required: 'ALWAYS', type: 'ARRAY', fields: LEGAL_DESCRIPTION_FIELDS },
        { label: 'Principal Residence', path: 'principalResidence', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'This is a re-recording', path: 'rerecord', required: 'IF_AVAILABLE', type: 'BOOLEAN' },
        { label: 'Comments', path: 'comments', required: 'NOT_REQUIRED', type: 'STRING' },
        { label: 'Supporting Documents', required: 'IF_AVAILABLE', type: 'HELPER_DOCUMENT' }
      ]
    }
  ]
};

// Map of county key -> county data, extensible for future counties
export const COUNTY_DATA_MAP: Record<string, CountyData> = {
  'san-diego-county': SAN_DIEGO_DATA,
  'prince-georges-county': PRINCE_GEORGES_DATA
};
