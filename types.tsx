export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type AlbumDetails = {
  id: string;
  imageUri: string;
  artistsHeadline: string;
  name: string,
  by: string,
  numberOfLikes: string,
  
}

export type Song = {
  id: string,
  imageUri: string,
  title: string,
  artist: string,
}