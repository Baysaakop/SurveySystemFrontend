import axios from "axios";
import api from "../../api";

class QuestionService {

    getQuestions(survey_id) {
        return axios.get(api.questions + "?survey_id=" + survey_id)
    }

    getQuestionById(id) {
        return axios.get(api.questions + "/" + id)
    }    

    createQuestion(survey_id, data) {
        return axios.post(api.questions + "?survey_id=" + survey_id, data)
    }

    updateQuestion(id, data) {
        return axios.put(api.questions + "/" + id, data)
    }

    deleteQuestion(id) {
        return axios.delete(api.questions + "/" + id)
    }

}

export default new QuestionService()