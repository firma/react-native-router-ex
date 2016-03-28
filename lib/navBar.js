import React, { PropTypes, NavigationExperimental } from 'react-native';

const {
  Header: NavigationHeader,
} = NavigationExperimental;

const propTypes = {
  scene: PropTypes.object,
};

let navBar = (props) => {
  let scene = props.scene.navigationState.props;
  if (scene.hideNavBar) {
    return null;
  }

  let renderTitle = () => <NavigationHeader.Title textStyle={scene.titleStyle}>{scene.title}</NavigationHeader.Title>;
  let renderLeftButton = (navProps, navScene) => {
    if (navProps.navigationState.index !== 0) {
      return scene.renderBackButton && scene.renderBackButton(navScene, navProps.onNavigate);
    }

    return scene.renderLeftButton && scene.renderLeftButton(navScene, navProps.onNavigate);
  };
  let renderRightButton = (navProps, navScene) => {
    return scene.renderRightButton(navScene, navProps.onNavigate);
  };

  return (
    <NavigationHeader
      navigationProps={props}
      renderTitleComponent={renderTitle}
      renderLeftComponent={(scene.renderLeftButton || scene.renderBackButton) && renderLeftButton}
      renderRightComponent={scene.renderRightButton && renderRightButton}
    />
  );
};

navBar.propTypes = propTypes;

export default navBar;