import { MenuDataItem } from '@ant-design/pro-layout';

import { DefaultSettings as SettingModelState } from '../../config/defaultSettings';
import { GlobalModelState } from './global';
import { StateType } from './login';
import { UserModelState } from './user';

export { GlobalModelState, SettingModelState, UserModelState };

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login?: boolean;
  };
}

export interface ConnectState {
  global: GlobalModelState;
  loading: Loading;
  settings: SettingModelState;
  user: UserModelState;
  login: StateType;
}

export interface Route extends MenuDataItem {
  routes?: Route[];
}
