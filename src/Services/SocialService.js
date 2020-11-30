import firebase from '../firebase'

const db = firebase.collection("/posts")

class SocialService {
    getAll() {
        return db
    }

    create(post) {
        return db.add(post)
    }

    update(id,value) {
        return db.doc(id).update(value)
    }

    delete(id) {
        return db.doc(id).delete()
    }
}

export default new SocialService()