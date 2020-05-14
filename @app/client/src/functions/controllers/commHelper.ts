import { call, put } from 'redux-saga/effects'
import { AgencyQueryType, ConditionedQueryType,CreateMutationType, DeleteMutationType, IdQueryType, MutationType, NodeQueryType, UpdateMutationType } from 'src/functions/controllers/commControl'

import { psqlcreateMutation } from '../../functions/fetch/graphql/psqlcreateMutation'
import { psqldeleteMutation } from '../../functions/fetch/graphql/psqldeleteMutation'
import { psqlupdateMutation } from '../../functions/fetch/graphql/psqlupdateMutation'
import { mutation } from '../../functions/fetch/mutation'
import { API } from '../../redux/types/types'
import { psqlagencyQuery } from '../fetch/graphql/psqlagencyQuery'
import { psqlconditionedQuery } from '../fetch/graphql/psqlconditionedQuery'
import { psqlidQuery } from '../fetch/graphql/psqlidQuery'
import { psqlnodeQuery } from '../fetch/graphql/psqlnodeQuery'


export function* psqlMutation ({
    mutationType,
    tableKey,
    variables,
}: MutationType) {
    try {
        console.log('COMMCONTROL, input: mutationType, tableKey, variables:', mutationType, tableKey, variables)
        const args = { mutationType, tableKey, variables}
        const response: any = yield call(mutation, args)
        console.log(
            'response from psqlMutation( query, atAgency)',
            response
        )
        yield put({
            type: API.MUTATE_PGDB_SUCCESS,
            message: `success In commHelper psqlMutation(), response: ${response.data}`,
        })
        return response.data
    } catch (error) {
        yield put({
            type: API.MUTATE_PGDB_ERROR,
            message: `error In commHelper psqlMutation() ${error}`,
        })
    }
}

export function* psqlUpdateMutation ({
    tableKey,
    variables,
}: UpdateMutationType) {
    try {
        console.log('COMMCONTROL, input: tableKey, variables:', tableKey, variables)
        const args = { tableKey, variables}
        const response: any = yield call(psqlupdateMutation, args)
        yield put({
            type: API.MUTATE_PGDB_SUCCESS,
            message: `success In commHelper psqlUpdateMutation(), response: ${response.data}`,
        })
        return response.data
    } catch (error) {
        yield put({
            type: API.MUTATE_PGDB_ERROR,
            message: `error In commHelper psqlUpdateMutation() ${error}`,
        })
    }
}


export function* psqlCreateMutation ({
    tableKey,
    variables,
}: CreateMutationType) {
    try {
        console.log('COMMCONTROL, input: tableKey, variables:', tableKey, variables)
        const args = { tableKey, variables}
        const response: any = yield call(psqlcreateMutation, args)
        yield put({
            type: API.MUTATE_PGDB_SUCCESS,
            message: `success In commHelper psqlCreateMutation(), response: ${response.data}`,
        })
        return response.data
    } catch (error) {
        yield put({
            type: API.MUTATE_PGDB_ERROR,
            message: `error In commHelper psqlCreateMutation() ${error}`,
        })
    }
}

export function* psqlDeleteMutation ({
    tableKey,
    variables,
}: DeleteMutationType) {
    try {
        console.log('COMMCONTROL, input: tableKey, variables:', tableKey, variables)
        const args = { tableKey, variables}
        const response: any = yield call(psqldeleteMutation, args)
        yield put({
            type: API.MUTATE_PGDB_SUCCESS,
            message: `success In commHelper psqlDeleteMutation(), response: ${response.data}`,
        })
        return response.data
    } catch (error) {
        yield put({
            type: API.MUTATE_PGDB_ERROR,
            message: `error In commHelper psqlDeleteMutation() ${error}`,
        })
    }
}

export function* psqlIdQuery ({
    tableKey,
    variables,
}: IdQueryType) {
    try {
        console.log('COMMCONTROL, input: tableKey, variables:', tableKey, variables)
        const args = { tableKey, variables}
        const response: any = yield call(psqlidQuery, args)
        yield put({
            type: API.QUERY_PGDB_SUCCESS,
            message: `success In commHelper psqlIdQuery(), response: ${response.data}`,
        })
        return response.data
    } catch (error) {
        yield put({
            type: API.QUERY_PGDB_ERROR,
            message: `error In commHelper psqlIdQuery() ${error}`,
        })
    }
}

export function* psqlNodeQuery ({
    tableKey,
    variables,
}: NodeQueryType) {
    try {
        console.log('COMMCONTROL, input: tableKey, variables:', tableKey, variables)
        const args = { tableKey, variables}
        const response: any = yield call(psqlnodeQuery, args)
        yield put({
            type: API.QUERY_PGDB_SUCCESS,
            message: `success In commHelper psqlNodeQuery(), response: ${response.data}`,
        })
        return response.data
    } catch (error) {
        yield put({
            type: API.QUERY_PGDB_ERROR,
            message: `error In commHelper psqlNodeQuery() ${error}`,
        })
    }
}

export function* psqlAgencyQuery ({
    tableKey,
    variables,
}: AgencyQueryType) {
    try {
        console.log('COMMCONTROL, input: tableKey, variables:', tableKey, variables)
        const args = { tableKey, variables}
        const response: any = yield call(psqlagencyQuery, args)
        yield put({
            type: API.QUERY_PGDB_SUCCESS,
            message: `success In commHelper psqlAgencyQuery(), response: ${response.data}`,
        })
        return response.data
    } catch (error) {
        yield put({
            type: API.QUERY_PGDB_ERROR,
            message: `error In commHelper psqlAgencyQuery() ${error}`,
        })
    }
}

export function* psqlConditionedQuery ({
    tableKey,
    variables,
}: ConditionedQueryType) {
    try {
        console.log('COMMCONTROL, input: tableKey, variables:', tableKey, variables)
        const args = { tableKey, variables}
        const response: any = yield call(psqlconditionedQuery, args)
        yield put({
            type: API.QUERY_PGDB_SUCCESS,
            message: `success In commHelper psqlConditionedQuery(), response: ${response.data}`,
        })
        return response.data
    } catch (error) {
        yield put({
            type: API.QUERY_PGDB_ERROR,
            message: `error In commHelper psqlConditionedQuery() ${error}`,
        })
    }
}
