export const getStatusUIConfig = (status: string) => {
  const baseButtonStyle = {
    py: '0.8rem',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    borderRadius: '0.5rem',
    display: 'inline-block',
    width: ['100%', '6.815rem'],
    marginTop: ['0.4rem', '0'],
    px: ['1.5rem', '1.25rem', '1rem'],
  };

  const isTimeFormat = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(status);

  if (isTimeFormat) {
    return {
      statusStyle: {
        bg: '#FFFFFF14',
        color: '#FFFFFF',
      },
      buttonStyle: {
        ...baseButtonStyle,
        bg: '#1CDBDA80',
        color: '#000000',
        disabled: true,
        text: 'Get LST',
        opacity: 0.6,
        cursor: 'not-allowed',
      },
    };
  }

  const statusConfigs = {
    Withdrawing: {
      statusStyle: {
        bg: '#83F34E14',
        color: '#83F34E',
      },
      button: {
        bg: '#EE2B5B80',
        color: '#000000',
        disabled: true,
        text: 'Withdraw',
        opacity: 0.6,
        cursor: 'not-allowed',
      },
    },
    'Ready to Get': {
      statusStyle: {
        bg: '#C484F614',
        color: '#C484F6',
      },
      button: {
        bg: '#1CDBDA',
        color: '#000000',
        disabled: false,
        text: 'Get LST',
        opacity: 1,
        cursor: 'pointer',
      },
    },
    'Ready to Withdraw': {
      statusStyle: {
        bg: '#F5B72214',
        color: '#F5B722',
      },
      button: {
        bg: '#EE2B5B',
        color: '#FFFFFF',
        disabled: false,
        text: 'Withdraw',
        opacity: 1,
        cursor: 'pointer',
      },
    },
    Staked: {
      statusStyle: {
        bg: '#FFFFFF14',
        color: '#FFFFFF',
      },
      button: {
        bg: '#EE2B5B',
        color: '#FFFFFF',
        disabled: false,
        text: 'Withdraw',
        opacity: 1,
        cursor: 'pointer',
      },
    },
  };

  const defaultConfig = {
    statusStyle: {
      bg: '#FFFFFF14',
      color: '#FFFFFF',
    },
    button: {
      bg: '#1CDBDA80',
      color: '#000000',
      disabled: true,
      text: 'N/A',
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  };

  const config =
    statusConfigs[status as keyof typeof statusConfigs] || defaultConfig;

  return {
    statusStyle: config.statusStyle,
    buttonStyle: {
      ...baseButtonStyle,
      ...config.button,
    },
  };
};
