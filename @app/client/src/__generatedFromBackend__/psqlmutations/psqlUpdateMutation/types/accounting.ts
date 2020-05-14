export interface accountingupdateMutationType {
id: number;
paymentHistory?: string[];
lastPayment?: string;
lastPaymentAmount?: string;
abonamentExpires?: string;
freePeriodExpires?: string;
isRomanian?: boolean;
isActive?: boolean;
}
