declare namespace Services {
    interface OtpRequest {
        username: string;
    }

    interface ValidateOtpRequest {
        username: string;
        otp: string;
    }

    interface ValidateOtpResponse {
        token: string;
    }
}