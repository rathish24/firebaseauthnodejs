'use strict';

const firebase = require('../db');
const Post = require('../models/post');
const firestore = firebase.firestore();

const getAllPosts= async (req, res, next) => {
    try {
        // let pageSize = 10
        // let field = "createAt"
        const posts = await firestore.collection('posts');
        const data = await posts.get();
        const postArray = [];
        if(data.empty) {
            res.status(404).send('No record found');
        }else {
            data.forEach(doc => {
                const post = new Post(
                    doc.id,
                    doc.data().type,
                    // doc.data().date,
                    // doc.data().timestamp,
                    doc.data().description,
                    // doc.data().image_url
                );
                postArray.push(post);
            });
            res.send(postArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllPosts }