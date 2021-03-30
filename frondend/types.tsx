export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  PredResults: undefined;
  SearchResults: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  search: undefined;
  Favourites: undefined;
  Settings: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type TabThreeParamList = {
  TabThreeScreen: undefined;
};

export type TabFourParamList = {
  TabFourScreen: undefined;
};

export type Navigation = {
  navigate: (scene: string) => void;
};

