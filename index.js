"use strict";
var GobaTypes;
(function (GobaTypes) {
    GobaTypes.EXCEPTIONS = {
        PERMISSION_DENIED_MISSING_PARAMS: { message: 'Permission denied.', code: 'PERMISSION_DENIED', type: 1 },
        PERMISSION_DENIED_BAD_PARAMS: { message: 'Permission denied.', code: 'PERMISSION_DENIED', type: 2 },
        PERMISSION_DENIED: { message: 'Permission denied.', code: 'PERMISSION_DENIED' },
        PIN_VALIDATION: { head: 'Check Your Email', message: 'We need to validate this email address. We\'ve sent a PIN for you to submit. You may need to check your spam filter!', code: 'PERMISSION_DENIED', type: 3 },
        PIN_MISMATCH: { message: 'PIN entered does not match. Please enter it here.', type: 4 },
        PIN_MISMATCH_CHANGED: { message: 'PIN entered does not match. Another, different, PIN is now on the way to your email. Please enter it here.', type: 5 },
        PASSWORD_REQUIRED: { message: 'This user has a password. Please login.', type: 6 },
        MISSING_HEADERS: { code: 'PERMISSION_DENIED', message: 'Permission denied. Request is missing required information.', type: 7 },
        CONSUMER_NOT_FOUND: { code: 'PERMISSION_DENIED', message: 'Permission denied.', type: 8 },
        DEVICE_TOKEN_MISMATCH: { code: 'PERMISSION_DENIED', message: 'Permission denied.', type: 9 },
        SERVER_ERROR: { code: 'SERVER_ERROR', message: 'Something went wrong with request. Please try again.', type: 10 },
        MISSING_CONSUMER: { code: 'SERVER_ERROR', message: 'Something went wrong with request. Please try again.', type: 11 },
        SIGNIN_FAILED: { code: 'PERMISSION_DENIED', message: 'Sign-in failed.', type: 12 },
        USER_TOKEN_MISMATCH: { code: 'PERMISSION_DENIED', message: 'Permission denied.', type: 13 }
    };
    GobaTypes.ACTIONS = {
        None: 0,
        URL: 1,
        Email: 2,
        Phone: 3,
        Place: 4,
        InApp: 5,
        MenuReveal: 6,
        Share: 7,
        Registration: 8,
        Video: 9,
        NestedView: 10,
        FlexDetail: 11,
        Audio: 12,
        SubTab: 13,
        PinchZoom: 14,
        GroupFollow: 15,
        SMS: 16,
        Emailer: 17
    };
    GobaTypes.VIEW_STATUS = {
        Draft: 0, LiveApp: 1, LiveMobile: 2, LiveWeb: 3
    };
})(GobaTypes = exports.GobaTypes || (exports.GobaTypes = {}));
//# sourceMappingURL=index.js.map