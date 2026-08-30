import { tokens } from './tokens';

export const antTheme = {
  token: {
    colorPrimary: tokens.colors.emerald,
    colorSuccess: tokens.colors.success,
    colorWarning: tokens.colors.warning,
    colorError: tokens.colors.error,
    colorInfo: tokens.colors.info,
    colorTextBase: tokens.colors.charcoal,
    colorBgBase: tokens.colors.white,
    colorBgLayout: tokens.colors.softGreenWhite,
    colorBorder: tokens.colors.lightGreenGray,
    borderRadius: tokens.borderRadius.md,
    borderRadiusLG: tokens.borderRadius.lg,
    borderRadiusSM: tokens.borderRadius.sm,
    fontFamily: tokens.fonts.main,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,
    controlHeight: 42,
    controlHeightLG: 48,
    controlHeightSM: 34,
  },
  components: {
    Button: {
      borderRadius: tokens.borderRadius.md,
      controlHeight: 42,
      controlHeightLG: 48,
      fontWeight: 600,
      primaryColor: tokens.colors.white,
      primaryShadow: '0 4px 14px 0 rgba(5, 150, 105, 0.3)',
      defaultBorderColor: tokens.colors.lightGreenGray,
      defaultColor: tokens.colors.forestGreen,
      defaultBg: tokens.colors.white,
    },
    Card: {
      borderRadiusLG: tokens.borderRadius.lg,
      colorBorderSecondary: tokens.colors.lightGreenGray,
      boxShadowTertiary: tokens.shadows.card,
    },
    Menu: {
      itemBorderRadius: tokens.borderRadius.sm,
      itemColor: tokens.colors.charcoal,
      itemHoverColor: tokens.colors.emerald,
      itemSelectedColor: tokens.colors.emerald,
      itemSelectedBg: tokens.colors.emeraldLight,
    },
    Table: {
      headerBg: '#F3F7F4',
      headerColor: tokens.colors.forestGreen,
      borderRadiusLG: tokens.borderRadius.md,
      borderColor: tokens.colors.lightGreenGray,
    },
    Tabs: {
      itemColor: tokens.colors.secondaryText,
      itemSelectedColor: tokens.colors.forestGreen,
      itemHoverColor: tokens.colors.emerald,
      inkBarColor: tokens.colors.emerald,
    },
    Input: {
      borderRadius: tokens.borderRadius.md,
      colorBorder: tokens.colors.lightGreenGray,
      hoverBorderColor: tokens.colors.emerald,
      activeBorderColor: tokens.colors.emerald,
    },
    Select: {
      borderRadius: tokens.borderRadius.md,
      colorBorder: tokens.colors.lightGreenGray,
    },
    Tag: {
      borderRadiusSM: tokens.borderRadius.sm,
    },
    Badge: {
      colorPrimary: tokens.colors.emerald,
    },
    Collapse: {
      borderRadiusLG: tokens.borderRadius.md,
      headerBg: '#FAFDFB',
    },
  },
};
