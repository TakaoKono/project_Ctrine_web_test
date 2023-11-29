// const TEST_API_KEY = process.env.FIREBASE_API_KEY;

const certificationRequests = {
    fetchSignup: `/api/v1/signup`,
    fetchResendEmailVerification: `/api/v1/resend-email-verification`,
    fetchCreateSession: `/api/v1/create-session`,
    fetchDeleteSession: `/api/v1/delete-session`,
    fetchUpdateEmail: `/api/v1/update-email/`,
    fetchDestroyUser: `/api/v1/destroy-user/`,
    fetchGetUser: `/api/v1/user`,
    fetchUpdateUser: `/api/v1/user/`,
    fetchReCertification: `/api/v1/re-certification`,
    fetchResetAuthPassword: `/api/v1/reset-auth-password`,

    // ローカル用（Cors影響のため）
    localFetchCreateSession: `/api/local/create-session`,
    localFetchDeleteSession: `/api/local/delete-session`,
    localFetchCertification: `/api/local/certification`,
};

export default certificationRequests;