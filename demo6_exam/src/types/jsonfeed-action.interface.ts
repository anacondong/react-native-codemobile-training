import {JSON_FETCHING, JSON_SUCCESS, JSON_FAILED} from '../constants/Constants';

export interface JsonFetching {
  type: typeof JSON_FETCHING;
}

export interface JsonSuccess {
  type: typeof JSON_SUCCESS;
  payload: any[];
}

export interface JsonFailed {
  type: typeof JSON_FAILED;
  error: string;
}

export type JsonAction = JsonFetching | JsonSuccess | JsonFailed;
