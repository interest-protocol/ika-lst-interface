export const getStatusUIConfig = (status: string) => {
  const isTimeFormat = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(status);

  if (isTimeFormat) {
    return {
      bg: '#FFFFFF14',
      color: '#FFFFFF',
      buttonBg: '#1CDBDA80',
      buttonColor: '#000000',
      disabled: true,
      text: 'Get LST',
    };
  }

  switch (status) {
    case 'Withdrawing':
      return {
        bg: '#83F34E14',
        color: '#83F34E',
        buttonBg: '#EE2B5B80',
        buttonColor: '#000000',
        disabled: true,
        text: 'Withdraw',
      };
    case 'Ready to Get':
      return {
        bg: '#C484F614',
        color: '#C484F6',
        buttonBg: '#1CDBDA',
        buttonColor: '#000000',
        disabled: false,
        text: 'Get LST',
      };
    case 'Read to Withdraw':
      return {
        bg: '#F5B72214',
        color: '#F5B722',
        buttonBg: '#EE2B5B',
        buttonColor: '#FFFFFF',
        disabled: false,
        text: 'Withdraw',
      };
    case 'Staked':
      return {
        bg: '#FFFFFF14',
        color: '#FFFFFF',
        buttonBg: '#EE2B5B',
        buttonColor: '#FFFFFF',
        disabled: false,
        text: 'Withdraw',
      };
    default:
      return {
        bg: '#FFFFFF14',
        color: '#FFFFFF',
        buttonBg: '#1CDBDA80',
        buttonColor: '#000000',
        disabled: true,
        text: 'N/A',
      };
  }
};
