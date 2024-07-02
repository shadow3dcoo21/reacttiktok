
// Iconos de react-native-vector-icons para móvil
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

let HomeIcon, SearchIcon, MessageIcon, ProfileIcon, DropboxIcon;
HomeIcon = (props) => <Icon name="home" {...props} />;
  SearchIcon = (props) => <Icon name="magnify" {...props} />;
  MessageIcon = (props) => <Icon name="message" {...props} />;
  ProfileIcon = (props) => <Icon name="account" {...props} />;
  DropboxIcon = (props) => <Icon name="dropbox" {...props} />;

export { HomeIcon, SearchIcon, MessageIcon, ProfileIcon, DropboxIcon };
