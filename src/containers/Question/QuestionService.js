import axios from "axios";
import api from "../../api";

class QuestionService {

    getQuestions(survey_id) {
        return axios.get(api.questions + "?survey=" + survey_id)
    }

}

export default new QuestionService()