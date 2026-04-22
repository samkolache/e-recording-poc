import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { COUNTY_DATA_MAP, Instrument } from '../../data/county-requirements';

const COUNTY_OPTIONS: { state: string; key: string; label: string }[] = [
  { state: 'CA', key: 'san-diego-county', label: 'San Diego County' },
  { state: 'MD', key: 'prince-georges-county', label: "Prince George's County" }
];

export interface PartyEntry {
  type: 'Individual' | 'Organization' | '';
  nameUnparsed: string;
  firstName: string;
  middleName: string;
  lastName: string;
  nameSuffix: string;
  capacity: string;
  aiSuggestedLastName?: string;
}

const PARTY_ROLES = ['POWER OF ATTORNEY', 'PERSONAL REPRESENTATIVE', 'SUBSTITUTE TRUSTEE'];

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','GU','HI','ID','IL','IN',
  'IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','PR','RI','SC','SD','TN','TX','UT','VT',
  'VA','VI','WA','WV','WI','WY'
];

const LEGAL_DESC_MAX = 5;

export interface LegalDescEntry {
  blockNumber: string;
  parcelId: string;
  addressStreet: string;
  addressCity: string;
  addressState: string;
  addressZip: string;
}

function newPartyEntry(): PartyEntry {
  return { type: 'Individual', nameUnparsed: 'Smith Holdings LLC', firstName: 'John', middleName: 'A', lastName: 'Smith', nameSuffix: 'Jr', capacity: 'POWER OF ATTORNEY', aiSuggestedLastName: 'Smith' };
}

export interface RefInfoEntry {
  book: string;
  page: string;
}

function newLegalDescEntry(state = 'MD'): LegalDescEntry {
  const isCa = state === 'CA';
  return {
    blockNumber: '05',
    parcelId: isCa ? '2187634' : '1234567',
    addressStreet: isCa ? '4821 Pacific Coast Hwy' : '1234 Main St',
    addressCity: isCa ? 'San Diego' : 'Silver Spring',
    addressState: state || 'MD',
    addressZip: isCa ? '92101' : '20901'
  };
}

function newRefInfoEntry(): RefInfoEntry {
  return { book: '12345', page: '0123' };
}

@Component({
  selector: 'app-e-recording-review-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './e-recording-review-card.component.html',
  styleUrl: './e-recording-review-card.component.scss'
})
export class ERecordingReviewCardComponent implements OnInit {
  @Input() presetState = '';
  @Input() presetCounty = '';
  @Input() docTabs: string[] = [];

  selectDocTab(tab: string): void {
    this.selectedDocType = tab;
    this.onDocTypeChange();
  }

  @Output() sourceClicked = new EventEmitter<number>();

  ngOnInit(): void {
    if (this.presetState) this.selectedState = this.presetState;
    if (this.presetCounty) this.selectedCounty = this.presetCounty;
    if (this.docTabs.length > 0) {
      this.selectedDocType = this.docTabs[0];
      this.onDocTypeChange();
    }
    this.initPrefillDefaults();
  }

  private initPrefillDefaults(): void {
    this.docName = `${this.selectedDocType || 'Document'} - Order 2004749186`;

    this.currencyValues = {
      consideration: '425,000.00',
      mortgageConsideration: '425,000.00',
      propertyTaxAmount: '2,400.00',
      previousLoanAmount: '350,000.00',
      unpaidPrincipal: '348,500.00',
      taxableAmount: '76,500.00',
      newMortgage: '425,000.00'
    };

    this.booleanValues = {
      countyRecordationExempt: 'no',
      countyTransferExempt: 'no',
      documentStatesPurchaseMoney: 'no',
      principalResidence: 'yes',
      purchaseMoneyOnDeedOfTrust: 'no',
      rerecord: 'no',
      grantorIsMarylandResident: 'yes',
      stateTransferExempt: 'no',
      firstTimeHomeBuyer: 'no',
      ownerOccupied: 'yes',
      certificateOfPreparationCompleted: 'yes',
      sb2FeeExempt: 'no',
      transferTaxExempt: 'no'
    };

    this.stringValues = {
      comments: 'Standard recording — no special instructions.'
    };
  }

  onSourceClick(event: Event): void {
    event.preventDefault();
    this.sourceClicked.emit(2);
  }

