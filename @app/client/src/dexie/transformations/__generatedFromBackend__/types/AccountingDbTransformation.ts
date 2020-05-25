import { accountingDbType as objAccounting } from '../../../dbTypes/__generatedFromBackend__/types/accountingDbType'

import { Accounting  as gqlAccounting } from '*.graphqls'


export const AccountingTransform = (raw: gqlAccounting): objAccounting => {
    return {
         id: raw.id, publisherId: raw.publisherId, paymentHistory: raw.paymentHistory, abonamentActive: raw.abonamentActive, lastPayment: raw.lastPayment, lastPaymentAmount: raw.lastPaymentAmount, abonamentExpires: raw.abonamentExpires, onYearlyPayment: raw.onYearlyPayment, onFreePeriod: raw.onFreePeriod, freePeriodExpires: raw.freePeriodExpires, isRomanian: raw.isRomanian, isActive: raw.isActive, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual AccountingClassType instead of the line below
export type AccountingClassType = objAccounting