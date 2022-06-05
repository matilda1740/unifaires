import { 
    BUSINESS_ADD_ORG_REQUEST, 
    BUSINESS_ADD_ORG_SUCCESS,
    BUSINESS_ADD_ORG_FAILURE,
    BUSINESS_ADD_INSTRUCTOR_REQUEST,
    BUSINESS_ADD_INSTRUCTOR_SUCCESS,
    BUSINESS_ADD_INSTRUCTOR_FAILURE,
    BUSINESS_ADD_STUDENT_REQUEST,
    BUSINESS_ADD_STUDENT_SUCCESS,
    BUSINESS_ADD_STUDENT_FAILURE
} from "constants/business/addUsersConstants";

export const businessAddOrgReducer = (state = {}, action) => {
    switch (action.type) {
		case BUSINESS_ADD_ORG_REQUEST:
			return { 
                loading: true 
            };
        case BUSINESS_ADD_ORG_SUCCESS:
            return {
				loading: false,
				addUserInfo: action.payload,
				message: action.payload.message,
            }
        case BUSINESS_ADD_ORG_FAILURE:
			return { 
                loading: false, error: action.payload 
            };
        default:
            return state;
    }
}

export const businessAddInstructorReducer = (state = {}, action) => {
    switch (action.type) {
		case BUSINESS_ADD_INSTRUCTOR_REQUEST:
			return { 
                loading: true 
            };
        case BUSINESS_ADD_INSTRUCTOR_SUCCESS:
            return {
				loading: false,
				addInstructorInfo: action.payload,
				message: action.payload.message,
            }
        case BUSINESS_ADD_INSTRUCTOR_FAILURE:
			return { 
                loading: false, error: action.payload 
            };
        default:
            return state;
    }
}

export const businessAddStudentReducer = (state = {}, action) => {
    switch (action.type) {
		case BUSINESS_ADD_STUDENT_REQUEST:
			return { 
                loading: true 
            };
        case BUSINESS_ADD_STUDENT_SUCCESS:
            return {
				loading: false,
				addStudentInfo: action.payload,
				message: action.payload.message,
            }
        case BUSINESS_ADD_STUDENT_FAILURE:
			return { 
                loading: false, error: action.payload 
            };
        default:
            return state;
    }
}