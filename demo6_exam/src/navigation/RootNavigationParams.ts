export type RootStackParamsList = {
  Home: undefined;
  Register: undefined | { dummy: string };
  Success: undefined | { screen: string, param: any };
  Scanner: undefined | { onResult: any };
  MainTab: undefined;
};

export type RootTabParamsList = {
  Json: undefined | { username: string };
};
