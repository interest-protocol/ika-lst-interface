export const getStatusUIConfig = (status: string) => {
  const baseButtonStyle = {
    border: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    borderRadius: '8px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: ['100%', '100%', '6.8125rem'],
    height: '2.5rem',
    padding: '8px 24px',
    gap: '10px',
    marginTop: '0',
  };

  const baseStatusStyle = {
    fontWeight: '400',
    height: '1.625rem',
    padding: '4px 8px',
    fontSize: '0.875rem',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    borderRadius: '1.6875rem',
    letterSpacing: '0%',
  };

  const isTimeFormat = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(status);

  if (isTimeFormat) {
    return {
      statusStyle: {
        ...baseStatusStyle,
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
        ...baseStatusStyle,
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
        ...baseStatusStyle,
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
        ...baseStatusStyle,
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
        ...baseStatusStyle,
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
      ...baseStatusStyle,
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
