import axios from "axios";
import api from "../../api";

class AnswerService {

    getAnswers(question_id) {
        return axios.get(api.answers + "?question_id=" + question_id)
    }

    getAnswerById(id) {
        return axios.get(api.answers + "/" + id)
    }    

    createAnswer(question_id, data) {
        return axios.post(api.answers + "?question_id=" + question_id, data)
    }

    updateAnswer(id, data) {
        return axios.put(api.answers + "/" + id, data)
    }

    deleteAnswer(id) {
        return axios.delete(api.answers + "/" + id)
    }

}

export default new AnswerService()