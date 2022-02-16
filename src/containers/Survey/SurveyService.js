import axios from "axios";
import api from "../../api";

class SurveyService {

    getSurveys() {
        return axios.get(api.surveys)
    }

    getSurveyById(id) {
        return axios.get(api.surveys + "/" + id)
    }    

    createSurvey(data) {
        return axios.post(api.surveys, data)
    }

    updateSurvey(id, data) {
        return axios.put(api.surveys + "/" + id, data)
    }

    deleteSurvey(id) {
        return axios.delete(api.surveys + "/" + id)
    }

    createUserResponse(survey_id, data) {
        return axios.post(api.userResponses + "?survey_id=" + survey_id, data)
    }

    getUserResponses(survey_id) {
        return axios.get(api.userResponses + "?survey_id=" + survey_id)
    }

    // createUserResponse(data) {
    //     return axios.post(api.userResponses, data)
    // }

}

export default new SurveyService()