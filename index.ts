
export namespace GobaTypes {
    export const EXCEPTIONS = {
        PERMISSION_DENIED_MISSING_PARAMS:{message:'Permission denied.',code:'PERMISSION_DENIED',type:1}
        ,PERMISSION_DENIED_BAD_PARAMS:{message:'Permission denied.',code:'PERMISSION_DENIED',type:2}
        ,PERMISSION_DENIED:{message:'Permission denied.',code:'PERMISSION_DENIED'}
        ,PIN_VALIDATION:{head:'Check Your Email',message:'We need to validate this email address. We\'ve sent a PIN for you to submit. You may need to check your spam filter!',code:'PERMISSION_DENIED',type:3}
        ,PIN_MISMATCH:{message:'PIN entered does not match. Please enter it here.',type:4}
        ,PIN_MISMATCH_CHANGED:{message:'PIN entered does not match. Another, different, PIN is now on the way to your email. Please enter it here.',type:5}
        ,PASSWORD_REQUIRED:{message:'This user has a password. Please login.',type:6}
        ,MISSING_HEADERS:{code:'PERMISSION_DENIED',message:'Permission denied. Request is missing required information.',type:7}
        ,CONSUMER_NOT_FOUND:{code:'PERMISSION_DENIED',message:'Permission denied.',type:8}
        ,DEVICE_TOKEN_MISMATCH:{code:'PERMISSION_DENIED',message:'Permission denied.',type:9}
        ,SERVER_ERROR:{code:'SERVER_ERROR',message:'Something went wrong with request. Please try again.',type:10}
        ,MISSING_CONSUMER:{code:'SERVER_ERROR',message:'Something went wrong with request. Please try again.',type:11}
        ,SIGNIN_FAILED:{code:'PERMISSION_DENIED',message:'Sign-in failed.',type:12}
        ,USER_TOKEN_MISMATCH:{code:'PERMISSION_DENIED',message:'Permission denied.',type:13}
    };

    export const ACTIONS = {
        None:0,
        URL:1,
        Email:2,
        Phone:3,
        Place:4,
        InAppDestination:5,
        MenuReveal:6,
        Share:7,
        Registration:8,
        Video:9,
        NestedView:10,
        FlexDetail:11,
        Audio:12,
        SubTab:13,
        PinchZoom:14,
        GroupFollow:15,
        SMS:16,
        Emailer:17
    };

    export const VIEW_STATUS = {
        Draft:0,LiveApp:1,LiveMobile:2,LiveWeb:3
    };

    export interface Collection {
        nTotal?: number;
        aObjects?: Array<any>;
    }

    export interface View {
        sID?:string,
        sTitle?: string;
        sPlugin?: string;
        bDefault?: boolean;
        nStatus?:number;
        hImage?: any;
        nWebOrder?:number;
        nOrder?:number;
        bWebMenu?:boolean;
        sDescription?:string;
        cItems?: Collection;
        aItems?:Array<any>;
    }

    export interface Feed {
        nType?:number;
        sUrl?:string;
        sID?:string;
        sParentID?:string;
        sParentType?:string;
        sTZ?:string;
        sTZSource?:string;
        sAccessToken?:string;
        sSecret?:string;
        sRefreshToken?:string;
        sTitle?:string;
        sOtherID?:string;
        sOtherID2?:string;
        nLastCheck?:number;
        nFailures?:number;
        sError?:string;
        sNotes?:string;
        sLastHash?:string;
        bPaused?:boolean;
        path?:string;
        nMax?:number;

    }

    export interface Flex {
        sID:string;
        sFeedID:string;
        nType: number;
        sType:string;
        nOrder:number;
        nCtaType:number;
        nCtaClass:number;
        nCtaID:number;
        sCtaText:string;
        sCtaStyle:string;
        sCtaUrl:string;
        nSecondarySort:number;
        nCreated:number;
        nUpdated:number;
        sTitle: string;
        sOuterClass:string;
        sInnerClass:string;
        sImgClass:string;
        hCss:any;
        hInnerCss:any;
        hImgCss:any;
        sText:string;
        sTitleTag:string;
        sHtml:string;
        sParentPath:string;
        sPath:string;
        hForm:any;
        hImage:any;
        Items:any;
        sTag:string;
        aTags:Array<string>;
        aItems:Array<any>;
        cItems:Collection;
    }

    export interface Consumer {
        sAppTitle?: string;
        sTitle?: string;
        sToken?: string;
        sApi?:string;
        sFGColor?:string,
        sBGColor?:string,
        sAColor?:string,
        sA2Color?:string,
        sWebDomain?:string;
        sHoursSchema?:string;
        sDescription?:string;
        hSocial?:any;
        hAddress?:any;
        hImage?: any;
        Analytics?:any;
        DomainDefaults:?any;
        cMenu?: Collection;
    }

    export interface ApiRequest {
        consumer_id?:string;
        consumer?:any;
        device_id?:string;
        user_id?:string;
        headers?:any;
        body?:any;
        params?:any;
    }
}
