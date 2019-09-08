const rhythm = (value = 1, unit = 'rem', basis = 1.5) =>
  Array.isArray(value)
    ? value.map(v => `${basis * v}${unit}`).join(' ')
    : `${basis * value}${unit}`;

const colors = {
  green: '#1bab6b',
  primary: '#5269e7'
};

const theme = {};

const styles = {
  SectionHeading: {
    sectionName: {
      color: colors.primary
    }
  },
  Heading: {
    heading2: {
      position: 'relative',
      paddingBottom: rhythm(0.25),
      '&:before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: rhythm(1),
        height: '4px',
        backgroundColor: colors.green,
        borderRadius: '4px'
      }
    }
  }
};

module.exports = {
  styles: styles,
  theme: theme
};
