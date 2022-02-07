import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors, FontFamily, FontSize } from '@app/config/theme';
interface text {
  children?: React.ReactChild | React.ReactChild[];
  style?: object;
}
export const Display1: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}: text) => {
  return (
    <Text style={[styles.display1, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const Display2: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.display2, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const H1: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.h1, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const H2: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.h2, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const H3: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.h3, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const H4: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.h4, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const H5: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.h5, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const H6: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.h6, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const H7: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.h7, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const BodyMedium: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.bodyMedium, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const BodySmall: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.bodySmall, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const BodyLarge: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.bodyLarge, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const Lead: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.lead, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const BlockQuotes: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.blockQuotes, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const Capitalized: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.capitalized, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const StylizedLead: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.stylizedLead, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const StylizedSmall: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.stylizedSmall, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const StylizedTiny: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.stylizedTiny, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const LabelLarge: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.labelLarge, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const LabelSmall: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.labelSmall, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const LabelMedium: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.labelMedium, style]} {...otherProps}>
      {children}
    </Text>
  );
};
export const LabelTiny: React.FC<text & Record<string, any>> = ({
  children,
  style,
  ...otherProps
}: text) => {
  return (
    <Text style={[styles.labelTiny, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  display1: {
    color: Colors.Black,
    fontSize: FontSize.XxxL,
    fontFamily: FontFamily.RubikB,
  },
  display2: {
    color: Colors.Black,
    fontSize: FontSize.XxxL,
    fontFamily: FontFamily.RubikB,
  },
  h1: {
    color: Colors.Black,
    fontSize: FontSize.XxxL,
    fontFamily: FontFamily.RubikB,
  },
  h2: {
    color: Colors.Black,
    fontSize: FontSize.XxxL - 2,
    fontFamily: FontFamily.RubikB,
  },
  h3: {
    color: Colors.Black,
    fontSize: FontSize.XxL,
    fontFamily: FontFamily.RubikB,
  },
  h4: {
    color: Colors.Black,
    fontSize: FontSize.XL,
    fontFamily: FontFamily.RubikB,
  },
  h5: {
    color: Colors.Black,
    fontSize: FontSize.L,
    fontFamily: FontFamily.RubikB,
  },
  h6: {
    color: Colors.Black,
    fontSize: FontSize.M,
    fontFamily: FontFamily.RubikB,
  },
  h7: {
    color: Colors.Black,
    fontSize: FontSize.M,
    fontFamily: FontFamily.RubikB,
  },
  bodyLarge: {
    color: Colors.Black,
    fontSize: FontSize.L,
    fontFamily: FontFamily.RubikR,
  },
  bodyMedium: {
    color: Colors.Black,
    fontSize: FontSize.M,
    fontFamily: FontFamily.RubikR,
  },
  bodySmall: {
    color: Colors.Black,
    fontSize: FontSize.S,
    fontFamily: FontFamily.RubikR,
  },
  lead: {
    color: Colors.Black,
    fontSize: FontSize.S,
    fontFamily: FontFamily.RubikB,
  },
  blockQuotes: {
    color: Colors.Black,
    fontSize: FontSize.L,
    fontFamily: FontFamily.RubikM,
  },
  capitalized: {
    color: Colors.Black,
    textTransform: 'uppercase',
    fontSize: FontSize.S,
    fontFamily: FontFamily.RubikR,
  },
  sapitalized: {
    color: Colors.Black,
    fontSize: FontSize.S,
    fontFamily: FontFamily.RubikB,
  },
  stylizedLead: {
    color: Colors.Black,
    fontSize: FontSize.S,
    fontFamily: FontFamily.RubikB,
  },
  stylizedSmall: {
    color: Colors.Black,
    fontSize: FontSize.ExS,
    fontFamily: FontFamily.RubikR,
  },
  stylizedTiny: {
    color: Colors.Black,
    fontSize: FontSize.ExxS,
    fontFamily: FontFamily.RubikM,
  },
  labelLarge: {
    color: Colors.Black,
    fontSize: FontSize.S,
    fontFamily: FontFamily.RubikM,
  },
  labelMedium: {
    color: Colors.Black,
    fontSize: FontSize.ExS,
    fontFamily: FontFamily.RubikM,
  },
  labelSmall: {
    color: Colors.Black,
    fontSize: FontSize.ExxS,
    fontFamily: FontFamily.RubikM,
  },
  labelTiny: {
    color: Colors.Black,
    fontSize: FontSize.ExxxS,
    fontFamily: FontFamily.RubikR,
  },
});
