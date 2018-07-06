function inputStyles({ isDisabled, hasFocus, hasHover }, themeData) {
  const defaults = {
    borderBottomColor: themeData["INPUT.BORDER_BOTTOM_COLOR"],
    color: themeData["INPUT.FONT_COLOR"],
    transitionProperty: "color",
    transitionDuration: "0.3s"
  };

  if (isDisabled) {
    return {
      ...defaults,
      borderBottomColor: themeData["INPUT.DISABLED.BORDER_BOTTOM_COLOR"],
      color: themeData["INPUT.DISABLED.FONT_COLOR"]
    };
  }
  if (hasFocus) {
    return {
      ...defaults,
      borderBottomColor: themeData["INPUT.FOCUS.BORDER_BOTTOM_COLOR"],
      transitionDuration: "0.1s"
    };
  }
  if (hasHover) {
    return {
      ...defaults,
      borderBottomColor: themeData["INPUT.HOVER.BORDER_BOTTOM_COLOR"],
      transitionDuration: "0.1s"
    };
  }
  return defaults;
}

function haloStyles({ isDisabled, hasFocus, hasHover }, themeData) {
  const defaults = {
    height: 0,
    backgroundColor: themeData["INPUT.HALO.COLOR"],
    transitionProperty: "height, color",
    transitionDuration: "0.3s, 0.3s"
  };

  if (isDisabled) {
    return {};
  }
  if (hasFocus) {
    return {
      height: themeData["INPUT.FOCUS.HALO.WIDTH"],
      backgroundColor: themeData["INPUT.FOCUS.HALO.COLOR"],
      transitionDuration: "0.1s, 0.1s"
    };
  }
  if (hasHover) {
    return {
      ...defaults,
      height: themeData["INPUT.HOVER.HALO.WIDTH"],
      transitionDuration: "0.1s, 0.1s"
    };
  }
  return defaults;
}

export default function stylesheet(props, themeData) {
  return {
    inputWrapper: {
      position: "relative",
      width: "300px"
    },
    input: {
      boxSizing: "border-box",
      appearance: "none",
      minHeight: themeData["INPUT.MIN_HEIGHT"],
      paddingTop: themeData["DENSITY.INPUT.VERTICAL_PADDING"],
      paddingBottom: themeData["DENSITY.INPUT.VERTICAL_PADDING"],
      borderTop: "none",
      borderRight: "none",
      borderBottomWidth: themeData["INPUT.BORDER_BOTTOM_WIDTH"],
      borderLeft: "none",
      outline: "none",
      fontSize: themeData["DENSITY.FONT_SIZES.M"],
      width: "100%",
      ...inputStyles(props, themeData)
    },
    halo: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      ...haloStyles(props, themeData)
    }
  };
}
