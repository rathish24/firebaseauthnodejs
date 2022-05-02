'use strict';

//const db = require('../db');
const {admin,db
} = require('../db');
const Post = require('../models/post');


//const firestore = firebase.firestore();

const getAllPosts= async (req, res, next) => {
    try {
        // let pageSize = 10
        // let field = "createAt"
        const posts = await db.collection('posts');
        console.log('posts-------',posts)
        const data = await posts.get();
        console.log('data-------',data)
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
        console.log('error.message-------',error.message)
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllPosts }