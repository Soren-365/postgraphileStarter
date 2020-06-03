import { accountDbType as objAccount } from '../../../dbTypes/__generatedFromBackend__/types/accountDbType'

import { Account  as gqlAccount } from '*.graphqls'


export const AccountTransform = (raw: gqlAccount): objAccount => {
    return {
         id: raw.id, emailHash: raw.emailHash, passwordHash: raw.passwordHash, sessionId: raw.sessionId, logins: raw.logins
    }
}

// if editing the transform, make a manual AccountClassType instead of the line below
export type AccountClassType = objAccount