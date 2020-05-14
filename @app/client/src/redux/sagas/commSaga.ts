import { VariablesAreInputTypes } from "graphql/validation/rules/VariablesAreInputTypes";
import { any, number } from "prop-types";
import { call } from "redux-saga/effects";

import { createMutationType } from "../../__generatedFromBackend__/psqlmutations/getCreateMutation";
import {
  psqlCallEnums,
  psqlCalls,
  psqlCallTypes,
} from "../../functions/__generatedFromBackend__/calltypesEnums";
import { DbTables } from "../../functions/__generatedFromBackend__/tableEnums";
import comC from "../../functions/controllers/commControl";

const commControl = new comC();

///////////////////////

export function* createMutation(args: {
  tableKey: any;
  variables: any;
  queryId: any;
}) {
  const { tableKey, variables, queryId } = args;
  try {
    const graphqlresponse = yield call(commControl.psqlCreateMutation, {
      tableKey,
      variables,
    });
    console.log(
      `graphql response from commSaga.ts createTable() queryId: ${queryId}: `,
      graphqlresponse
    );
    return graphqlresponse;
  } catch (err) {
    console.log(
      `Error in commSaga.ts createTable() queryId: ${queryId}: `,
      err
    );
  }
}

export function* updateMutation(args: {
  tableKey: any;
  variables: any;
  queryId: any;
}) {
  const { tableKey, variables, queryId } = args;
  try {
    const graphqlresponse = yield call(commControl.psqlUpdateMutation, {
      tableKey,
      variables,
    });
    console.log(
      `graphql response from commSaga.ts updateTable() queryId: ${queryId}: `,
      graphqlresponse
    );
    return graphqlresponse;
  } catch (err) {
    console.log(
      `Error in commSaga.ts updateTable() queryId: ${queryId}: `,
      err
    );
  }
}

export function* deleteMutation(args: {
  tableKey: any;
  variables: any;
  queryId: any;
}) {
  const { tableKey, variables, queryId } = args;
  try {
    const graphqlresponse = yield call(commControl.psqlDeleteMutation, {
      tableKey,
      variables,
    });
    console.log(
      `graphql response from commSaga.ts deleteTable() queryId: ${queryId}: `,
      graphqlresponse
    );
    return graphqlresponse;
  } catch (err) {
    console.log(
      `Error in commSaga.ts deleteTable() queryId: ${queryId}: `,
      err
    );
  }
}

export function* idQuery(args: {
  tableKey: any;
  variables: any;
  queryId: any;
}) {
  const { tableKey, variables, queryId } = args;
  try {
    const graphqlresponse = yield call(commControl.psqlIdQuery, {
      tableKey,
      variables,
    });
    console.log(
      `graphql response from commSaga.ts queryTableByqueryId() queryId: ${queryId}: `,
      graphqlresponse
    );
    return graphqlresponse;
  } catch (err) {
    console.log(
      `Error in commSaga.ts queryTableByqueryId() queryId: ${queryId}: `,
      err
    );
  }
}

export function* nodeQuery(args: {
  tableKey: any;
  variables: any;
  queryId: any;
}) {
  const { tableKey, variables, queryId } = args;
  try {
    const graphqlresponse = yield call(commControl.psqlNodeQuery, {
      tableKey,
      variables,
    });
    console.log(
      `graphql response from commSaga.ts queryTableByNode() queryId: ${queryId}: `,
      graphqlresponse
    );
    return graphqlresponse;
  } catch (err) {
    console.log(
      `Error in commSaga.ts queryTableByNode() queryId: ${queryId}: `,
      err
    );
  }
}

export function* agencyQuery(args: {
  tableKey: any;
  variables: any;
  queryId: any;
}) {
  const { tableKey, variables, queryId } = args;
  try {
    const graphqlresponse = yield call(commControl.psqlAgencyQuery, {
      tableKey,
      variables,
    });
    console.log(
      `graphql response from commSaga.ts queryTableByAgency() queryId: ${queryId}: `,
      graphqlresponse
    );
    return graphqlresponse;
  } catch (err) {
    console.log(
      `Error in commSaga.ts queryTableByAgency() queryId: ${queryId}: `,
      err
    );
  }
}

export function* conditionalQuery(args: {
  tableKey: any;
  variables: any;
  queryId: any;
}) {
  const { tableKey, variables, queryId } = args;
  try {
    const graphqlresponse = yield call(commControl.psqlConditionedQuery, {
      tableKey,
      variables,
    });
    console.log(
      `graphql response from commSaga.ts queryTableConditioned() queryId: ${queryId}: `,
      graphqlresponse
    );
    return graphqlresponse;
  } catch (err) {
    console.log(
      `Error in commSaga.ts queryTableConditioned() queryId: ${queryId}: `,
      err
    );
  }
}
//////////////////////////

// export function* createTable(tableName, variables, userqueryId) {

//     try {
//       const tableKey = DbTables.agency
//       type variablesType = Pick<createMutationType, typeof tableKey>
//       const variables: variablesType = {
//           agency: {
//               activeInsurance: true,
//               createdByqueryId: userqueryId,
//               isRomanian: true,
//           },
//       }
//       const graphqlresponse = yield call(commControl.psqlCreateMutation, {
//           tableKey,
//           variables,
//       })
//       console.log(
//           'graphql response from psqlMutation in Saga:* is: ',
//           graphqlresponse
//       )
//   } catch (err) {
//       console.log('Saga:* Error, psqlMutation:', err)
//   }
//    }
