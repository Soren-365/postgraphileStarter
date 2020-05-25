export interface accountingDbType {
id?: number;
publisherId: number;
paymentHistory?: string[];
abonamentActive: boolean;
lastPayment?: string;
lastPaymentAmount?: string;
abonamentExpires?: string;
onYearlyPayment: boolean;
onFreePeriod: boolean;
freePeriodExpires?: string;
isRomanian?: boolean;
isActive?: boolean;
timeCreated?: string;
 nodeId?: string;
}
