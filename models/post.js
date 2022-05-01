class Post {

    constructor(id, type, date, timestamp, description,
        image_url) {
            this.id = id;
            this.type = type;
            this.date = date;
            this.timestamp = timestamp;
            this.description = description;
            this.image_url = image_url;
    }
}

module.exports = Post;