  selectedState = 'MD';
  selectedCounty = 'prince-georges-county';
  selectedDocType = COUNTY_DATA_MAP['san-diego-county'].instruments[0].instrument;
  selectedAccount = '1';
  packageName = 'PKG-2004749186-01';
  docName = '';
  partyCount = 2;
  aiSuggestedPartyCount = 2;
  transferTax = '1,250.00';
  titleCount = 1;
  currencyValues: Record<string, string> = {};
  booleanValues: Record<string, string> = {};
  stringValues: Record<string, string> = {};
  helperDocFiles: Record<string, string[]> = {};
  partyArrays: Record<string, PartyEntry[]> = {};
  legalDescArrays: Record<string, LegalDescEntry[]> = {};
  refInfoArrays: Record<string, RefInfoEntry[]> = {};
  readonly partyRoles = PARTY_ROLES;
  readonly usStates = US_STATES;
  readonly legalDescMax = LEGAL_DESC_MAX;

  get countyOptions() {
    return COUNTY_OPTIONS.filter(c => c.state === this.selectedState);
  }

  get docTypeOptions(): string[] {
    const data = COUNTY_DATA_MAP[this.selectedCounty];
    return data ? data.instruments.map((i: Instrument) => i.instrument) : [];
  }

  get currentRequirements() {
    const data = COUNTY_DATA_MAP[this.selectedCounty];
    if (!data || !this.selectedDocType) return [];
    const match = data.instruments.find((i: Instrument) => i.instrument === this.selectedDocType);
    return match ? match.requirements : [];
  }

  hasField(label: string): boolean {
    return this.currentRequirements.some(r => r.label === label);
  }

  get booleanRequirements() {
    return this.currentRequirements.filter(r => r.type === 'BOOLEAN');
  }

  get currencyRequirements() {
    return this.currentRequirements.filter(r => r.type === 'CURRENCY');
  }

  get stringRequirements() {
    return this.currentRequirements.filter(r => r.type === 'STRING');
  }

  get helperDocRequirements() {
    return this.currentRequirements.filter(r => r.type === 'HELPER_DOCUMENT');
  }

  get partyArrayRequirements() {
    return this.currentRequirements.filter(
      r => r.type === 'ARRAY' && (r.path === 'grantors[]' || r.path === 'grantees[]')
    );
  }

  get refInfoRequirements() {
    return this.currentRequirements.filter(r => r.type === 'ARRAY' && r.path === 'referenceInformation[]');
  }

  getRefInfoEntries(path: string): RefInfoEntry[] {
    if (!this.refInfoArrays[path]) {
      this.refInfoArrays[path] = [newRefInfoEntry()];
    }
    return this.refInfoArrays[path];
  }

  addRefInfoEntry(path: string): void {
    this.getRefInfoEntries(path).push(newRefInfoEntry());
  }

  removeRefInfoEntry(path: string, index: number): void {
    this.refInfoArrays[path].splice(index, 1);
  }

  get legalDescRequirements() {
    return this.currentRequirements.filter(r => r.type === 'ARRAY' && r.path === 'legalDescriptions[]');
  }

  getLegalDescEntries(path: string): LegalDescEntry[] {
    if (!this.legalDescArrays[path]) {
      this.legalDescArrays[path] = [newLegalDescEntry(this.selectedState)];
    }
    return this.legalDescArrays[path];
  }

  addLegalDescEntry(path: string): void {
    const entries = this.getLegalDescEntries(path);
    if (entries.length < LEGAL_DESC_MAX) {
      entries.push(newLegalDescEntry());
    }
  }

  removeLegalDescEntry(path: string, index: number): void {
    this.legalDescArrays[path].splice(index, 1);
  }

  getPartyEntries(path: string): PartyEntry[] {
    if (!this.partyArrays[path]) {
      this.partyArrays[path] = [newPartyEntry()];
    }
    return this.partyArrays[path];
  }

  addPartyEntry(path: string): void {
    this.getPartyEntries(path).push(newPartyEntry());
  }

  removePartyEntry(path: string, index: number): void {
    this.partyArrays[path].splice(index, 1);
  }

  onStateChange(): void {
    this.selectedCounty = '';
    this.selectedDocType = '';
    this.helperDocFiles = {};
    this.partyArrays = {};
    this.legalDescArrays = {};
    this.refInfoArrays = {};
  }

  onCountyChange(): void {
    this.selectedDocType = '';
    this.helperDocFiles = {};
    this.partyArrays = {};
    this.legalDescArrays = {};
    this.refInfoArrays = {};
  }

  onDocTypeChange(): void {
    this.helperDocFiles = {};
    this.partyArrays = {};
    this.legalDescArrays = {};
    this.refInfoArrays = {};
  }

  onHelperDocSelected(label: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    const names = Array.from(input.files ?? []).map(f => f.name);
    if (!this.helperDocFiles[label]) this.helperDocFiles[label] = [];
    this.helperDocFiles[label].push(...names);
    input.value = '';
  }

  removeHelperDoc(label: string, index: number): void {
    this.helperDocFiles[label].splice(index, 1);
  }
}
