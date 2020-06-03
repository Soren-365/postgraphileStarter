import { call } from "redux-saga/effects";

import { area } from "../../__generatedFromBackend__/enums/area";
import { judet } from "../../__generatedFromBackend__/enums/judet";
import { createMutationType } from "../../__generatedFromBackend__/psqlmutations/getCreateMutation";
import { updateMutationType } from "../../__generatedFromBackend__/psqlmutations/getUpdateMutation";
import { agencyDbType } from "../../dexie/dbTypes/__generatedFromBackend__/types/agencyDbType";
import {
  psqlCallEnums,
  psqlCalls,
  psqlCallTypes,
} from "../../functions/__generatedFromBackend__/calltypesEnums";
import { DbTables } from "../../functions/__generatedFromBackend__/tableEnums";
import { DbTablesI } from "../../functions/__generatedFromBackend__/tableInterface";

///////Create Agency if Userlogin returned no agency///////////////////
export function* initCreateAgency(userId: number) {
  {
    // 1): change tableKey ...
    // 2): change callType ...
    // 3): change variables. Enjoy typelinting on graphql calls
    // 4): change queryId

    const tableKey = DbTables.assochost;
    const callType = psqlCallEnums.updateMutation;
    interface argsType {
      tableKey: DbTables;
      variables: Pick<psqlCallTypes[typeof callType], typeof tableKey>;
      queryId: string;
    }

    const args: argsType = {
      tableKey: tableKey,
      variables: {
        [tableKey]: {
     assocHostId: [3],
     atAgency: 7,
     hostId: 8,
     timeCreated: '30292011T06:06:05'

        },
      },
      queryId: "initCreateAgency",
    };
    const tableDataPre: { [tableKey]: object } = yield call(
      psqlCalls[callType],
      args
    );
    const tableData = tableDataPre[tableKey];
    return { tableKey, tableData };
  }
}

//--

///////Create Agency if Userlogin returned no agency///////////////////
export function* initGetAgencyData(agencyId: number) {
  {
    // 0): change function name and queryId
    // 1): change tableKey ...
    // 2): change callType ...
    // 3): change variables. Enjoy typelinting on graphql calls

    const tableKey = DbTables.roomcalendar;
    const callType = psqlCallEnums.idQuery;
    interface argsType {
      tableKey: DbTables;
      variables: Pick<psqlCallTypes[typeof callType], typeof tableKey>;
      queryId: string;
    }

    const args: argsType = {
      tableKey: tableKey,
      variables: {
        [tableKey]: {
          id: agencyId,
        },
      },
      queryId: "initGetAgencyData",
    };
    const tableDataPre: { [tableKey]: object } = yield call(
      psqlCalls[callType],
      args
    );
    const tableData = tableDataPre[tableKey];
    return { tableKey, tableData };
  }
}

//--
