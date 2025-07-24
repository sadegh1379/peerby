declare namespace Service.auth {
  interface phone {
    phoneNumber: string;
  }

  interface code extends phone {
    otp: string;
  }

  interface ResCodeInterface {
    accessToken?: string;
    hasTwoFA?: boolean;
    refreshToken?: string;
    userStatus: enum.USER_STATUS;
    hasReferrerCode: boolean;
    hasSkippedReferral: boolean;
    referrerCode: string;
    hasWallet: boolean;
    name: string | null;
  }

  type ResCode = Service.result<ResCodeInterface>;

  interface userInformation {
    name: string;
    nationalCode: string;
    serialNumber: string;
    birthDate: string;
    cardNumber: string;
    IBAN: string;
    referralCode?: string;
  }

  type frontSession = Partial<Pick<userInformation, 'name'>> & {
    status: enum.USER_STATUS;
    hasTwoFA: boolean;
    hasWalletL: boolean;
  };

  type putUserInformation = Partial<Pick<userInformation, 'cardNumber' | 'IBAN'>>;

  interface uploadVideo {
    video: File;
  }
}
