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

}

export default new SurveyService()